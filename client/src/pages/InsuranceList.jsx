import React from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getInsurances } from "../actions/insurance";
import { baseUrl, getInsuranceName } from "../App";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import InsuranceCard from "../Components/InsuranceCard";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";

const InsuranceList = ({
  getInsurances,
  insurance: { insurances, loading },
}) => {
  const { type } = useParams();
  const navigate  = useNavigate()

  useEffect(() => {
    getInsurances();
  }, [getInsurances]);

  const handleClick = async (bank_name) => {
    try {
      const response = await axios(`${baseUrl}/api/${type}/${bank_name}`, { method: 'get' })
      const obj ={
        type,
        bank_name,
        data:response.data.data
      }
      navigate(`/insurances/${type}/${bank_name}`, { state: { bank_name, data: obj } })
      console.log(response, 'my response') 
    }
    catch (err) {
      console.log(err, 'my err')
    }
  }

  return (
    <>
      <div className="bg-dark">
        <Header />
        <div
          className="container  mt-5"
          style={{ paddingLeft: "8%", paddingTop: "2%" }}
        >
          <h1 className="text-light">
            Insurance Details - {getInsuranceName(type)}
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
        <h1>Insurance - {getInsuranceName(type)}</h1>
        <br />

        <div className="d-flex justify-content-between align-items-center" >
          <div onClick={() => handleClick("alfalah")} style={{ width: '150px', height: '100px' }} ><img src={require('../assets/bank-alfalah-logo.jpg')} style={{ width: "100%", height: '100%' }} alt="" /></div>
          <div onClick={() => handleClick("faisal")} style={{ width: '150px', height: '90px' }} ><img src={require('../assets/faisal_bank.png')} style={{ width: "100%", height: '100%' }} alt="" /></div>
          <div onClick={() => handleClick("hbl")} style={{ width: '150px', height: '70px' }} ><img src={require('../assets/hbl.png')} style={{ width: "100%", height: '100%' }} alt="" /></div>
          <div onClick={() => handleClick("mcb")} style={{ width: '150px', height: '100px' }} ><img src={require('../assets/mcb.png')} style={{ width: "100%", height: '100%' }} alt="" /></div>
          <div onClick={() => handleClick("meezan")} style={{ width: '200px', height: '100px' }} ><img src={require('../assets/meezan.png')} style={{ width: "100%", height: '100%' }} alt="" /></div>
        </div>

        {/* {!loading &&
        insurances &&
        insurances.filter((insurance) => insurance.insuranceType === type)
          .length > 0 ? (
          insurances
            .filter((insurance) => insurance.insuranceType === type)
            .map(({ _id, title, description, insuranceType }) => (
              <InsuranceCard
                id={_id}
                title={title}
                description={description}
                type={insuranceType}
              />
            ))
        ) : (
          <>Sorry! No insurances available at the moment.</>
        )} */}
        {/* */}
      </section>
      <Footer />
    </>
  );
};

InsuranceList.propTypes = {
  getInsurances: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  insurance: state.insurance,
});

export default connect(mapStateToProps, { getInsurances })(InsuranceList);
