import styled from "styled-components";
import Switch from "@material-ui/core/Switch";
import Link from "next/link";
import Box from "../components/Box";

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  padding: 50px;
  background: ${props => props.theme.homeBgFirstPart};
  color: ${props => props.theme.homeColorFirstPart};
  @media (max-width: 500px) {
    padding: 30px;
  }
  @media (max-width: 400px) {
    padding: 10px;
  }
`;

const NavItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const NavItems = styled.div`
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
  padding-right: 2.5px;
  padding-left: 2.5px;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  @media (max-width: 500px) {
    margin-right: 10px;
  }
  @media (max-width: 400px) {
    margin-right: 0px;
  }
`;

const SwitchContainer = styled.div`
  align-items: center;
  justify-content: center;
  @media (max-width: 400px) {
    margin-top: 5px;
  }
`;

const TopBar = ({ changeHandler }) => {
  return (
    <Box>
      <NavBar>
        <Logo>
          <Link href="/">
            <a>SM</a>
          </Link>
        </Logo>
        <NavItemsContainer>
          <Box mr={[2, 2, 3, 4]} ml={[2, 2, 3, 4]}>
            <NavItems>
              <Link href="/blogs">
                <a>BLOGS</a>
              </Link>
            </NavItems>
          </Box>
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
    </Box>
  );
};

export default TopBar;
