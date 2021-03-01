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
`;

const IntroPic = styled.div`
  margin-top: 40px;
  position: relative;
  top: 40px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
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
          <Box fontSize={[2]}>
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
