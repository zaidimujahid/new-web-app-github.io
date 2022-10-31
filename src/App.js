import React from "react";
import "./App.css";
import { HomePag } from "./Component/HomePage";
import CountDown from "./Component/Countdown/command";
import Commands from "./Component/Pointer/commands";
import { Switch, Route } from "react-router-dom";
import GoToTop from "../src/Component/Pagination/GoToTop";
import Beema from "../src/Component/Beema/index";
function App() {
  return (
    <>
      <React.Fragment>
        <Switch>
          <Route path="/Pointer" component={Commands} />
          <Route path="/CountDown" component={CountDown} />
          <Route path="/Beema" component={Beema} />
          <Route path="/" component={HomePag} />
        </Switch>
        <GoToTop />
      </React.Fragment>
    </>
  );
}

export default App;
