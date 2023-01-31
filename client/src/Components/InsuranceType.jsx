import React from "react";
import { useNavigate } from "react-router-dom";
import { insuranceTypes } from "../App";

const InsuranceType = () => {
  const history = useNavigate();

  return (
    <>
      <h2
        style={{
          textAlign: "center",
          textTransform: "uppercase",
          letterSpacing: "5px",
          fontWeight: "600",
        }}
      >
        Insurance Types
      </h2>
      <div className="row" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
        {insuranceTypes.map(({ name, image, value }) => (
          <div
            className="col-2 mt-4 shadow"
            style={{ cursor: "pointer",margin:"2%",marginLeft:"5%" }}
            onClick={() => {
              history(`/insurances/${value}`);
            }}
          >
            <div className="card" style={{ minHeight: "210px"}}>
              <div
                className="card-body"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <img src={image} alt="health" />
                <h6 className="text-uppercase pt-2 text-center">{name}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default InsuranceType;
