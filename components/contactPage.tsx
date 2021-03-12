import styled from "styled-components";
import Image from "next/image";

const Title = styled.div`
  font-size: 70px;
  font-weight: 500;
  background: ${props => props.theme.aboutPage};
  color: ${props => props.theme.homeColorFirstPart};
  padding: 20px 0px 60px 60px;
`;

const Container = styled.div`
  padding: 50px 20px 150px 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UnderDiv = styled.div`
  position: relative;
  background: #0e6677;
  height: 400px;
  width: 800px;
`;

const OverDiv = styled.div`
  position: absolute;
  background: #f5f5f5;
  height: 400px;
  width: 800px;
  top: 60px;
  left: 60px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  transform: scale(1);
  transition: 0.7s ease-in-out;
  &:hover {
    transform: scale(1.05);
    transition: 0.5s ease-in-out;
  }
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const LogoDisplay = styled.div`
  padding: 0px 100px 0px 80px;
  width: 100%;
`;

const Logo = styled.div`
  background: ${props => props.theme.logoBg};
  color: ${props => props.theme.logoColor};
  font-size: 80px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  text-align: center;
  margin-left: 60px;
  margin-right: 60px;
`;
const LogoText = styled.div`
  text-align: center;
  font-size: 25px;
  font-weight: 500;
  padding-top: 10px;
`;

const Content = styled.div`
  padding: 0px 80px 0px 0px;
  width: 100%;
  justify-content: center;
`;

const ContactInfo = styled.div`
  font-size: 30px;
  text-align: center;
`;

const ContactInfoContent = styled.div`
  cursor: pointer;
  padding: 5px;
`;

const SocioIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 20px;
`;

const SocioIconsItems = styled.div`
  cursor: pointer;
  margin-right: 15px;
  margin-left: 15px;
`;

const ContactPage = () => {
  return (
    <>
      <Title>GET IN TOUCH</Title>
      <Container>
        <UnderDiv>
          <OverDiv>
            <LogoDisplay>
              <Logo>SM</Logo>
              <LogoText>SHILPI MAURYA</LogoText>
            </LogoDisplay>
            <Content>
              <ContactInfo>
                <ContactInfoContent>
                  <a href="tel:9149235516">+91-9149235516</a>
                </ContactInfoContent>
                <ContactInfoContent>
                  <a href="mailto:meshilpi94@gmail.com">meshilpi94@gmail.com</a>
                </ContactInfoContent>
                <SocioIcons>
                  <SocioIconsItems>
                    <a
                      href="https://www.linkedin.com/in/shilpi-maurya-b6aa85129/"
                      target="_blank"
                    >
                      <Image
                        src="/linkedin.png"
                        alt="linkedin logo"
                        layout="fixed"
                        width={50}
                        height={50}
                      />
                    </a>
                  </SocioIconsItems>
                  <SocioIconsItems>
                    <a href="https://medium.com/@meshilpi94" target="_blank">
                      <Image
                        src="/medium.png"
                        alt="Medium logo"
                        layout="fixed"
                        width={50}
                        height={50}
                      />
                    </a>
                  </SocioIconsItems>
                  <SocioIconsItems>
                    <a href="https://github.com/ShilpiMaurya" target="_blank">
                      <Image
                        src="/github.png"
                        alt="Github logo"
                        layout="fixed"
                        width={50}
                        height={50}
                      />
                    </a>
                  </SocioIconsItems>
                </SocioIcons>
              </ContactInfo>
            </Content>
          </OverDiv>
        </UnderDiv>
      </Container>
    </>
  );
};

export default ContactPage;
