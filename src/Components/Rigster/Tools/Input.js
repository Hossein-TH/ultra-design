import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledInput = styled.input`
  width: 80%;
  max-width: 350px;
  min-width: 250px;
  height: 40px;
  outline: none;
  border: none;
  margin: 0.5rem 0;
  background-color: #f5f5f5;
  box-shadow: 0 14px 9px -15px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 0 1rem;
  transition: all 0.2s ease-in;
  
  &:hover {
    transform: translateY(-3px);
  }
`;

const Status = styled.div`
  height: 10px;
  width: 10px;
  background: #9d9d9d;
  border-radius: 10px;
  margin-left: 1rem;
  
  ${StyledInput}:focus + & {
    background: #ffa689;
  }
  
  ${StyledInput}:invalid + & {
    background: #fe2f75;
  } 
  
  ${StyledInput}:valid + & {
    background: #70edb9;
  }
`;

const Input = ({placeholder,type}) => {
    return (
        <Container>
            <StyledInput placeholder={placeholder && placeholder} type={type ? type : "text"} required autocomplete="off"/>
            <Status />
        </Container>
    );
};

export default Input;
