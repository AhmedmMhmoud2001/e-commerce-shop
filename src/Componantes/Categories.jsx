import styled from 'styled-components';
import {categories} from '../data';
import CategoryItem from './CategoryItem';

const Container = styled.div`
padding:20px;
display:flex;
height:70vh;
@media only screen and (max-width: 500px) {
  padding: 0px;
  flex-direction:column ;
  height:100%;
 }
`

const Categories = () => {
  return (
    <Container>
    {categories.map(Item => (
      <div>
      <CategoryItem Item={Item} key={Item.id}/>
      </div>
    ))}
    </Container>
  )
}

export default Categories