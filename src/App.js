import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import "./assets/css/nucleo-icons.css";
import "./assets/scss/blk-design-system-react.scss?v=1.2.0";
import "./assets/demo/demo.css";
import "./styles/style.scss";

import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Membership from "./pages/Membership";
import Articles from "./pages/Articles";
import Contact from "./pages/Contact";
import OfficeBearers from "./pages/OfficeBearer";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={Login} />
          <Route path="/joinessi" component={Membership} />
          <Route path="/articles" component={Articles} />
          <Route path="/contact" component={Contact} />
          <Route path="/officebearers" component={OfficeBearers} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
