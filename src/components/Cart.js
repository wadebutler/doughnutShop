import React from 'react';

const Cart = (props) => {
    const {lineItems} = props;
    return lineItems.length ? (<div>got stuff</div>): ( <p>Empty</p>)
}

export default Cart;