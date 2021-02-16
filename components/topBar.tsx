import styled from "styled-components";
import Switch from "@material-ui/core/Switch";
import Link from "next/link";

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
    text-decoration: underline;
    transition: all 1s ease-in-out;
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

const TopBar = () => {
    
  return (
    <>
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
    </>
  );
};

export default TopBar;
