import React from "react";
import Navdo from "../Navbar/Navdo";
import Sectore from "../Beema/Sectore";
import Setting from "../Beema/Setting";
import Leader from "../Beema/leader";
import Reminder from "../Beema/Reminder";
import Testimonial from "../Beema/Testimonial";
import Pagination from "../Pagination/title";
import Footer from "../../Services/Footer/index";
import IconButton from "../../Services/IconButton";
import PointFoot from "../../Services/PointFoot";
import RocketSection from "./RocketSection";
import Flat from "../Beema/Flat";
const Beema = () => {
  return (
    <>
      <Navdo />
      <Sectore />
      <Setting />
      <Leader />
      <Reminder />
      <Testimonial />
      <RocketSection />
      <Flat />
      <Footer />
      <PointFoot />
      <IconButton />
      <Pagination />
    </>
  );
};

export default Beema;
