import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: ${props => props.theme.aboutPage};
  color: ${props => props.theme.homeColorFirstPart};
  padding: 80px 50px 100px 50px;
`;

const Title = styled.div`
  padding: 0px 250px 0px 80px;
  font-size: 70px;
  font-weight: 500;
`;

const Heading = styled.div`
  margin: 0px 0px -15px 0px;
`;

const Content = styled.div`
  padding: 0px 80px 0px 80px;
`;

const BoldContent = styled.div`
  font-size: 30px;
  font-weight: 400;
`;

const NormalContent = styled.div`
  padding-top: 40px;
  font-size: 25px;
  font-weight: 300;
`;

const AboutPage = () => {
  return (
    <Container>
      <Title>
        <Heading>ABOUT</Heading>
        <Heading>ME</Heading>
      </Title>
      <Content>
        <BoldContent>
          I'm Shilpi Maurya, a self-taught front-end developer. Keenly
          interested in the universe of front-end development and user
          experience.
        </BoldContent>
        <NormalContent>
          Started self-taught developer journey about two years ago, used
          various online platform like codecademy, udemy, learned the basics of
          HTML, CSS and JS, after that learnt about different libaries and
          framework simultaenously working on different projects and blogs.
        </NormalContent>
        <NormalContent>
          Want to become a front-end web developer to learn, explore and provide
          great user experience on web-based digital products and services.
        </NormalContent>
      </Content>
    </Container>
  );
};

export default AboutPage;
