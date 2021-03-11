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
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 80px 60px 80px 60px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  margin-left: 30px;
  margin-right: 30px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  transform: scale(1);
  transition: 0.7s ease-in-out;
  &:hover {
    transform: scale(1.03);
    transition: 0.5s ease-in-out;
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
      </CardContainer>
    </Container>
  );
};

export default BlogsPage;
