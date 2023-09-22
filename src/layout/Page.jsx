// import React from "react";
import { Footer, Header, Navbar } from '../components';

const Page = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Page;
