import React from 'react';
import styled from "styled-components";
import LoginImage from '../../../Assets/images/Personalization.svg';
import AvatarImage from '../../../Assets/images/Avatar.svg';
import {Link} from "react-router-dom";
import Input from "../Tools/Input";


const Register = () => {

    return (
        <Container>
            <div>
                <Form>
                    <FormImg src={AvatarImage}/>
                    <h1>
                        Welcome
                    </h1>
                    <Input placeholder="Full Name"/>
                    <Input placeholder="Email" type="email"/>
                    <Input placeholder="Password" type="password"/>
                    <Input placeholder="Confirm Password" type="password"/>
                    <Button to="/">
                        Sign Up
                    </Button>
                </Form>
                <div>
                    <h4>
                        Already have an account? <span>Sign In</span>
                    </h4>
                    <Terms>
                        By signing up, I agree the Privacy Policy <br/> and Terms of Service
                    </Terms>
                </div>
            </div>
            <LoginImg src={LoginImage}/>
        </Container>
    );
};


const Container = styled.div`
  min-width: 300px;
  background: #101522;
  height: 100vh;
  backdrop-filter: blur(35px);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 5rem;
  
  @media screen and  (max-width: 960px) {
    display: flex;
    height: 100vh;
    position: relative;
    padding: 0;
  }
  
  h4 {
    color: #a9b3c1;
    font-weight: bold;
    font-size: 16px;
    align-items: center;
    text-align: center;
    margin-top: 20px;
  }
  
  span {
    color: #ff8d8d;
    cursor: pointer;
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  h1 {
    color: #fff;
    margin-bottom: 2rem;
    margin-top: 30px;
  }
  
`;

const Button = styled(Link)`
    max-width: 300px;
    min-width: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    height: 40px;
    width: 75%;
    border: none;
    outline: none;
    text-align: center;
    margin: 1rem 0;
    box-shadow: 0 14px 9px -15px rgba(0,0,0,0.25);
    border-radius: 8px;
    background-color: #4b59f7;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in;
    
    &:hover {
      transform: translateY(-3px);
      background: #0437FB;
    }
    
    @media screen and (max-width: 1024px) {
      margin-right: 25px;
    }
`;

const Terms = styled.p`
  padding: 0 1rem;
  text-align: center;
  font-size: 16px;
  color: #a9b3c1;
  font-weight: 300;
  margin-top: 3rem;
`;

const FormImg = styled.img`
  height: 100px;
  margin-right: 10px;
  justify-content: center;
`;

const LoginImg = styled.img`
  height: 360px;
  margin-left: 100px;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export default Register;
