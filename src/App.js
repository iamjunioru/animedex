// .
 
import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import About from "./components/layout/About";
import Navigation from "./components/layout/Navigation";
import Index from "./components/layout/Index";
import Detail from "./components/anime/Detail.js";
import { Provider } from "./context";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment>
            <Navigation />
            <div>
              <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/sobre" component={About} />
                <Route exact path="/anime/detalhes/:id" component={Detail} />
                <Redirect from="/anime/detalhes/:id" to="/anime/detail/:id" />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
