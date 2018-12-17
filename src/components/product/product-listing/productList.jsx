import React from 'react';

export default function ProcuctListItem(props){
    return <div>
        <h3>
            {props.product.name}
            </h3>
        <img
        title={props.product.name}
        src={props.product.imageUrl}/>
         <div> {props.product.description}</div>
        <div> {props.product.price}</div>
    <div><button> ADD to Cart</button>
    </div>
        </div>

}