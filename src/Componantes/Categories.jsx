import styled from 'styled-components';
import {categories} from '../data';
import CategoryItem from './CategoryItem';
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

const Categories = () => {
  return (
    <div>
      <Header>Categories</Header>
      <Container>
      {categories.map(Item => (
        <CategoryItem Item={Item} key={Item.id}/>
      ))}
      </Container>
    </div>
  )
}
export default Categories