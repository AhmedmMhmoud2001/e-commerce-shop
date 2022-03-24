import styled from 'styled-components'
import {
  Link
} from "react-router-dom";

const Container = styled.div`
flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f5fbfd;
  position: relative;
`
const Image = styled.img`
    height: 75%;
    width:70%;
    padding-left:15%;
    text-align:center;
    text-align:center;
    @media only screen and (max-width: 500px) {
      height: 55vh;
     }
`
const Info = styled.div`
    position: absolute;
    top:0;
    bottom:0;
    margin: auto;
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Category = styled.h2`
    color:white;
    margin-bottom: 20px;
`

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
`
const CategoryItem = ({Item}) => {
  return (
    
      <Container>
        <Link  to={`/ProductList/${Item.category}`}>
          <Image src={Item.img}/>
          <Info>
            <Category>{Item.category}</Category>
            <Button>Shop Now</Button>
          </Info>
        </Link>
      </Container>
  )
}

export default CategoryItem