import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getInsurance } from "../actions/insurance";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import PropTypes from "prop-types";
import { insuranceTypes } from "../App";

const InsuranceDetails = ({
  getInsurance,
  insurance: { insurance, loading },
}) => {
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    getInsurance(id);
  }, [getInsurance]);

  return (
    <>
      <div className="bg-dark">
        <Header />
        <div
          className="container  mt-5"
          style={{ paddingLeft: "8%", paddingTop: "2%" }}
        >
          <h1 className="text-light">
            Insurance Details -{" "}
            {!loading && insurance ? insurance.title : <>Error 404</>}
          </h1>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,160L30,170.7C60,181,120,203,180,197.3C240,192,300,160,360,165.3C420,171,480,213,540,218.7C600,224,660,192,720,160C780,128,840,96,900,85.3C960,75,1020,85,1080,112C1140,139,1200,181,1260,181.3C1320,181,1380,139,1410,117.3L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </div>
      <section className="container p-5 mb-5">
        {!loading && insurance ? (
          <>
            <div className="row">
              <div className="col-12 col-lg-9">
                <h1>Insurance - {insurance.title}</h1>
                <h3>Type: {insurance.insuranceType}</h3>
                <br />
                <p>{insurance.description}</p>
              </div>
              <div
                className="col-12 col-lg-3"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  style={{ opacity: ".6" }}
                  width={"70%"}
                  src={
                    insuranceTypes.find(
                      (item) => item.value === insurance.insuranceType
                    ).image
                  }
                  alt={insurance.title}
                />
              </div>
            </div>
          </>
        ) : (
          <>Oops! something went wrong.</>
        )}
      </section>
      <Footer />
    </>
  );
};

InsuranceDetails.propTypes = {
  getInsurance: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  insurance: state.insurance,
});

export default connect(mapStateToProps, { getInsurance })(InsuranceDetails);
