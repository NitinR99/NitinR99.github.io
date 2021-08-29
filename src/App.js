import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import NavigBar from "./components/NavigBar"
import Home from "./components/Home";
import AboutMe from "./components/AboutMe"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import NotFound from "./components/NotFound"
import 'rsuite/lib/styles/index.less';


function App() {
  return (

    <BrowserRouter>
    <NavigBar /><br/><br/>
      {/* switch allows switching which components render.  */}

      <Switch>
        {/* route allows you to render by url path */}
        <Route exact path="/" component={Home} />
        <Route path="/about" component={AboutMe} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route  component={NotFound} />
      </Switch>

    </BrowserRouter>

  );
}

export default App;
