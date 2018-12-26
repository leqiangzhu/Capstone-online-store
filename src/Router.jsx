import React from 'react'
import { Switch, Route } from 'react-router-dom'


import HomePage from './pages/Home'
import CartPage from './pages/Cart'
import CheckoutPage from './pages/Check'
import OrdersPage from './pages/Order'
import OrdersPage from './pages/Error404'

const Router = () => (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route exact path='/cart' component={CartPage} />
    <Route exact path='/checkout' component={CheckoutPage} />
    <Route path='/orders/:id' component={OrdersPage} />
  </Switch>
)

export default Router