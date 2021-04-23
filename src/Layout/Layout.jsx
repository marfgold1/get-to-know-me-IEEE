import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";
import "./base.scss";

export const Layout = (props) => (
  <>
      <Navbar />
      <div className="root">
          {props.children}
      </div>
      <Footer />
  </>
);
