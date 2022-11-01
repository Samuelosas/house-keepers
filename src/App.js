import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Alert from "react-bootstrap/Alert"
import { Container, Row, Col } from "react-bootstrap"
import { Balance } from "./Balance"
import { RegisterAgency } from "./RegisterAgency"
import { Card } from "./Card"
import Web3 from "web3"
import BigNumber from "bignumber.js"
import { newKitFromWeb3 } from "@celo/contractkit"
import { useEffect, useState } from "react"
import housekeepingAbi from "./contract/housekeepers.abi.json"
import ierc20Abi from "./contract/IERC20.abi.json"

function App() {
  const cUSDContractAddress = "0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1"
  const deployAddress = "0x78b4D7759d95FfE53CDaCdd8C237328678E74629"
  const [show, setShow] = useState(false)
  const [kit, setKit] = useState()
  const [contract, setContract] = useState()
  const [msg, setMsg] = useState()
  const [showNotification, setShowNotification] = useState(true)
  const [balance, setBalance] = useState(0)
  const [actionNotification, setActionNotification] = useState(false)
  const [agencies, setAgencies] = useState([])
  const [showApp, setShowApp] = useState(false)
  const ERC20_DECIMAL = 18

  // Connect Wallet Function
  const connectCeloWallet = async () => {
    if (window.celo) {
      setMsg("⚠️ Please approve this DApp to use it.")
      try {
        await window.celo.enable()
        setShowNotification(false)
        setShowApp(true)
        const web3 = new Web3(window.celo)
        let kit_ = newKitFromWeb3(web3)
        const accounts = await kit_.web3.eth.getAccounts()
        kit_.defaultAccount = accounts[0]
        let contract_ = new kit_.web3.eth.Contract(
          housekeepingAbi,
          deployAddress
        )
        setKit(kit_)
        setContract(contract_)
      } catch (error) {
        setMsg(`${error.message}`)
      }
    } else {
      setMsg("⚠️ Please install the CeloExtensionWallet.")
    }
  }

  // Get Balance Function
  const getBalance = async function () {
    let totalBalance = await kit.getTotalBalance(kit.defaultAccount)
    let cUSDBalance = totalBalance.cUSD.shiftedBy(-ERC20_DECIMAL).toFixed(2)
    setBalance(cUSDBalance)
  }

  // Register Agency Function
  const registerAgency = async (
    name,
    location,
    info,
    image,
    isSellable,
    worth,
    fee
  ) => {
    const params = [
      name,
      location,
      info,
      image,
      isSellable,
      new BigNumber(isSellable ? worth : 1).shiftedBy(ERC20_DECIMAL).toString(),
      new BigNumber(fee).shiftedBy(ERC20_DECIMAL).toString(),
    ]
    setActionNotification(true)
    setMsg(`Registering Agency, ${name}...`)
    try {
      await contract.methods
        .registerAgency(...params)
        .send({ from: kit.defaultAccount })
      setMsg(`Successfully registered Agency, ${name}...`)
      await getAgencies_()
      setTimeout(() => setShow(false), 1000)
    } catch (error) {
      setMsg(error.message)
      console.log(error)
    }
  }

  // Get All agency function
  const getAgencies_ = async () => {
    try {
      const agencies = await contract.methods.getAgencies().call()
      setAgencies(agencies)
      console.log(new Array(agencies).reverse((a, b) => a + b))
    } catch (error) {
      console.log(error.message)
    }
  }

  // Approve payment function
  const approve = async (_price) => {
    const cUSDContract = new kit.web3.eth.Contract(
      ierc20Abi,
      cUSDContractAddress
    )
    const result = await cUSDContract.methods
      .approve(deployAddress, _price)
      .send({ from: kit.defaultAccount })
    return result
  }

  // Hire Agency Function
  const hireAgency = async (index) => {
    setShowNotification(true)
    setMsg("⌛ Waiting for payment approval...")
    try {
      await approve(new BigNumber(agencies[index].hire_fee).toString())
      setMsg(`⌛ Awaiting payment for "${agencies[index].agency_name}"...`)
    } catch (error) {
      setMsg(`⚠️ ${error.message}.`)
    }
    try {
      await contract.methods
        .hireAgency(index)
        .send({ from: kit.defaultAccount })
      setMsg(
        `🎉 You successfully hired "${agencies[index].agency_name}" for their services.`
      )
      getBalance()
    } catch (error) {
      setMsg(error.message)
    }
  }

  // Buy Agency Function
  const buyAgency = async (index, newName, newInfo, newImg, sellable) => {
    setShowNotification(true)
    setMsg("⌛ Waiting for payment approval...")
    try {
      await approve(new BigNumber(agencies[index].agency_worth).toString())
      setMsg(`⌛ Awaiting payment for "${agencies[index].agency_name}"...`)
    } catch (error) {
      setMsg(`⚠️ ${error.message}.`)
    }
    try {
      await contract.methods
        .buyAgency(index, newName, newInfo, newImg, sellable)
        .send({ from: kit.defaultAccount })
      setMsg(
        `🎉 You successfully bought the "${agencies[index].agency_name}" agency.`
      )
      getBalance()
      getAgencies_()
    } catch (error) {
      setMsg(error.message)
    }
  }

  useEffect(() => {
    connectCeloWallet()
  }, [])
  useEffect(() => {
    if (kit && contract) {
      getBalance()
      getAgencies_()
    }
  }, [kit, contract])
  return (
    <Container>
      <div className="d-flex align-items-center justify-content-between my-3">
        <h3>House Keepers</h3>
        <Balance balance={balance} />
      </div>
      {showNotification && (
        <>
          <div className="mt-3">
            <Alert variant={"warning"}>{msg}</Alert>
          </div>
        </>
      )}
      {showApp && (
        <>
          <RegisterAgency
            register={registerAgency}
            msg={msg}
            action={actionNotification}
            show={show}
            setShow={setShow}
          />
          <div className="my-4 agencies">
            <Row className="justify-content-center">
              {agencies.map((agency, key) => (
                <Col
                  key={key}
                  xs={10}
                  md={{ order: agencies.length - key, span: 4 }}
                >
                  <Card
                    name={agency.agency_name}
                    location={agency.location}
                    about={agency.agency_info}
                    hire_amount={new BigNumber(agency.hire_fee)
                      .shiftedBy(-ERC20_DECIMAL)
                      .toString()}
                    agency_worth={new BigNumber(agency.agency_worth)
                      .shiftedBy(-ERC20_DECIMAL)
                      .toString()}
                    isSellable={agency.sellable}
                    image={agency.agency_image}
                    hire={hireAgency}
                    index={key}
                    buyAgency={buyAgency}
                    owner={agency.agency_address === kit.defaultAccount}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </>
      )}
    </Container>
  )
}

export default App
