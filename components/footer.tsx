import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  background: #0f1727;
  padding: 50px 50px 60px 50px;
`;

const Links = styled.div`
  padding: 20px 0px 0px 50px;
  font-size: 15px;
  width: 100%;
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
    <>
      <Container>
        <Links>
          <LinksContent>ABOUT ME</LinksContent>
          <LinksContent>MY SKILLS</LinksContent>
          <LinksContent>MY PROJECTS</LinksContent>
          <LinksContent>CONTACT ME</LinksContent>
        </Links>
        <ContactInfo>
          <ContactInfoContent>+91-9149235516</ContactInfoContent>
          <ContactInfoContent>meshilpi94@gmail.com</ContactInfoContent>
          <SocioIcons>
            <SocioIconsItems>
              <Image
                src="/linkedin.png"
                alt="linkedin logo"
                layout="fixed"
                width={25}
                height={25}
              />
            </SocioIconsItems>
            <SocioIconsItems>
              <Image
                src="/medium.png"
                alt="Medium logo"
                layout="fixed"
                width={25}
                height={25}
              />
            </SocioIconsItems>
            <SocioIconsItems>
              <Image
                src="/github.png"
                alt="Github logo"
                layout="fixed"
                width={25}
                height={25}
              />
            </SocioIconsItems>
          </SocioIcons>
        </ContactInfo>
      </Container>
    </>
  );
};

export default Footer;
