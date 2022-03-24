import React from 'react';
import styled from 'styled-components';
import Product from './Product';
import {useState, useEffect} from "react"

const Header =styled.h2`
text-align:center;
font-size:35px;
padding:20px;
`
const Container = styled.div`
padding:20px;
display:flex;
flex-direction:row;
flex-wrap:wrap;
justify-content:space-between;
align-items: center;
`
const Products = ({cat,filter,sort}) => {
  console.log(cat)
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = `https://fakestoreapi.com/products`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log("error in api"));
  }, []);

   useEffect(() => {
    if (data.length !== 0) {
      setIsLoading(false);
    }
    console.log("data")
    
  }, [data]);
  return (
    <div>
      <Header>Products</Header>
      <Container>
        {isLoading ? (
          <h1>
            loading ...
          </h1>
        ) : (
          data.map((product , cat ) => (
              <Product product ={product} key={product.id}/>
          ))
        )}
      </Container>
    </div>
  )
}

export default Products