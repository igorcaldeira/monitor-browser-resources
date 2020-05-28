import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "components/Core/Nav";
import MainDashboard from "components/Reports/MainDashboard";
import RawTable from "components/Reports/RawTable";
import GroupResource from "components/Reports/GroupResource";
import GroupType from "components/Reports/GroupType";
import Ip from "components/Reports/Ip";
import Session from "components/Reports/Session";
import Geolocation from "components/Reports/Geolocation";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <div>
          <Switch>
            <Route path="/groupType">
              <GroupType />
            </Route>
            <Route path="/groupResource">
              <GroupResource />
            </Route>
            <Route path="/raw">
              <RawTable />
            </Route>
            <Route path="/ip">
              <Ip />
            </Route>
            <Route path="/Session">
              <Session />
            </Route>
            <Route path="/Geolocation">
              <Geolocation />
            </Route>
            <Route path="/">
              <MainDashboard />
            </Route>
          </Switch>
        </div>
      </Router>
      <center>
        <p className="footer">Resource analytics, 2020</p>
      </center>
    </div>
  );
}

export default App;
