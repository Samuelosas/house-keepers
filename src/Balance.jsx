import React from "react"

export const Balance = ({ balance }) => {
  return (
    <div>
      cUSD Balance:{" "}
      <span className="fw-bold h5 btn btn-secondary"> {balance}</span>
    </div>
  )
}
