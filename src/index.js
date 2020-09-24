import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles.css";

import UseMemo1 from "./UseMemo1";
import UseMemo2 from "./UseMemo2";
import UseState1 from "./UseState1";
import UseState2 from "./UseState2";
import UseRef1 from "./UseRef1";
import UseRef2 from "./UseRef2";
import Navigation from "./components/Navigation";
import NextExmaple from "./components/NextExmaple";

const rootElement = document.getElementById("root");

const App = (props) => {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch location={props.location}>
        <Route
          exact
          path="/memo1"
          render={() => (
            <>
              <UseMemo1 />
              <NextExmaple to="/memo2" />
            </>
          )}
        />
        <Route exact path="/memo2" component={UseMemo2} />
        <Route
          exact
          path="/state1"
          render={() => (
            <>
              <UseState1 />
              <NextExmaple to="/state2" />
            </>
          )}
        />
        <Route exact path="/state2" component={UseState2} />
        <Route
          exact
          path="/ref1"
          render={() => (
            <>
              <UseRef1 />
              <NextExmaple to="/ref2" />
            </>
          )}
        />
        <Route exact path="/ref2" component={UseRef2} />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, rootElement);
