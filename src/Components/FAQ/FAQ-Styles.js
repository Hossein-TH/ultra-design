import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
  padding: 1.5rem;
`;

export const AccordionItem = styled.div`
  background-color: #283042;
  border-radius: 0.4rem;
  margin-bottom: 1rem;
  box-shadow: 0.5rem 2px 0.5rem rgba(0,0,0,0.1);
  padding: 1rem;
`;

export const TextTitle = styled.p`
  width: 100%;
  font-size: 1.6rem;
  color: rgba(255,255,255,0.8);
  text-decoration: none;
  background-color: #283042;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
`;

export const Text = styled.div`
  overflow: hidden;
  position: relative;
  color: #fff;
  padding: 2rem;
  background-color: #212838;
  transition: max-height 650ms;
  
  &::before {
    content: "";
    position: absolute;
    width: 0.6rem;
    height: 90%;
    background-color: #8fc460;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
  
`;




