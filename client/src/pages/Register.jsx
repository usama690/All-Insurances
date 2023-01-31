import React from "react";
import { Link, Navigate } from "react-router-dom";
import { register, login } from "../actions/auth";
import Alert from "../Components/Alert";

import PropTypes from "prop-types";
import { connect } from "react-redux";

const Register = ({ register, isAuthenticated }) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    register({ name, email, password });
  };
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <div className="row" style={{ height: "95vh" }}>
      <div
        className="col-12 col-lg-6 shadow"
        style={{
          backgroundSize: "cover",
          background: `url(${require("./../assets/back1.jpg")})`,
          backgroundPosition: "center",
        }}
      ></div>
      <div
        className="col-12 col-lg-6"
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1
            className="text-dark"
            style={{ fontSize: "60px", transform: "rotate(-5deg)" }}
          >
            Insurances
          </h1>
        </Link>
        <br />
        <h1>Register</h1>
        <br />
        <Alert style={{ width: "50%" }} />
        <form className="form" onSubmit={handleSubmit} style={{ width: "50%" }}>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              ab
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-label="name"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              @
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="email"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              **
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-label="Password"
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-dark w-100">
              Register
            </button>
            <div className="mt-2">
              <Link className="text-dark" to="/login">
                Already a user? Login here.
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register })(Register);
