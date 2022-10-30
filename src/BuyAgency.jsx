import React, { useState } from "react"
import { Button, Modal, Form } from "react-bootstrap"

export const BuyAgency = ({ name, about, imgUrl, worth, isSellable }) => {
  const [show, setShow] = useState(false)
  const [name_, setName] = useState(name)
  const [imgUrl_, setImgUrl] = useState(imgUrl)
  const [about_, setAbout] = useState(about)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <>
      {isSellable && (
        <div>
          <Button variant="secondary" size="sm" onClick={handleShow}>
            Buy Agency {worth}cUSD
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Buy this Agency</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Enter preferred Agency Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter preferred Agency Name"
                    required
                    value={name_}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPoster">
                  <Form.Label>
                    Enter preferred Agency Cover Image URL.
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Agency Cover Image URL."
                    required
                    value={imgUrl_}
                    onChange={(e) => setImgUrl(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAbout">
                  <Form.Label>Enter What your agency will do.</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter What your agency will do."
                    required
                    value={about_}
                    onChange={(e) => setAbout(e.target.value)}
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Buy Agency {worth}cUSD
                </Button>
              </Form>
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
          </Modal>
        </div>
      )}
    </>
  )
}
