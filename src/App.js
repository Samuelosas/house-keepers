import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Alert from "react-bootstrap/Alert"
import { Container, Row, Col } from "react-bootstrap"
import { Balance } from "./Balance"
import { RegisterAgency } from "./RegisterAgency"
import { Card } from "./Card"

function App() {
  return (
    <Container>
      {/* <div className="mt-5">
        <Alert variant={"warning"}>Please approve this DApp to use it!</Alert>
      </div> */}

      <div className="d-flex align-items-center justify-content-between my-4">
        <h3>House Keepers</h3>
        <Balance />
      </div>
      <RegisterAgency />
      <div className="my-4 agencies">
        <Row className="justify-content-center">
          <Col xs={10} md={4}>
            <Card
              name={"Immaculate Helpers"}
              location={"Nigeria"}
              about={
                "Some quick example text to build on the card title and make up the bulk of the card's content."
              }
              hire_amount={1}
              agency_worth={10}
              isSellable={true}
            />
          </Col>
          <Col xs={10} md={4}>
            <Card />
          </Col>
          <Col xs={10} md={4}>
            <Card />
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default App
