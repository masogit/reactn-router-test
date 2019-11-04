import React, { setGlobal, useGlobal } from "reactn";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./styles.css";

setGlobal({
  cards: [],
  disabled: false,
  initial: "values",
  x: 1
});

function App() {
  return (
    <Router>
      <div className="App">
        <Links />
        <hr />
        <Content />
      </div>
    </Router>
  );
}

const Links = props => {
  const [x] = useGlobal("x");
  return <Link to="/about">About: {x}</Link>;
};

const Content = props => {
  return (
    <Switch>
      {/* <Route exact path="/">
        <Home />
      </Route> */}
      <Route path="/about">
        <About />
      </Route>
      {/* <Route path="/dashboard">
        <Dashboard />
      </Route> */}
    </Switch>
  );
};

const About = props => {
  const [x, setX] = useGlobal("x");
  const onClick = () => setX(x + 1);
  return (
    <div>
      About myselft
      <br />
      <button onClick={onClick}>+1</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
