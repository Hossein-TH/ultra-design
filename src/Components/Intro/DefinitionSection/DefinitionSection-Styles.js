import styled from "styled-components";

export const IntroSec = styled.div`
  padding: 160px 0;
  background: #101522;
`;

export const TopLine = styled.p`
  color: Magenta;
  text-align: left;
  width: 180px;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #f7f8fa;
  
  span {
    color: #6a55e4;
  }
`;

export const Subtitle = styled.h3`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #a9b3c1;
`;

export const Description = styled.div`
  margin-bottom: 35px;
  justify-content: space-between;
`;

export const Detail = styled.p`
  font-size: 18px;
  line-height: 24px;
  color: #a9b3c1;
`;

export const DesContainer = styled.div`
  max-width: 440px;
  display: flex;
  justify-content: space-between;
`;

export const DetailCount = styled.p`
  font-size: 20px;
  text-align: center;
  line-height: 24px;
  color: #fafafa;
  font-weight: bold;
`;

export const Founder = styled.div`
  max-width: 440px;
  display: flex;
  flex-direction: column;
  margin-bottom: 35px;
`;

export const FounderTitle = styled.p`
  font-size: 18px;
  line-height: 24px;
  color: #a9b3c1;
  margin-bottom: 5px;
`;

export const FounderSubtitle = styled.p`
  font-size: 12px;
  line-height: 24px;
  color: #15bfed;
  margin-bottom: 10px;
`;

export const Box = styled.p`
  padding: 40px;
  text-align: center;
  background: #1d1e22;
  margin-bottom: 30px;
  border: 1px solid;
  border-radius: 6px;
  max-width: 300px;
  box-shadow: 0 4px 30px rgba(0,0,0,.5);
  display: flex;
  flex-direction: column;
  
  &:hover {
   transition: all 0.3s ease-out;
   transform: scale(1.06);
  }
  
 
`;

export const CustomBox = styled(Box)`
  margin-left: 80px;
  
  &:hover {
    transition: all 0.3s ease-out;
    transform: translateX(20px);
  }
  
  @media screen and (max-width: 960px) {
    margin-left: 0;
    
    &:hover {
      transition: all 0.3s ease-out;
      transform: scale(1.06);
    }
  }
`;

export const BoxTitle = styled.p`
  margin-bottom: 10px;
  font-size: 19px;
  text-align: center;
  font-weight: bold;
  color: #fff;
`;

export const BoxSubtitle = styled.p`
  font-size: 16px;
  text-align: center;
  font-weight: bold;
  color: #a9b3c1;
`;