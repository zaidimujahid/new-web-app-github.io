import React from "react";
import Navdo from "../Navbar/Navdo";
import Footer from "../../Services/Footer/index";
import AccountBox from "./index";
import PointFoot from "../../Services/PointFoot/index";
import IconButton from "../../Services/IconButton/index";
import Chain from "../HomePage/chain";
import Title from "../Pagination/title";

const CountDown = () => {
  return (
    <div>
      <Navdo />
      <AccountBox />
      <Chain />
      <Footer />
      <PointFoot />
      <IconButton />
      <Title />
    </div>
  );
};
export default CountDown;
