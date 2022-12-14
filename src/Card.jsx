import React from "react"
import { Card as BSCard, Button } from "react-bootstrap"
import { BuyAgency } from "./BuyAgency"

export const Card = ({
  name,
  location,
  about,
  image,
  hire_amount,
  agency_worth,
  isSellable,
  hire,
  index,
  buyAgency,
  owner,
}) => {
  return (
    <BSCard className="border-0 agency my-2">
      <BSCard.Img
        variant="top"
        src={image}
        style={{ width: "100%", height: "14rem" }}
      />
      <BSCard.Body>
        <BSCard.Title className="mb-3">{name}</BSCard.Title>
        <BSCard.Text>
          <div>
            <h6>
              <span className="fw-bold">Location:</span> {location}
            </h6>
          </div>
          <div>
            <h6 className="my-0 fw-bold">What we do.</h6>
            <span>{about}</span>
          </div>
        </BSCard.Text>
        <div className="d-flex justify-content-between">
          {owner ? (
            <h6 className="text-muted alert alert-secondary py-1 px-2">
              You own this Agency!
            </h6>
          ) : (
            <>
              <Button variant="success" size="sm" onClick={() => hire(index)}>
                Hire Agency {hire_amount}cUSD
              </Button>
              <BuyAgency
                name={name}
                about={about}
                imgUrl={image}
                worth={agency_worth}
                isSellable={isSellable}
                buyAgency={buyAgency}
                index={index}
              />
            </>
          )}
        </div>
      </BSCard.Body>
    </BSCard>
  )
}
