import React from 'react';
import styled from 'styled-components';

const Products = ({products,addToCart}) => {
	return (
		<div>
			<h3>Products</h3>
			<ProductsContainer>
                {products.map((product,index) =>{
                    return(
                        <Product key={product.id}>
                            <p>{product.name}</p>
                            <Button onClick={()=> addToCart(product.id,product.name)}>
                                Add To Cart
                            </Button>
                        </Product>
                    )
                })}
			</ProductsContainer>
		</div>
	);
}

const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 20px 0;
`;
 
const Product =  styled.div`
    padding: 20px;
    border: 1px solid #ebeef3;
    border-radius: 5px;
    text-align: center;
 
    p {
        margin-bottom: 10px;
        font-weight: bold;
    }
`;
 
const Button = styled.button`
    border: none;
    background: #1c85e8;
    color: #fff;
    font-size: 12px;
    font-family: 'Open Sans', sans-serif;
    text-align: center;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
    width: 100%;
    border-radius: 3px;
    transition: .3s ease all;
 
    &:hover {
        background: #1c6ab9;
    }
`;
 
export default Products;