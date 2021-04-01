import styled from "styled-components";

const DivContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: ${props => props.theme.homeColorSecondPart};
  background: ${props => props.theme.homeBgSecondPart};
  padding: 60px;
  @media (max-width: 700px) {
    padding: 20px;
  }
  @media (max-width: 400px) {
    padding: 10px;
  }
`;

const Div = styled.div`
  padding: 20px;
  @media (max-width: 700px) {
    padding: 10px;
  }
`;

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const HeadingDiv = styled.div`
  font-size: 35px;
  font-weight: 500;
  padding-right: 15px;
  @media (max-width: 950px) {
    font-size: 25px;
  }
`;

// const ContentDiv = styled.div`
//   padding-top: 10px;
//   padding-bottom: 10px;
//   font-size: 25px;
//   font-weight: 250;
//   line-height: 1.6;
//   @media (max-width: 950px) {
//     font-size: 20px;
//   }
// `;

const MoreContentDiv = styled.div`
  padding-top: 10px;
  font-size: 22px;
  font-weight: 300;
  line-height: 1.6;
  @media (max-width: 950px) {
    font-size: 18px;
  }
`;

const Arrow = styled.span`
  margin-left: 20px;
  display: inline-block;
  width: 8px;
  height: 8px;
  border-bottom: 2px solid black;
  border-right: 2px solid black;
  transform: rotate(-45deg);
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0px 0px 0px;
`;

const ButtonLayout = styled.div`
  padding-bottom: 20px;
`;
const ButtonDesign = styled.button`
  padding: 10px 15px 10px 15px;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 2px,
    rgba(0, 0, 0, 0.9) 0px 0px 0px 1.5px;
  font-size: 16px;
  font-weight: 400;
  background-color: white;
  text-align: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: ${props => props.theme.buttonBg};
    transition: background 0.5s ease-in-out;
  }
  @media (max-width: 950px) {
    font-size: 12px;
  }
`;

const Intro = ({ pageRef }) => {
  return (
    <DivContainer ref={pageRef}>
      <Div>
        <HeadingContainer>
          <HeadingDiv>ABOUT ME</HeadingDiv>
        </HeadingContainer>
        <MoreContentDiv>
          {/* Started self-taught developer's journey about two years ago, used
          various online platforms like codecademy, udemy to learn the basics of
          HTML, CSS and JS, after that learnt about different libaries and
          frameworks like React, styled-components, styled-system, framer-motion
          etc simultaenously working on different projects and blogs. */}
          {/* Started self-taught developer's journey about two years ago, used
          various online platforms like codecademy, udemy to learn about the
          basics of web-development simultaenously working on different projects
          and blogs. */}
          I'm a freelance front-end developer, interested in exploring and
          providing great user experience on web.
        </MoreContentDiv>
        <MoreContentDiv>
          My main competence is in react, typescript, nextjs, styled-components,
          styled-system etc.
        </MoreContentDiv>
        <ButtonContainer>
          <ButtonLayout>
            <a href="" target="_blank">
              <ButtonDesign>
                MY RESUME
                <Arrow />
              </ButtonDesign>
            </a>
          </ButtonLayout>
          <ButtonLayout>
            <a href="https://github.com/ShilpiMaurya" target="_blank">
              <ButtonDesign>
                MY PROJECTS
                <Arrow />
              </ButtonDesign>
            </a>
          </ButtonLayout>
        </ButtonContainer>
      </Div>
      {/* <Div>
        <HeadingContainer>
          <HeadingDiv>CONTACT ME</HeadingDiv>
          <Link href="/contact">
            <Arrow></Arrow>
          </Link>
        </HeadingContainer>
        <ContentDiv>
          I'll be very exicted to work in some awesome projects and happy to
          dicuss your development needs. If you think i can help you with your
          next project, do get in touch.
          <ContactInfo>
            <a href="tel:9149235516">+91-9149235516</a>
          </ContactInfo>
          <ContactInfo>
            <a href="mailto:meshilpi94@gmail.com">meshilpi94@gmail.com</a>
          </ContactInfo>
        </ContentDiv>
      </Div> */}
      {/* <Div>
        <HeadingContainer>
          <HeadingDiv>MY BLOGS</HeadingDiv>
          <Link href="/blogs">
            <Arrow></Arrow>
          </Link>
        </HeadingContainer>
        <ContentDiv>
          I have been doing various types of projects from last one year to
          enhance my skills as a front-end developer, i enjoy learning new
          things and make a small project about it. I have also written few
          blogs on medium. Here are a few...
        </ContentDiv>
      </Div> */}
    </DivContainer>
  );
};

export default Intro;
