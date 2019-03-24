import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import AddAdmin from './AdminPanel/AddEvent';
import Courses from './Course/Courses';
import Login from './Login/Login';
import About from './AboutUs/About';


const Main = () => (
  <main>
     <Switch>
        <Route exact={true} path='/' component={Home}/>
        <Route path='/Course/Courses' component={Courses}/>
           <Route path='/Login/Login' component={Login}/>

        <Route  path='/AboutUs/About' exact strict component={About}/>

      </Switch>
  </main>


);

export default Main;
