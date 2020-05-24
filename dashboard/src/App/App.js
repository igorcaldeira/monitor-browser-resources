import React from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Nav from '../Nav';
import MainDashboard from '../MainDashboard';
import RawTable from '../RawTable';
import GroupResource from '../GroupResource';
import GroupType from '../GroupType';
import './App.css';

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
            <Route path="/">
              <MainDashboard />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
