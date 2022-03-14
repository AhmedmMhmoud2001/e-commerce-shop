import React from 'react';
import styled from 'styled-components';
import Product from './Product';
const Container = styled.div`
padding:20px;
display:flex;
flex-direction:row;
flex-wrap:wrap;
justify-content:space-between;
align-items: center;
`
const Products = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const url = 'https://fakestoreapi.com/products';
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error));
  }, []);

  React.useEffect(() => {
    if (data.length !== 0) {
      setIsLoading(false);
    }
    console.log(data)
    
  }, [data]);

  return (

    <Container>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        data.map((product) => (
            <Product product ={product} key={product.id} />
        ))
      )}
    </Container>
  )
}

export default Products