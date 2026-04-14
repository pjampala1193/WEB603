import React from "react";
import { Route, Switch, NavLink, Redirect } from "react-router-dom";
import BarChartDemo from "./barChart";
import TreeDemo from "./tree";

function Home() {
  return (
    <div className="page">
      <h1>Redux Animation Demos</h1>
      <p>This project combines the assigned animation demos into one React app.</p>
      <p>Use the navigation links above to open each demo.</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-title">Module 6 Week 3 Day 1</div>
        <div className="nav-links">
          <NavLink exact to="/" activeClassName="active-link">
            Home
          </NavLink>
          <NavLink to="/bar-chart" activeClassName="active-link">
            Bar Chart
          </NavLink>
          <NavLink to="/tree" activeClassName="active-link">
            Tree
          </NavLink>
        </div>
      </nav>

      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/bar-chart" component={BarChartDemo} />
          <Route path="/tree" component={TreeDemo} />
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  );
}

export default App;