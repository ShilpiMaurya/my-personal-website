import React, { useRef } from "react";
import CoverPage from "../components/cover";
import styled from "styled-components";
import Intro from "../components/intro";
import Footer from "../components/footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function Home() {
  const refPoint = useRef(null);

  const manageHandleClick = () => {
    refPoint.current.scrollIntoView();
  };

  return (
    <Container>
      <CoverPage handleClick={manageHandleClick}></CoverPage>
      <Intro pageRef={refPoint}></Intro>
      <Footer></Footer>
    </Container>
  );
}
