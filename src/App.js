import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import About from "./components/layout/About";
import Navigation from "./components/layout/Navigation";
import Index from "./components/layout/Index";
import Detail from "./components/anime/Detail.js";
import { Provider, Consumer } from "./context";
import Spinner from "./components/layout/Spinner";
import "./App.css";

const App = () => {
  useEffect(() => {
    document.title = "AnimeDex";
  }, []);

  return (
<Provider>
  <Router>
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/sobre" component={About} />
        <Route exact path="/anime/detalhes/:id" component={Detail} />
        <Route exact path="/2" render={() => <h1>Lorem ipsum dolor sit amet</h1>} />
        <Route exact path="/3" render={() => <h1>Consectetur adipiscing elit</h1>} />
        <Redirect to="/" />
      </Switch>
    </div>
  </Router>
</Provider>

  );
};

export default App;
