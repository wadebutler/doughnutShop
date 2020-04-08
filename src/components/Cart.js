import React from 'react';
import LineItems from './LineItems';
import { displayPrice} from '../helpers';

const Cart = (props) => {
    const { lineItems } = props;
    const cartTotal = (lineItems) => {
        return lineItems.reduce((acc, next) => acc += next.price, 0)
    }

    return lineItems.length ? (
        <div className="cart">
            <ul>
                {lineItems.map(item => (
                    <LineItems item={item} />
                ))}
            </ul>
            <span>Total: {displayPrice(cartTotal(lineItems))}</span>
        </div>

    ) : (
            <p className="cart">Your cart is empty</p>
        )
}

export default Cart;