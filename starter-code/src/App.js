import React from "react";
import "./App.css";
import CountryDetail from "./components/CountryDetail";
import CountryList from "./components/CountryList";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import countries from "./countries.json";

const App = (props) => {
  return (
    <div className="App">
    <Navbar />
      <div className="container">
        <div className="row">
          <CountryList countries={countries} />
          <Switch>
            <Route
              exact
              path="/country/:id"
              render={(props) => (
                <CountryDetail countries={countries} {...props} />
              )}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default App;
