import SectionAdd from "../HomePage/SectionAdd";
import Navdo from "../Navbar/Navdo";
import AllPage from "../../Services/AllPage";
import SectionTwo from "../../SectionTwo/index";
import Footer from "../../Services/Footer/index";
import PointFoot from "../../Services/PointFoot/index";
import IconButton from "../../Services/IconButton/index";
import Chankteo from "./chankteo";
import Title from "../Pagination/title";
export function HomePag(props) {
  return (
    <>
      <Navdo />
      <SectionAdd />
      <Chankteo />
      <AllPage />
      <SectionTwo />
      <Footer />
      <PointFoot />
      <IconButton />
      <Title />
    </>
  );
}
