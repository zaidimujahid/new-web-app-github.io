import React from "react";
import Navdo from "../Navbar/Navdo";
import Footer from "../../Services/Footer/index";
import AccountBox from "../Pointer/index";
import PointFoot from "../../Services/PointFoot/index";
import IconButton from "../../Services/IconButton/index";
import Dout from "../HomePage/Dout";
import Title from "../Pagination/title";
const Commands = () => {
  return (
    <div>
      <Navdo />
      <AccountBox />
      <Dout />
      <Footer />
      <PointFoot />
      <IconButton />
      <Title />
    </div>
  );
};

export default Commands;
