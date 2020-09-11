import React from 'react';
import "./Product.css";

function Product() {
    return (
        <div className="product">
            <div className="product__info">
                <p>Pickleball Mania</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>49.99</strong>
                </p>
                <div className="product_rating">
                    <p></p>
                </div>
            </div>
                
                <img src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" alt="" />

                <button>Add to Basket</button>
        </div>
    );
}        


export default Product;
