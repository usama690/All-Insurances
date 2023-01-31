import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Contact = () => {
  return (
    <>
      <div className="bg-dark">
        <Header />
        <div
          className="container  mt-5"
          style={{ paddingLeft: "8%", paddingTop: "2%" }}
        >
          <h1 className="text-light">Contact Us</h1>
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
        <div className="row">
          <div className="col-sm-12 col-lg-6 pt-5">
            <h1>Fill the form to contact us</h1>
            <p>
              <i>Our team will contact you as soon as they can.</i>
            </p>
            <br />
            <form>
              <div className="mb-3">
                <label className="form-label">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter title of insurance"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Message:</label>
                <textarea
                  type="text"
                  className="form-control"
                  rows="5"
                  placeholder="Enter message/issues"
                ></textarea>
              </div>
              <div className="mb-3">
                <button className="text-center">Submit</button>
              </div>
            </form>
          </div>
          <div className="col-sm-12 col-lg-6 m-0 p-0">
            <img
              src={require("../assets/contact.png")}
              width="100%"
              alt="contact"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
