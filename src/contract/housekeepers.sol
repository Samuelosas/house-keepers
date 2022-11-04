// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

interface IERC20Token {
  function transfer(address, uint256) external returns (bool);
  function approve(address, uint256) external returns (bool);
  function transferFrom(address, address, uint256) external returns (bool);
  function totalSupply() external view returns (uint256);
  function balanceOf(address) external view returns (uint256);
  function allowance(address, address) external view returns (uint256);

  event Transfer(address indexed from, address indexed to, uint256 value);
  event Approval(address indexed owner, address indexed spender, uint256 value);
}

/*
    ABOUT THE CONTRACT.
        This contract allows anyone to create a house keeping agency that provides
    house keeping services. These agencies can be bought by anyone if listed as 
    sellable and anyone except the agency can buy or hire them. 
*/
contract housekeepers {
    // Number of  registered house keeping agencies.
    address internal cUsdTokenAddress = 0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1;

    struct Agency {
        address agency_address;
        string agency_name;
        string location;
        string agency_info;
        string agency_image;
        uint hire_fee;
        bool sellable;
        uint agency_worth;
        uint customers;
        uint date_hired;
        bool sold;
    }

    struct Transaction {
        string agency_name;
        uint date_hired;
        uint hire_fee;
    }

    Agency[] internal agencies;
    mapping(address => Transaction[]) internal users_transactions;

    function registerAgency(
        string calldata _agency_name,
        string calldata _location,
        string calldata _agency_info,
        string calldata _agency_image,
        bool _sellable,
        uint _agency_worth,
        uint _hire_fee
    ) public{
        require(
            _hire_fee > 0,
             "Hiring fee must be greater than zero"
        );
        if(_sellable){
            require(
                _agency_worth > 0,
                "Agency worth must be greater than zero"
            );
        }
        agencies.push(Agency(
            payable(msg.sender),
            _agency_name,
            _location,
            _agency_info,
            _agency_image,
            _hire_fee,
            _sellable,
            _sellable ? _agency_worth : 0,
            0,
            0,
            false
        ));
    }

    modifier approveTransfer(uint _index){
        // Making sure an agency can't hire itself.
        require(
            agencies[_index].agency_address != msg.sender,
            "an Agency cannot hire itself."
        );
        require(
          IERC20Token(cUsdTokenAddress).transferFrom(
            msg.sender,
            payable(agencies[_index].agency_address),
            agencies[_index].hire_fee
          ),
          "Transfer failed."
        );

        _;
    }

    // Temporary hire the agency to help with house cleaning.
    function hireAgency(
        uint _index
    ) public payable approveTransfer(_index){
        users_transactions[msg.sender].push(Transaction(
            agencies[_index].agency_name,
            block.timestamp,
            agencies[_index].hire_fee
        ));
        agencies[_index].customers++;
        agencies[_index].date_hired = block.timestamp;
    }

    // check if hiring time limit has expired 
    function isHiringExpired(uint _index)public view returns(bool) {
        if(block.timestamp > agencies[_index].date_hired + 2 minutes){
            return true;
        }
        return false;
    }

    // You can buy a registered agency and be the  company/individual
    // to render services to others.
    function buyAgency(
        uint _index,
        string calldata _newAgencyName,
        string calldata _newAgency_info,
        string calldata _newAgency_image,
        bool _sellable
    ) public payable approveTransfer(_index){
        require(
            agencies[_index].sellable == true, 
            "This House Keeping agency is not for sale."
        );
        agencies[_index].agency_address = payable(msg.sender);
        agencies[_index].agency_name = _newAgencyName;
        agencies[_index].agency_info = _newAgency_info;
        agencies[_index].agency_image = _newAgency_image;
        agencies[_index].sellable = _sellable;
        agencies[_index].sold = false;
    }
    // function to sell a sellable agency
    function sellAgency(uint _index) public  {
        require(
            agencies[_index].sellable == true, 
            "This House Keeping agency is not for sale."
        );
        agencies[_index].sold = true;
    }

    // Get List of Agencies 
    function getAgencies() public view returns(Agency[] memory){
        return agencies;
    }

    // Get List of User Transactions
    function getUserTransactions () public view returns(Transaction[] memory){
        return users_transactions[msg.sender];
    }
}