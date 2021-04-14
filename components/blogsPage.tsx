import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 70px;
  font-weight: 500;
  background: ${props => props.theme.aboutPage};
  color: ${props => props.theme.homeColorFirstPart};
  padding: 20px 0px 60px 60px;
  @media (max-width: 755px) {
    padding: 20px 0px 30px 40px;
    font-size: 60px;
  }
  @media (max-width: 500px) {
    padding: 20px 0px 30px 30px;
    font-size: 40px;
  }
  @media (max-width: 400px) {
    padding: 20px 0px 30px 10px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 80px 60px 80px 60px;
  background: ${props => props.theme.blogsPageBg};
  @media (max-width: 1024px) {
    padding: 50px 30px 50px 30px;
  }
  @media (max-width: 780px) {
    padding: 30px 20px 30px 20px;
  }
  @media (max-width: 755px) {
    flex-direction: column;
    padding: 80px 60px 80px 60px;
  }
  @media (max-width: 560px) {
    padding: 50px 30px 50px 30px;
  }
  @media (max-width: 400px) {
    padding: 50px 20px 50px 20px;
  }
`;

const Card = styled.div`
  padding: 40px;
  background: white;
  border-radius: 10px;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  transform: scale(1);
  transition: 0.7s ease-in-out;
  &:hover {
    transform: scale(1.03);
    transition: 0.5s ease-in-out;
  }
  @media (max-width: 960px) {
    padding: 20px;
  }
  @media (max-width: 755px) {
    padding: 50px;
  }
  @media (max-width: 480px) {
    padding: 30px;
  }
  @media (max-width: 350px) {
    padding: 20px;
  }
`;

const CardBox = styled.div`
  padding: 20px 20px 20px 20px;
  @media (max-width: 960px) {
    padding: 10px 10px 10px 10px;
  }
  @media (max-width: 755px) {
    padding: 20px 40px 20px 40px;
  }
  @media (max-width: 400px) {
    padding: 20px 20px 20px 20px;
  }
  @media (max-width: 350px) {
    padding: 20px 10px 20px 10px;
  }
`;

const CardName = styled.div`
  margin-top: 20px;
  background: ${props => props.theme.aboutPage};
  color: ${props => props.theme.homeColorFirstPart};
  font-size: 15px;
  padding: 5px;
  border-radius: 5px;
  font-weight: 500;
  cursor: pointer;
  text-align: center;
`;

const Date = styled.div`
  font-size: 20px;
`;

const Publisher = styled.div`
  padding-bottom: 20px;
`;

const BlogsPage = () => {
  return (
    <Container>
      <Title>BLOGS</Title>
      <CardContainer>
        <CardBox>
          <Card>
            <Date>May 27, 2020</Date>
            <Publisher>Frontend Weekly (medium)</Publisher>
            <Image
              src="/medium-story-1.png"
              alt="medium story max"
              layout="intrinsic"
              width={300}
              height={300}
            />
            <CardName>
              <a
                href="https://medium.com/front-end-weekly/comparing-various-types-of-react-based-web-apps-and-how-to-analyze-their-performance-d23766e085f4"
                target="myFrame"
              >
                READ MORE...
              </a>
            </CardName>
          </Card>
        </CardBox>

        <CardBox>
          <Card>
            <Date>April 16, 2020</Date>
            <Publisher>Frontend Weekly (medium)</Publisher>
            <Image
              src="/medium-story-2.png"
              alt="medium story max"
              layout="intrinsic"
              width={300}
              height={300}
            />
            <CardName>
              <a
                href="https://medium.com/front-end-weekly/ci-cd-with-github-actions-to-deploy-on-github-pages-73e225f8f131"
                target="_blank"
              >
                READ MORE...
              </a>
            </CardName>
          </Card>
        </CardBox>

        <CardBox>
          <Card>
            <Date>October 12, 2019</Date>
            <Publisher>Quick Code (medium)</Publisher>
            <Image
              src="/medium-story-3.png"
              alt="medium story max"
              layout="intrinsic"
              width={300}
              height={300}
            />
            <CardName>
              <a
                href="https://medium.com/quick-code/useful-git-commands-a0d410c835f8"
                target="_blank"
              >
                READ MORE...
              </a>
            </CardName>
          </Card>
        </CardBox>
      </CardContainer>
    </Container>
  );
};

export default BlogsPage;
