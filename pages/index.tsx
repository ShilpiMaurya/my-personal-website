import CoverPage from "../components/cover";
import styled from "styled-components";
import Intro from "../components/intro";
import Footer from "../components/footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function Home() {
  return (
    <>
      <Container>
        <CoverPage></CoverPage>
        <Intro></Intro>
        <Footer></Footer>
      </Container>
    </>
  );
}
