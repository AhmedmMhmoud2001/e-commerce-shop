import { Add, Remove } from "@mui/icons-material";
import React from 'react';
import styled from "styled-components";
import Announcement from "../Componantes/Announcement";
import Newsletter from "../Componantes/Newsletter";
import Footer from "../Componantes/Footer";
import { useParams } from "react-router";

const Container = styled.div`
@media only screen and (max-width: 500px) {
  
 }
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  @media only screen and (max-width: 500px) {
    padding: 10px;
    flex-direction: column;

  }
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 80%;
  height: 90%;
  object-fit: cover;
  @media only screen and (max-width: 500px) {
    height: 50vh;
  }
  
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  
`;
const Category = styled.h1`
  font-weight: 400;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 500px) {
    width: 100%;
  }
  
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 500px) {
    width: 100%;
  }
  
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
      background-color: #f8f4f4;
  }
`;

const Product = () => {
  const Prodact = useParams();
  console.log(Prodact.id);
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const url = `https://fakestoreapi.com/products/${Prodact.id}`;
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
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={data.image} />
        </ImgContainer>
        <InfoContainer>
          <Category>{data.category}</Category>
          <Title>{data.title}</Title>
          <Desc>
          {data.description}
          </Desc>
          <Price>  {data.price} $</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
