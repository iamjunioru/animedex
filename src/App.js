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
import { Provider } from "./context";
import Footer from "./components/layout/Footer";

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
            <Route exact path="/2" render={() => <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions.</h1>} />
            <Route exact path="/3" render={() => <h1>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum</h1>} />
            <Redirect to="/" />
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>

  );
};

export default App;
