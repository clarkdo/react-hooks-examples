import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles.css";

import WithoutUseMemo from "./useMemo/WithoutUseMemo";
import WithUseMemo from "./useMemo/WithUseMemo";
import SingleState from "./useState/SingleUseState";
import MergedUseState from "./useState/MergedUseState";
import WithoutUseRef from "./useRef/WithoutUseRef";
import WithUseRef from "./useRef/WithUseRef";
import Navigation from "./components/Navigation";
import NextExample from "./components/NextExample";

const rootElement = document.getElementById("root");

const App = (props) => {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch location={props.location}>
        <Route
          exact
          path="/withoutUseMemo"
          render={() => (
            <>
              <WithoutUseMemo />
              <NextExample to="/withUseMemo" />
            </>
          )}
        />
        <Route exact path="/withUseMemo" component={WithUseMemo} />
        <Route
          exact
          path="/singleUseState"
          render={() => (
            <>
              <SingleState />
              <NextExample to="/mergedUseState" />
            </>
          )}
        />
        <Route exact path="/mergedUseState" component={MergedUseState} />
        <Route
          exact
          path="/withoutUseRef"
          render={() => (
            <>
              <WithoutUseRef />
              <NextExample to="/withUseRef" />
            </>
          )}
        />
        <Route exact path="/withUseRef" component={WithUseRef} />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, rootElement);
