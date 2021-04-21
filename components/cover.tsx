import styled, { keyframes } from "styled-components";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import Box from "../components/Box";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.homeBgFirstPart};
  color: ${props => props.theme.homeColorFirstPart};
`;

const Intro = styled.div`
  display: flex;
  flex-direction: row;
`;

const IntroText = styled.div`
  font-size: 70px;
  font-weight: 500;
  padding: 120px 0px 100px 100px;
  width: 100%;
  @media (max-width: 1090px) {
    padding: 120px 0px 100px 50px;
  }
  @media (max-width: 1055px) {
    font-size: 60px;
  }
  @media (max-width: 950px) {
    font-size: 40px;
  }
  @media (max-width: 700px) {
    font-size: 50px;
  }
  @media (max-width: 500px) {
    font-size: 40px;
  }
  @media (max-width: 690px) {
    padding: 80px 0px 100px 50px;
  }
`;

const IntroPic = styled.div`
  background: white;
  margin-top: 40px;
  border-radius: 10px;
  position: relative;
  top: 40px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
  @media (max-width: 730px) {
    width: 600px;
    height: 300px;
  }
  @media (max-width: 700px) {
    width: 0px;
    height: 0px;
  }
`;

const animate = keyframes`
0% {opacity:0;}
50% {opacity:1;}
100% {opacity:0;}
`;

const ArrowContainer = styled.div`
  padding-top: 10px;
`;

const Arrow = styled.span`
  opacity: 0;
  display: block;
  width: 20px;
  height: 20px;
  border-bottom: 3px solid ${props => props.theme.arrowColorFirstPart};
  border-right: 3px solid ${props => props.theme.arrowColorFirstPart};
  transform: rotate(45deg);
  margin: -5px;
  cursor: pointer;
  animation: ${animate} 4s infinite;
  animation-delay: 10s;
`;

const subTextAnimate = keyframes`
0% {opacity:1;}
50% {opacity:1;}
100% {opacity:1;}
`;

const SubText = styled.div`
  opacity: 0;
  padding-top: 30px;
  animation: ${subTextAnimate} 4s infinite;
  animation-delay: 10s;
`;

const CoverPage = ({ handleClick }) => {
  return (
    <Container>
      <Intro>
        <IntroText>
          <Typewriter
            onInit={typewriter => {
              typewriter
                .typeString("Shilpi Maurya")
                .deleteAll()
                .deleteChars(7)
                .typeString("<strong>Shilpi Maurya </strong>")
                .typeString("<br/>Front-end developer")
                .start();
            }}
          />
          <Box fontSize={[1, 1, 2, 2]}>
            <SubText>Know more</SubText>
          </Box>
          <ArrowContainer onClick={handleClick}>
            <Arrow />
            <Arrow />
            <Arrow />
          </ArrowContainer>
        </IntroText>
        <IntroPic>
          <Image
            className="cover_image"
            src="/Shilpi.png"
            alt="picture of Shilpi Maurya"
            layout="intrinsic"
            width={700}
            height={800}
            objectFit="cover"
            objectPosition="top"
          />
        </IntroPic>
      </Intro>
    </Container>
  );
};

export default CoverPage;
