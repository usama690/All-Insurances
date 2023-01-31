import React from "react";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getInsurance, updateInsurance } from "../actions/insurance";
import Alert from "../Components/Alert";
import DashboardHeader from "../Components/DashboardHeader";
import Footer from "../Components/Footer";

import PropTypes from "prop-types";
import { connect } from "react-redux";

const UpdateInsurance = ({
  updateInsurance,
  getInsurance,
  insurance: { insurance, loading },
}) => {
  const { id } = useParams();
  const history = useNavigate();

  const [title, setTitle] = React.useState(insurance ? insurance.title : "");
  const [type, setType] = React.useState(
    insurance ? insurance.insuranceType : ""
  );
  const [description, setDescription] = React.useState(
    insurance ? insurance.description : ""
  );
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      title,
      insuranceType: type,
      description,
    };

    const res = await updateInsurance(id, formData);
    console.log(res);
    if (res) {
      if (res.status === 200) {
        history("/dashboard");
      }
    }
  };

  useEffect(() => {
    getInsurance(id);
  }, [getInsurance]);

  return (
    <>
      <DashboardHeader>Dashboard</DashboardHeader>
      <section>
        <div className="container p-5">
          <h1
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Link
              style={{
                padding: 0,
                margin: "0 15px 8px 0",
                textDecoration: "none",
              }}
              className="text-dark"
              to="/dashboard"
            >
              {"<"}
            </Link>
            Update Insurance
          </h1>
          <br />
          <form className="form" onSubmit={handleSubmit}>
            <div className="mb-3 w-50">
              <Alert />
            </div>

            <div className="mb-3 w-50">
              <label className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter title of insurance"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-3 w-50">
              <label className="form-label">Insurance type</label>
              <select
                className="form-select"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option defaultValue={true}>Select insurance type</option>
                <option value={"car"}>Car Insurance</option>
                <option value={"life"}>Life Insurance</option>
                <option value={"health"}>Health Insurance</option>
                <option value={"term"}>Term Life</option>
                <option value={"credit"}>Credit Cards</option>
                <option value={"car-"}>Car Loans</option>
                <option value={"personal"}>Personal Loans</option>
                <option value={"bank"}>Bank Accounts</option>
                <option value={"home"}>Home Loans</option>
                <option value={"debt"}>Debt Restructing</option>
              </select>
            </div>
            <div className="mb-3 w-50">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows="5"
              ></textarea>
            </div>
            <div className="mb-3 w-50">
              <button className="btn btn-dark w-100">Add insurance</button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

UpdateInsurance.propTypes = {
  getInsurance: PropTypes.func.isRequired,
  updateInsurance: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  insurance: state.insurance,
});

export default connect(mapStateToProps, { getInsurance, updateInsurance })(
  UpdateInsurance
);
