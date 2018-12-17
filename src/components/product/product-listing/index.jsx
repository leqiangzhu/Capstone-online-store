import React from 'react';

export default function ProcuctListing(props){
    return <div>
        {
            props.products.map(
                product=>
                <ProcuctListItem product={product}/>
                
            )
        }
        </div>

}