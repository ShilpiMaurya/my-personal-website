import styled from "styled-components";
import Link from "next/link";

const DivContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: ${props => props.theme.homeColorSecondPart};
  background: ${props => props.theme.homeBgSecondPart};
  padding: 60px 60px 80px 60px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
`;

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const HeadingDiv = styled.div`
  font-size: 22px;
  font-weight: 400;
  padding-right: 15px;
`;

const ContentDiv = styled.div`
  padding-top: 20px;
  font-size: 20px;
  font-weight: 100;
  line-height: 1.6;
`;

const ContactInfo = styled.div`
  cursor: pointer;
  padding-top: 5px;
`;

const Arrow = styled.span`
  width: 8px;
  height: 8px;
  border-bottom: 3px solid ${props => props.theme.arrowColorSecondPart};
  border-right: 3px solid ${props => props.theme.arrowColorSecondPart};
  transform: rotate(-45deg);
  cursor: pointer;
  align-item: center;
  margin-top: 5px;
`;

const Intro = ({ pageRef }) => {
  return (
    <DivContainer ref={pageRef}>
      <Div>
        <HeadingContainer>
          <HeadingDiv>ABOUT ME</HeadingDiv>
          <Link href="/about">
            <Arrow></Arrow>
          </Link>
        </HeadingContainer>
        <ContentDiv>
          Im a self-taught front-end developer. Keenly interested in the
          universe of front-end development and user experience. Want to become
          a front-end web developer to learn, explore and provide great user
          experience on web-based digital products and services.
        </ContentDiv>
      </Div>
      <Div>
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
      </Div>
      <Div>
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
      </Div>
    </DivContainer>
  );
};

export default Intro;
