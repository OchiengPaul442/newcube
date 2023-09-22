// import React from "react";
import { Footer, Header } from "../components";

const Page = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Page;
