import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import './App.css';
import AppHeader from './components/AppHeader'
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login'
import FriendsData from './components/FriendsData'


function App() {
  return (
    <Router>
      <div className="App">
        <AppHeader />
      </div>
      <Route exact path="/" render={() => <Redirect to="/login" />} />
      <Route path="/login" component={Login} />
      <PrivateRoute exact path="/data" component={FriendsData} />
    </Router>
  );
}

export default App;
