import styled, { keyframes } from "styled-components";
import Switch from "@material-ui/core/Switch";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import Link from "next/link";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #0f1727;
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  padding: 50px;
`;

const NavItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const NavItems = styled.div`
  color: white;
  margin-left: 30px;
  margin-right: 30px;
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid;
    transition: border-botttom 2s ease-in-out;
  }
`;

const Logo = styled.div`
  background: white;
  color: #0f1727;
  font-size: 40px;
  margin-right: 20px;
  cursor: pointer;
`;

const SwitchContainer = styled.div`
  align-items: center;
  justify-content: center;
`;

const Intro = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
`;

const IntroText = styled.div`
  font-size: 70px;
  font-weight: 500;
  padding: 120px 0px 100px 100px;
  width: 100%;
  text-align: left;
`;

const IntroPic = styled.div`
  margin-top: 40px;
`;

const animate = keyframes`
0% {opacity:0;}
50% {opacity:1;}
100% {opacity:0;}
`;

const ArrowContainer = styled.div`
  padding-top: 30px;
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
  padding-top: 10px;
  font-size: 25px;
  animation: ${subTextAnimate} 4s infinite;
  animation-delay: 10s;
`;

const CoverPage = () => {
  return (
    <>
      <Container>
        <NavBar>
          <Logo>SM</Logo>
          <NavItemsContainer>
            <NavItems>
              <Link href="/">
                <a>ABOUT ME</a>
              </Link>
            </NavItems>
            <NavItems>MY SKILLS</NavItems>
            <NavItems>PROJECTS</NavItems>
            <NavItems>CONTACT</NavItems>
          </NavItemsContainer>
          <SwitchContainer>
            <Switch></Switch>
          </SwitchContainer>
        </NavBar>
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
              width={800}
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
