import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from './pages/Home';

const Router =()=>(
    <Switch>
<Route exact path ='/' Component={Home}/>


    </Switch>
)

export default Router;