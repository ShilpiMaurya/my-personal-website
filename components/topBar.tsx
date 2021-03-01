import styled from "styled-components";
import Switch from "@material-ui/core/Switch";
import Link from "next/link";

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  padding: 50px;
  background: ${props => props.theme.homeBgFirstPart};
  color: ${props => props.theme.homeColorFirstPart};
`;

const NavItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const NavItems = styled.div`
  margin-left: 30px;
  margin-right: 30px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    transition: all 1s ease-in-out;
  }
`;

const Logo = styled.div`
  background: ${props => props.theme.logoBg};
  color: ${props => props.theme.logoColor};
  font-size: 40px;
  margin-right: 20px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const SwitchContainer = styled.div`
  align-items: center;
  justify-content: center;
`;

const TopBar = ({ changeHandler }) => {
  return (
    <NavBar>
      <Logo>
        <Link href="/">
          <a>SM</a>
        </Link>
      </Logo>
      <NavItemsContainer>
        <NavItems>
          <Link href="/about">
            <a>ABOUT ME</a>
          </Link>
        </NavItems>
        <NavItems>
          <Link href="/skills">
            <a>MY SKILLS</a>
          </Link>
        </NavItems>
        <NavItems>
          <Link href="/blogs">
            <a>BLOGS</a>
          </Link>
        </NavItems>
        <NavItems>
          <Link href="/projects">
            <a>PROJECTS</a>
          </Link>
        </NavItems>
        <NavItems>
          <Link href="/contact">
            <a>CONTACT</a>
          </Link>
        </NavItems>
      </NavItemsContainer>
      <SwitchContainer>
        <Switch onChange={changeHandler} />
      </SwitchContainer>
    </NavBar>
  );
};

export default TopBar;
