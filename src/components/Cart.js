import React, {useState} from 'react';
import styled from 'styled-components';
const Cart = ({cart}) => {
    return ( <>
        <h3>Cart</h3>
        {cart.length >0?
            cart.map((item,index) => {
                return (
                    <Product key={index}>
                        <ProductName>{item.name}</ProductName>
                        Cant: {item.cant}
                    </Product>
                )
            }
        )
        :
        <div>Empty</div>
        }
    </> );
}
 
const Product = styled.div`
padding: 10px;
border-bottom: 1px solid #ebebf3;
font-size: 14px;
`;

const ProductName = styled.p`
font-weight: bold;
font-size: 16px;
color: #000;
`;

export default Cart;