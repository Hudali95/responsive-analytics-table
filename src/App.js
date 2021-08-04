import React from "react";
import Analytics from "./Components/Analytics";
import Dashboard from "./Components/Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./commonStyles.css";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="app-layout">
        <div className="app-side-bar"></div>
        <div className="app-middle-container">
          <Switch>
            <Route path="/" exact component={Analytics} />
            <Route path="/analytics" exact component={Analytics} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
