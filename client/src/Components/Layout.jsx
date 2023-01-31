import React from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <section className="container m-5 p-5">{children}</section>
      <Footer />
    </div>
  );
};

export default Layout;
