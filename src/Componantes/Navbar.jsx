
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Cart from '../Pages/Cart';
import ProductList from '../Pages/ProductList';
import Product from '../Pages/Product';
import Home from '../Pages/Home';
import { mobile } from "../responsive"; 



const Container = styled.div`
height: 60px;
background:#f3f3fe;
@media only screen and (max-width: 600px) {
  height: 50px;
  padding:0px 10px;
 }
`

const Wrapper= styled.div`
padding:10px 20px;
display:flex;
justify-content:space-between;
align-items:center;
${mobile({ padding: "10px 0px" })}
`
const Left= styled.div`
flex:1;

`
const Logo =styled.h1`
font-weight: bold;
`
const Center= styled.div`
flex:1;
display:flex;
align-items:center;
@media only screen and (max-width: 990px) {
 display:none;
}
`
const Centerlink= styled.div`
flex:1;
display:flex;
justify-content:flex-end;
align-items:center;
@media only screen and (max-width: 600px) {
  display:none;
 }
`
const Language = styled.span`
font-size:16px;
cursor:pointer;

`
const SearchContainer =styled.div`
border:0.5px solid lightgray;
margin-left:25px;
padding: 5px;
display:flex;
align-items:center;
background:#fff;
border-radius: 5px;
`
const Input = styled.input`
border:none;
`



const Right= styled.div`
flex:1;
display:flex;
justify-content:flex-end;
align-items:center;
`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;

`
const Navbar = (props) => {
  console.log(props)
  return (
    <Router>
      <Container>
        <Wrapper>
          <Left>
            <Logo onClick={props.increase}>LAMA</Logo>
          </Left>
          <Center>
            <Language>EN</Language>
            <SearchContainer>
              <Input placeholder="Search"/>
              <SearchIcon style={{ color: "gray", fontSize: 16 }}/>
            </SearchContainer>
          </Center>
          <Centerlink>
          <MenuItem>
          <Link  to="/"></Link>
          <Link  to="/Home">Home</Link>
          </MenuItem>
          <MenuItem>
            <Link  to="/ProductList">ProductList</Link>
          </MenuItem>
          </Centerlink>
          <Right>
          <MenuItem>
            <Link  to="/Register">REGISTER</Link>
          </MenuItem>
          <MenuItem>
            <Link  to="/Login">SIGNIN</Link>
          </MenuItem>
          <MenuItem>
          <Link  to="/Cart">
            <Badge badgeContent={4} color="primary">
               <div> </div>
              <ShoppingCartIcon/>
            </Badge>
          </Link>
          </MenuItem>
          </Right>
        </Wrapper>
      </Container>
                <Routes>
                <Route path="/"  element={<Home/>} exact/>
                <Route path="/Home"  element={<Home/>} exact/>
                    <Route path="/ProductList"  element={<ProductList/>} exact/>
                    <Route path="/ProductList/:category"  element={<ProductList/>} exact/>
                    <Route path="/Product"  element={<Product/>} exact/>
                    <Route path="/product/:id"  element={<Product/>} exact/>
                    <Route path="/products/:id"  element={<Product/>} exact/>
                    <Route path="/Cart"  element={<Cart/>} exact/>
                    <Route path="/Register"  element={<Register/>} exact/>
                    <Route path="/Login"  element={<Login/>} exact/>
                </Routes>
    </Router>
  )
}


export default Navbar