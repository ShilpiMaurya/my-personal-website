import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  color: ${props => props.theme.homeColorThirdPart};
  background: ${props => props.theme.homeBgThirdPart};
  padding: 50px 50px 60px 50px;
  @media (max-width: 700px) {
    padding: 30px 30px 40px 30px;
  }
  @media (max-width: 700px) {
    padding: 30px 10px 40px 10px;
  }
  @media (max-width: 450px) {
    padding: 10px 5px 20px 5px;
  }
  @media (max-width: 420px) {
    padding: 10px 0px 20px 0px;
  }
`;

const LinksContainer = styled.div`
  padding: 40px 0px 0px 50px;
  font-size: 15px;
  width: 100%;
  @media (max-width: 700px) {
    padding: 30px 0px 0px 40px;
  }
  @media (max-width: 400px) {
    padding: 20px 0px 0px 30px;
  }
  @media (max-width: 380px) {
    padding: 20px 0px 0px 10px;
  }
`;

const LinksContent = styled.div`
  margin-top: 15px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    transition: border-botttom 2s ease-in-out;
  }
`;

const ContactInfo = styled.div`
  padding: 40px 50px 0px 0px;
  font-size: 15px;
  text-align: right;
  @media (max-width: 700px) {
    padding: 30px 40px 0px 0px;
  }
  @media (max-width: 400px) {
    padding: 20px 30px 0px 0px;
  }
  @media (max-width: 380px) {
    padding: 20px 20px 0px 0px;
  }
`;

const ContactInfoContent = styled.div`
  margin-top: 15px;
  cursor: pointer;
`;

const SocioIcons = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  align-items: right;
`;

const SocioIconsItems = styled.div`
  padding-left: 30px;
  cursor: pointer;
`;

const Footer = () => {
  return (
    <Container>
      <LinksContainer>
        <LinksContent>
          <Link href="/blogs">
            <a>BLOGS</a>
          </Link>
        </LinksContent>
        <LinksContent>
          <Link href="/contact">
            <a>CONTACT</a>
          </Link>
        </LinksContent>
        <LinksContent>
          <a href="/SHILPI's Resume.pdf" type="application/pdf" target="_blank">
            RESUME
          </a>
        </LinksContent>
      </LinksContainer>
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
                width={25}
                height={25}
              />
            </a>
          </SocioIconsItems>
          <SocioIconsItems>
            <a href="https://medium.com/@meshilpi94" target="_blank">
              <Image
                src="/medium.png"
                alt="Medium logo"
                layout="fixed"
                width={25}
                height={25}
              />
            </a>
          </SocioIconsItems>
          <SocioIconsItems>
            <a href="https://github.com/ShilpiMaurya" target="_blank">
              <Image
                src="/github.png"
                alt="Github logo"
                layout="fixed"
                width={25}
                height={25}
              />
            </a>
          </SocioIconsItems>
        </SocioIcons>
      </ContactInfo>
    </Container>
  );
};

export default Footer;
