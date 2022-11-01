// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

interface IERC20Token {
    function transfer(address, uint256) external returns (bool);

    function approve(address, uint256) external returns (bool);

    function transferFrom(
        address,
        address,
        uint256
    ) external returns (bool);

    function totalSupply() external view returns (uint256);

    function balanceOf(address) external view returns (uint256);

    function allowance(address, address) external view returns (uint256);

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(
        address indexed owner,
        address indexed spender,
        uint256 value
    );
}

/**
    @title This contract allows anyone to create a house keeping agency that provides
    house keeping services. These agencies can be bought by anyone if listed as 
    sellable and anyone except the agency can buy or hire them. 
*/
contract housekeepers {
    // Number of  registered house keeping agencies.
    address internal cUsdTokenAddress =
        0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1;

    struct Agency {
        address agency_address;
        string agency_name;
        string location;
        string agency_info;
        string agency_image;
        uint256 hire_fee;
        bool sellable;
        uint256 agency_worth;
        uint256 customers;
    }

    struct Transaction {
        string agency_name;
        uint256 date_hired;
        uint256 hire_fee;
    }

    Agency[] internal agencies;
    mapping(address => Transaction[]) internal users_transactions;

    function registerAgency(
        string calldata _agency_name,
        string calldata _location,
        string calldata _agency_info,
        string calldata _agency_image,
        bool _sellable,
        uint256 _agency_worth,
        uint256 _hire_fee
    ) public {
        require(bytes(_agency_name).length > 0, "Empty agency name");
        require(bytes(_location).length > 0, "Empty location");
        require(bytes(_agency_info).length > 0, "Empty agency info");
        require(bytes(_agency_image).length > 0, "Empty agency image");
        require(_hire_fee > 0, "Hiring fee must be greater than zero");
        if (_sellable) {
            require(
                _agency_worth > 0,
                "Agency worth must be greater than zero"
            );
        }
        agencies.push(
            Agency(
                payable(msg.sender),
                _agency_name,
                _location,
                _agency_info,
                _agency_image,
                _hire_fee,
                _sellable,
                _sellable ? _agency_worth : 0,
                0
            )
        );
    }

    // modifier to handle the respective payment depending on whether caller is hiring the agency or buying it
    // agency must be available for sale to be able to be bought
    modifier approveTransfer(uint256 _index, uint256 option) {
        address agency_address = agencies[_index].agency_address;
        // Making sure an agency can't hire itself.
        require(agency_address != msg.sender, "an Agency cannot hire itself.");
        if (option == 0) {
            require(
                IERC20Token(cUsdTokenAddress).transferFrom(
                    msg.sender,
                    payable(agency_address),
                    agencies[_index].hire_fee
                ),
                "Transfer failed."
            );
        } else {
            require(
                agencies[_index].sellable == true,
                "This House Keeping agency is not for sale."
            );

            require(
                IERC20Token(cUsdTokenAddress).transferFrom(
                    msg.sender,
                    payable(agency_address),
                    agencies[_index].agency_worth
                ),
                "Transfer failed."
            );
        }
        _;
    }

    /// @dev Temporarily hire the agency to help with house cleaning.
    function hireAgency(uint256 _index)
        public
        payable
        approveTransfer(_index, 0)
    {
        users_transactions[msg.sender].push(
            Transaction(
                agencies[_index].agency_name,
                block.timestamp,
                agencies[_index].hire_fee
            )
        );
        agencies[_index].customers++;
    }

    /// @dev You can buy a registered agency and be the  company/individual  to render services to others.
    function buyAgency(
        uint256 _index,
        string calldata _newAgencyName,
        string calldata _newAgency_info,
        string calldata _newAgency_image,
        bool _sellable
    ) public payable approveTransfer(_index, 1) {
        require(bytes(_newAgencyName).length > 0, "Empty agency name");
        require(bytes(_newAgency_info).length > 0, "Empty agency info");
        require(bytes(_newAgency_image).length > 0, "Empty agency image");
        Agency storage currentAgency = agencies[_index];

        currentAgency.agency_address = payable(msg.sender);
        currentAgency.agency_name = _newAgencyName;
        currentAgency.agency_info = _newAgency_info;
        currentAgency.agency_image = _newAgency_image;
        currentAgency.sellable = _sellable;
    }

    function getAgencies() public view returns (Agency[] memory) {
        return agencies;
    }

    function getUserTransactions() public view returns (Transaction[] memory) {
        return users_transactions[msg.sender];
    }
}
