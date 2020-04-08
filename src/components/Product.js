import React from "react";

const Product = (props) => {
    const {title, price, imgUrl,} = props.product;
    const {addToCart} = props;
    return (
        <div className="product">
            <img src={imgUrl} alt={title} />
            <h2>{title}</h2>
            <p>{price}</p>
            <button onClick={() => addToCart(props.product)}>Add To Cart</button>
        </div>
    )
}

export default Product;