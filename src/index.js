import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import Student from './Student';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './index.css';
import Instructor from './Instructor';
import E404 from "./E404";

ReactDOM.render(<React.StrictMode>
  <Router>
    <Switch>
    <Route path = "/" exact component = {Login}/>
    <Route path = "/student" exact component = {Student}/>
    <Route path = "/instructor" exact component = {Instructor}/>
    <Route component = {E404}/>;
    </Switch>
  </Router>
  </React.StrictMode>, document.getElementById('root'));


