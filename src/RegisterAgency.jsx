import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import { Form } from "react-bootstrap"

export const RegisterAgency = () => {
  const [show, setShow] = useState(false)
  const [sellable, setSellable] = useState(false)
  const [name, setName] = useState("")
  const [imgUrl, setImgUrl] = useState("")
  const [location, setLocation] = useState("")
  const [about, setAbout] = useState("")
  const [hire_fee, setHire_fee] = useState()
  const [worth, setWorth] = useState()

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <div className="my-3">
      <Button variant="success" onClick={handleShow}>
        Register Agency +
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register Your Agency</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control
                type="text"
                placeholder="Enter Agency Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPoster">
              <Form.Control
                type="text"
                placeholder="Enter Agency Cover Image URL."
                required
                value={imgUrl}
                onChange={(e) => setImgUrl(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLocation">
              <Form.Control
                type="text"
                placeholder="Enter Location"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAbout">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter What your agency will do."
                required
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicHire">
              <Form.Control
                type="number"
                placeholder="Enter Hire Fee"
                required
                value={hire_fee}
                onChange={(e) => setHire_fee(e.target.value)}
              />
            </Form.Group>
            {sellable && (
              <Form.Group className="mb-3" controlId="formBasicWorth">
                <Form.Control
                  type="number"
                  placeholder="Agency's Selling Price"
                  value={worth}
                  onChange={(e) => setWorth(e.target.value)}
                />
              </Form.Group>
            )}
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Is this agency sellable?"
                value={sellable}
                onChange={() =>
                  sellable ? setSellable(false) : setSellable(true)
                }
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  )
}
