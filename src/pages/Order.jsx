import React from 'react'
import Order from '../components/order/index'

export default function OrdersPage(props) {
  return <div>
    <h2>My order</h2>
    <Order id={props.match.params.id} />
  </div>
}