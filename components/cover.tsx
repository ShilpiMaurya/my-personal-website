import styled, { keyframes } from "styled-components";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import TopBar from "../components/topBar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #0f1727;
  color: #ffffff;
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
  border-bottom: 3px solid #fff;
  border-right: 3px solid #fff;
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
  font-size: 25px;
  animation: ${subTextAnimate} 4s infinite;
  animation-delay: 10s;
`;

const CoverPage = () => {
  return (
    <>
      <Container>
        <TopBar />
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
            <SubText>Know more</SubText>
            <ArrowContainer>
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
    </>
  );
};

export default CoverPage;
