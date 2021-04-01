import styled from "styled-components";
import Image from "next/image";

const Title = styled.div`
  font-size: 70px;
  font-weight: 500;
  background: ${props => props.theme.aboutPage};
  color: ${props => props.theme.homeColorFirstPart};
  padding: 20px 0px 60px 60px;
  @media (max-width: 850px) {
    font-size: 50px;
  }
  @media (max-width: 550px) {
    padding: 20px 0px 40px 40px;
  }
  @media (max-width: 450px) {
    padding: 20px 0px 40px 30px;
    font-size: 40px;
  }
  @media (max-width: 400px) {
    padding: 20px 0px 40px 10px;
  }
`;

const Container = styled.div`
  padding: 50px 0px 150px 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.theme.contactPageBg};
  @media (max-width: 800px) {
    padding: 50px 0px 150px 0px;
  }
`;

const UnderDiv = styled.div`
  position: relative;
  background: ${props => props.theme.contactPageCard};
  height: 400px;
  width: 800px;
  @media (max-width: 970px) {
    height: 400px;
    width: 600px;
  }
  @media (max-width: 750px) {
    height: 400px;
    width: 500px;
  }
  @media (max-width: 650px) {
    height: 400px;
    width: 300px;
  }
  @media (max-width: 450px) {
    height: 400px;
    width: 200px;
  }
  @media (max-width: 360px) {
    height: 400px;
    width: 180px;
  }
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
  @media (max-width: 970px) {
    height: 400px;
    width: 600px;
    top: 45px;
    left: 45px;
  }
  @media (max-width: 750px) {
    height: 400px;
    width: 500px;
    top: 40px;
    left: 40px;
  }
  @media (max-width: 650px) {
    height: 400px;
    width: 300px;
    flex-direction: column;
  }
  @media (max-width: 450px) {
    height: 400px;
    width: 200px;
  }
  @media (max-width: 360px) {
    height: 400px;
    width: 180px;
    top: 30px;
    left: 30px;
  }
`;

const LogoDisplay = styled.div`
  padding: 0px 100px 0px 80px;
  width: 100%;
  @media (max-width: 970px) {
    padding: 0px 10px 0px 80px;
  }
  @media (max-width: 800px) {
    padding: 0px 10px 0px 20px;
  }
`;

const Logo = styled.div`
  background: ${props => props.theme.logoBg};
  color: ${props => props.theme.logoColor};
  font-size: 70px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  text-align: center;
  margin-left: 75px;
  margin-right: 75px;
  @media (max-width: 970px) {
    font-size: 60px;
  }
  @media (max-width: 800px) {
    margin-left: 80px;
    margin-right: 80px;
  }
  @media (max-width: 650px) {
    font-size: 50px;
    margin-left: 115px;
    margin-right: 115px;
  }
  @media (max-width: 450px) {
    font-size: 40px;
    margin-left: 70px;
    margin-right: 70px;
  }
  @media (max-width: 360px) {
    margin-left: 60px;
    margin-right: 60px;
  }
`;
const LogoText = styled.div`
  text-align: center;
  font-size: 25px;
  font-weight: 500;
  padding-top: 10px;
  @media (max-width: 970px) {
    font-size: 20px;
  }
  @media (max-width: 650px) {
    padding-bottom: 30px;
  }
  @media (max-width: 450px) {
    font-size: 18px;
  }
`;

const Content = styled.div`
  padding: 0px 80px 0px 0px;
  width: 100%;
  justify-content: center;
  @media (max-width: 800px) {
    padding: 0px 20px 0px 0px;
  }
`;

const ContactInfo = styled.div`
  font-size: 30px;
  text-align: center;
  @media (max-width: 970px) {
    font-size: 20px;
  }
  @media (max-width: 450px) {
    font-size: 17px;
  }
  @media (max-width: 360px) {
    font-size: 15px;
  }
`;

const ContactInfoContent = styled.div`
  cursor: pointer;
  padding: 5px;
  @media (max-width: 450px) {
    padding-left: 15px;
  }
`;

const SocioIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 20px;
  align-items: center;
  @media (max-width: 450px) {
    padding-left: 10px;
  }
  @media (max-width: 360px) {
    padding-left: 20px;
  }
`;

const SocioIconsItems = styled.div`
  cursor: pointer;
  margin-right: 15px;
  margin-left: 15px;
  @media (max-width: 450px) {
    margin-right: 10px;
    margin-left: 10px;
  }
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
                        src="/linkedin2.jpeg"
                        alt="linkedin logo"
                        layout="fixed"
                        width={35}
                        height={35}
                      />
                    </a>
                  </SocioIconsItems>
                  <SocioIconsItems>
                    <a href="https://medium.com/@meshilpi94" target="_blank">
                      <Image
                        src="/medium2.png"
                        alt="Medium logo"
                        layout="fixed"
                        width={35}
                        height={35}
                      />
                    </a>
                  </SocioIconsItems>
                  <SocioIconsItems>
                    <a href="https://github.com/ShilpiMaurya" target="_blank">
                      <Image
                        src="/github2.png"
                        alt="Github logo"
                        layout="fixed"
                        width={35}
                        height={35}
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
