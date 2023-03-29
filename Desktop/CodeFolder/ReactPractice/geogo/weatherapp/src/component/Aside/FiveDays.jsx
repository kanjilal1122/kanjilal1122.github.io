import React from "react";
import Button from "react-bootstrap/esm/Button";

const FiveDaysButton = () => {
  return (
    <Button
      className="m-2"
      onClick={(e) => e.preventDefault()}
      style={{
        float: "right",
        backgroundColor: "#EB5E0B",
        borderRadius: "20px",
        borderStyle: "none",
      }}
    >
      <div className="d-flex">
        <i className="bi bi-calendar3  "></i>
        <p style={{ margin: "0", paddingLeft: "10px" }}>Next 5 Days</p>
      </div>
    </Button>
  );
};

export default FiveDaysButton;
