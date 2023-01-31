import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import InsuranceType from "../Components/InsuranceType";

const Home = () => {
  const testimonials = [
    {
      name: "User Dave",
      msg: "Loved the service, got my insurance in 5 minutes",
      rating: 4,
    },
    {
      name: "User Dennis",
      msg: "Loved the service, got my insurance in 5 minutes",
      rating: 5,
    },
    {
      name: "User Sara",
      msg: "Loved the service, got my insurance in 5 minutes",
      rating: 2,
    },
    {
      name: "User Jake",
      msg: "Loved the service, got my insurance in 5 minutes",
      rating: 3,
    },
    {
      name: "User Paul",
      msg: "Loved the service, got my insurance in 5 minutes",
      rating: 4,
    },
  ];

  return (
    <>
      <div className="bg-dark">
        <Header />
        <div
          className="container  mt-5"
          style={{ paddingLeft: "8%", paddingTop: "2%" }}
        >
          <h1 className="text-light">all bank services at your ease</h1>
          <h6 className="text-light pt-3">
            <i>
              We provide all types of insurances details like health, life, car, home,
              travel, etc.
            </i>
          </h6>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,160L30,170.7C60,181,120,203,180,197.3C240,192,300,160,360,165.3C420,171,480,213,540,218.7C600,224,660,192,720,160C780,128,840,96,900,85.3C960,75,1020,85,1080,112C1140,139,1200,181,1260,181.3C1320,181,1380,139,1410,117.3L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </div>
      <section className="container pl-5 pt-5 pr-5">
        <h2
          style={{
            textAlign: "center",
            textTransform: "uppercase",
            letterSpacing: "5px",
            fontWeight: "600",
          }}
        >
          What we do
        </h2>
        <p
          className="pt-4"
          style={{
            textAlign: "center",
          }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum nulla
          numquam sunt. Aliquam quam voluptatem enim ex expedita quaerat quis
          est id unde autem asperiores ratione, nulla eos itaque perspiciatis.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum nulla
          numquam sunt. Aliquam quam voluptatem enim ex expedita quaerat quis
          est id unde autem asperiores ratione, nulla eos itaque perspiciatis.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum nulla
          numquam sunt. Aliquam quam voluptatem enim ex expedita quaerat quis
          est id unde autem asperiores ratione, nulla eos itaque perspiciatis.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum nulla
          numquam sunt. Aliquam quam voluptatem enim ex expedita quaerat quis
          est id unde autem asperiores ratione, nulla eos itaque perspiciatis.
        </p>
      </section>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#212529"
            fill-opacity="1"
            d="M0,192L80,208C160,224,320,256,480,256C640,256,800,224,960,224C1120,224,1280,256,1360,272L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
        <section className="container-fluid p-5 text-light bg-dark shadow">
          <div className="container">
            <div className="row p-5">
              <div className="col-12 col-lg-6">
                <h2>Insurance</h2>
                <br />
                <p>
                  We want to make sure you always get the right insurance, and
                  never spend more than you have to. Whether you’re switching
                  insurance providers or looking for insurance for the first
                  time, we’ll give you all the information you need to choose
                  the right deal at the right price. Plus, we’re free to use,
                  completely transparent and unbiased.
                </p>
              </div>
              <div
                className="col-12 col-lg-6 "
                style={{ borderLeft: "#fff solid 2px" }}
              >
                <h2>Banking</h2>
                <br />
                <p>
                  Compare all available credit cards, loans and bank accounts in
                  Dubai and UAE. Whether you’re looking for the lowest rate
                  loan, best bank account or a card with Cashback / Airmiles /
                  Balance transfer / or any other benefit, here at BankOnUs we
                  offer an array of options. Call us today or compare online.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="container mb-5" style={{ marginTop: "100px" }}>
        <InsuranceType />
      </section>
      <section className="container mb-5" style={{ marginTop: "100px" }}>
        <h2
          style={{
            textAlign: "center",
            textTransform: "uppercase",
            letterSpacing: "5px",
            fontWeight: "600",
          }}
        >
          Testimonials
        </h2>
        <br />
        <br />
        <div className="row">
          {testimonials.map(({ name, rating, msg }) => (
            <div className="col-12 col-lg-4">
              <div className="card mt-3 shadow">
                <div className="card-body">
                  <div className="row">
                    <div
                      className="col-12 col-lg-2"
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <img
                        src={require("./../assets/user.png")}
                        width="100%"
                        alt=""
                      />
                    </div>
                    <div className="col-12 col-lg-10">
                      <p>
                        <b>{name}</b>
                      </p>
                      <p>{msg}</p>
                      <p>
                        {rating &&
                          [...Array(rating)].map((x, i) => (
                            <img
                              src={require("./../assets/star.png")}
                              width="25px"
                              alt="rating"
                            />
                          ))}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
