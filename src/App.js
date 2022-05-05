import React from "react";
//index.css
import "./index.css";
//for use bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
//for using  slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
///render files
//import MainSlick from './react-slick/MainSlick';
//import Main_todo from "./todolist/Main_todo";
//import MainReactcurd from "./react-curd-operations/MainReactcurd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./react-curd-operations/Home";
import About from "./react-curd-operations/About";
import Navigation from "./react-curd-operations/Navigation";
import Contact from "./react-curd-operations/Contact";
//import Notfound from "./react-curd-operations/Notfound";
/* routing
import About from "../src/routing/components/About";
import Service from "../src/routing/components/Service";
import Navbar from "../src/routing/components/Navbar";
import Button from '../src/routing/components/Button';
//router
import { Route ,Switch} from "react-router-dom";
*/
const App = () => {
  return (
    <>
      {/* <Navbar />
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/button" component={Button} />
        <Route exact path="/service" component={Service} />
      </Switch> */}

      {/* <MainSlick/> */}

      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={Contact} />
          {/* <Route exact path='' component={Notfound} /> */}
        </Switch>
      </Router>

      {/* <Main_todo/> */}
    </>
  );
};

export default App;
