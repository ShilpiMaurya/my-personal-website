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
  border-radius: 5px;
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
          I'm a freelance front-end developer, interested in exploring and
          providing great user experience on web.
        </MoreContentDiv>
        <MoreContentDiv>
          My main competence is in react, typescript, nextjs, styled-components,
          styled-system etc.
        </MoreContentDiv>
        <ButtonContainer>
          <ButtonLayout>
            <a
              href="/SHILPI's Resume.pdf"
              type="application/pdf"
              target="_blank"
            >
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
    </DivContainer>
  );
};

export default Intro;
