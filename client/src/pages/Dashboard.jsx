import { connect } from "react-redux";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getInsurances, deleteInsurance } from "../actions/insurance";
import DashboardHeader from "../Components/DashboardHeader";
import Footer from "../Components/Footer";
import PropTypes from "prop-types";
import { getInsuranceName } from "../App";

const Dashboard = ({
  getInsurances,
  deleteInsurance,
  insurance: { loading, insurances },
}) => {
  const navigate = useNavigate();

  // const [insurances, setInsurances] = React.useState([
  //   {
  //     id: 1,
  //     title: "Insurance 1",
  //     description: "Insurance 1 description",
  //     type: "Insurance 1 type",
  //   },
  // ]);

  useEffect(() => {
    getInsurances();
    console.log(loading, insurances);
  }, [getInsurances]);

  return (
    <>
      <DashboardHeader>Dashboard</DashboardHeader>
      <section>
        <div className="container p-5">
          <h1>Insurances</h1>
          <div className="row">
            <div className="col-2 offset-10">
              <button
                className="w-100 float-right btn btn-primary"
                onClick={() => navigate(`/dashboard/add-insurance/`)}
              >
                + Add Insurance
              </button>
            </div>
          </div>
          <br />
          <table className="table table-striped w-100 table-inverse table-responsive">
            <thead className="thead-inverse">
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Insurance Type</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {!loading && insurances ? (
                insurances.map(({ _id, title, insuranceType }) => (
                  <tr onClick={() => {}}>
                    <td>{_id}</td>
                    <td>{title}</td>
                    <td>{getInsuranceName(insuranceType)}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          navigate(`/dashboard/update-insurance/${_id}`)
                        }
                      >
                        Update
                      </button>{" "}
                      |{" "}
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          if (
                            window.confirm("Are you sure you want to delete?")
                          ) {
                            deleteInsurance(_id);
                            alert("Insurance removed !");
                          }
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No insurances found</td>
                </tr>
              )}
            </tbody>
          </table>
          <br />
          <br />
          <br />
        </div>
      </section>
      <Footer />
    </>
  );
};

Dashboard.propTypes = {
  getInsurances: PropTypes.func.isRequired,
  deleteInsurance: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  insurance: state.insurance,
});

export default connect(mapStateToProps, { getInsurances, deleteInsurance })(
  Dashboard
);
