import styled from "styled-components";
import {useState} from 'react'


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  @media only screen and (max-width: 500px) {
    width: 80%;
   }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  const [name, setName] = useState('');

  const [password, setPassword] = useState('');
      
  function handleChange(e) {
    e.preventDefault();
    setName(e.target.value);
  };
  function handleChangePassword(ele) {
    ele.preventDefault();
    setPassword(ele.target.value);
  };
  
  // const LOGIN = () => {
  //       if ( name.length===0)   
  //         { alert(' your name is empty');}
    
  //       else if ( name.length < 5)   
  //         { alert('your name is very small');}
  //       else if ( name.length >20)   
  //         { alert('your name is very larg');}
  //       else if ( password.length===0)   
  //         { alert('A password: ' + password+'is empty');}
    
  //       else if ( password.length<6)   
  //         { alert('A password : ' +password+'is small');} 
  //       else {
  //         console.log(name + password)
  //       }
  // }
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" value={name} onChange={handleChange}/>
          <Input placeholder="password" value={password} onChange={handleChangePassword} />
          <Button >LOGIN</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
