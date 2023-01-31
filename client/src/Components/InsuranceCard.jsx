import React from "react";
import { useNavigate } from "react-router-dom";
import { insuranceTypes } from "../App";

const InsuranceCard = ({ id, title, description, type }) => {
  const history = useNavigate();
  const image = insuranceTypes.find((item) => item.value === type).image;

  return (
    <>
      <div
        className="card mt-3 shadow"
        style={{ cursor: "pointer" }}
        onClick={() => {
          history(`/insurance-details/${id}`);
        }}
      >
        <div className="card-body">
          <div className="row">
            <div className="col-12 col-lg-10">
              <h4 className="card-title">
                {title} - {type}
              </h4>
              <p className="card-text">{description}</p>
            </div>
            <div className="col-12 col-lg-2">
              <img src={image} alt={title} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InsuranceCard;
