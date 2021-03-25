import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: ${props => props.theme.aboutPage};
  color: ${props => props.theme.homeColorFirstPart};
  padding: 30px 50px 100px 50px;
`;

const Title = styled.div`
  padding: 0px 0px 0px 80px;
  font-size: 70px;
  font-weight: 500;
  width: 100%;
`;

const Heading = styled.div`
  margin: 0px 0px -15px 0px;
`;

const Content = styled.div`
  padding: 0px 80px 0px 0px;
`;

const InstaDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  border-radius: 10px;
  background: white;
  color: black;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

const InstaHeader = styled.div`
  padding: 5px 15px 5px 15px;
  display: flex;
  flex-direction: row;
  background: grey;
  border-radius: 10px 10px 0px 0px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Topic = styled.div`
  color: white;
  font-size: 25px;
  padding: 10px;
`;

const DotContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Dot = styled.div`
  width: 7px;
  height: 7px;
  background: white;
  border-radius: 100%;
  margin: 2px;
`;

const InstaContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const InstaBoldContent = styled.div`
  font-size: 30px;
  padding-top: 20px;
`;

const InstaNormalContent = styled.div`
  padding-top: 20px;
  font-size: 20px;
  font-weight: 200;
`;

const InstaSigns = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px 3px 10px;
`;

const Icons = styled.div`
  padding-right: 10px;
`;

const MainSigns = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const InstaLikes = styled.div`
  padding: 0px 0px 0px 10px;
  font-weight: 530;
  font-size: 17px;
`;

const InstaComments = styled.div`
  padding: 10px 0px 10px 10px;
  color: grey;
  font-weight: normal;
`;

const InstaMyComment = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px 0px 0px 10px;
  font-size: 18px;
`;

const InstaID = styled.div`
  font-weight: 500;
`;

const InstaComment = styled.div`
  margin: 0px 0px 0px 10px;
  font-weight: 300;
  text-decoration: underline;
  cursor: pointer;
`;

const InstaCommentWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const LittleHeart = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-right: 15px;
`;

const InstaTime = styled.div`
  padding: 10px 0px 10px 10px;
  color: grey;
  font-weight: normal;
  font-size: 15px;
`;

const InstaFooter = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 10px 20px 10px;
`;

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Smiley = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const AddComment = styled.div`
  padding-left: 15px;
  color: grey;
  font-weight: normal;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const Post = styled.div`
  color: #00cfea;
  opacity: 0.5;
`;

const AboutPage = () => {
  return (
    <Container>
      <Title>
        <Heading>ABOUT</Heading>
        <Heading>ME</Heading>
      </Title>
      <Content>
        <InstaDiv>
          <InstaHeader>
            <Header>
              <Image
                src="/DP.png"
                alt="Shilpi Maurya picture"
                layout="fixed"
                width={50}
                height={50}
              />
              <Topic>SHILPI_MAURYA</Topic>
            </Header>
            <DotContainer>
              <Dot />
              <Dot />
              <Dot />
            </DotContainer>
          </InstaHeader>
          <InstaContent>
            <InstaBoldContent>
              I'm a free-lance front-end developer. Keenly interested in the
              universe of front-end development and user experience.
            </InstaBoldContent>
            <InstaNormalContent>
              Started self-taught developer journey about two years ago, used
              various online platform like codecademy, udemy, learned the basics
              of HTML, CSS and JS, after that learnt about different libaries
              and framework simultaenously working on different projects and
              blogs.
            </InstaNormalContent>
            <InstaNormalContent>
              Want to become a front-end web developer to learn, explore and
              provide great user experience on web-based digital products and
              services.
            </InstaNormalContent>
          </InstaContent>
          <InstaSigns>
            <MainSigns>
              <Icons>
                <Image
                  src="/heart3.png"
                  alt="Shilpi Maurya picture"
                  layout="fixed"
                  width={30}
                  height={30}
                />
              </Icons>
              <Icons>
                <Image
                  src="/comment.jpeg"
                  alt="Shilpi Maurya picture"
                  layout="fixed"
                  width={30}
                  height={30}
                />
              </Icons>
              <Icons>
                <Image
                  src="/share2.png"
                  alt="Shilpi Maurya picture"
                  layout="fixed"
                  width={30}
                  height={30}
                />
              </Icons>
            </MainSigns>
            <Image
              src="/bookmark.jpeg"
              alt="Shilpi Maurya picture"
              layout="fixed"
              width={30}
              height={30}
            />
          </InstaSigns>
          <InstaLikes>6,567 likes</InstaLikes>
          <InstaComments>View all 148 comments</InstaComments>
          <InstaMyComment>
            <InstaCommentWrap>
              <InstaID>shilpi_maurya</InstaID>
              <InstaComment>Checkout my projects</InstaComment>
            </InstaCommentWrap>
            <LittleHeart>
              <Image
                src="/heart3.png"
                alt="Shilpi Maurya picture"
                layout="fixed"
                width={15}
                height={15}
              />
            </LittleHeart>
          </InstaMyComment>
          <InstaMyComment>
            <InstaCommentWrap>
              <InstaID>shilpi_maurya</InstaID>
              <InstaComment>Download my resume</InstaComment>
            </InstaCommentWrap>
            <LittleHeart>
              <Image
                src="/heart3.png"
                alt="Shilpi Maurya picture"
                layout="fixed"
                width={15}
                height={15}
              />
            </LittleHeart>
          </InstaMyComment>
          <InstaTime>12 HOURS AGO</InstaTime>
          <hr />
          <InstaFooter>
            <FooterWrapper>
              <Smiley>
                <Image
                  src="/smiley.png"
                  alt="Shilpi Maurya picture"
                  layout="fixed"
                  width={25}
                  height={25}
                />
              </Smiley>
              <AddComment>Add a comment...</AddComment>
            </FooterWrapper>
            <Post>Post</Post>
          </InstaFooter>
        </InstaDiv>
      </Content>
    </Container>
  );
};

export default AboutPage;

//Insta view

// import styled from "styled-components";
// import Image from "next/image";

// const Container = styled.div`
//   padding: 50px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

// const InstaDiv = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 500px;
//   border-radius: 10px;
//   box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
// `;

// const InstaHeader = styled.div`
//   padding: 5px 15px 5px 15px;
//   display: flex;
//   flex-direction: row;
//   background: #0e6677;
//   border-radius: 10px 10px 0px 0px;
// `;

// const Header = styled.div`
//   display: flex;
//   flex-direction: row;
//   width: 100%;
// `;

// const Topic = styled.div`
//   color: white;
//   font-family: cursive;
//   font-size: 25px;
//   padding: 10px;
// `;

// const DotContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
// `;

// const Dot = styled.div`
//   width: 7px;
//   height: 7px;
//   background: white;
//   border-radius: 100%;
//   margin: 2px;
// `;

// const InstaContent = styled.div`
//   padding: 20px;
// `;

// const InstaSigns = styled.div`
//   display: flex;
//   flex-direction: row;
//   padding: 10px 10px 3px 10px;
// `;

// const Icons = styled.div`
//   padding-right: 10px;
// `;

// const MainSigns = styled.div`
//   display: flex;
//   flex-direction: row;
//   width: 100%;
// `;

// const InstaLikes = styled.div`
//   padding: 0px 0px 0px 10px;
//   font-weight: 530;
//   font-size: 17px;
// `;

// const InstaComments = styled.div`
//   padding: 10px 0px 10px 10px;
//   color: grey;
//   font-weight: normal;
// `;

// const InstaMyComment = styled.div`
//   display: flex;
//   flex-direction: row;
//   padding: 0px 0px 0px 10px;
//   font-size: 18px;
// `;

// const InstaID = styled.div`
//   font-weight: 500;
// `;

// const InstaComment = styled.div`
//   padding: 0px 0px 0px 10px;
//   font-weight: 300;
// `;

// const InstaCommentWrap = styled.div`
//   display: flex;
//   flex-direction: row;
//   width: 100%;
// `;

// const LittleHeart = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
//   padding-right: 15px;
// `;

// const InstaTime = styled.div`
//   padding: 10px 0px 10px 10px;
//   color: grey;
//   font-weight: normal;
//   font-size: 15px;
// `;

// const InstaFooter = styled.div`
//   display: flex;
//   flex-direction: row;
//   padding: 20px 10px 20px 10px;
// `;

// const FooterWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   width: 100%;
// `;

// const Smiley = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
// `;

// const AddComment = styled.div`
//   padding-left: 15px;
//   color: grey;
//   font-weight: normal;
//   text-align: center;
//   align-items: center;
//   justify-content: center;
// `;

// const Post = styled.div`
//   color: #00cfea;
//   opacity: 0.5;
// `;

// const AboutPage = () => {
//   return (
//     <Container>
//       <InstaDiv>
//         <InstaHeader>
//           <Header>
//             <Image
//               src="/DP.png"
//               alt="Shilpi Maurya picture"
//               layout="fixed"
//               width={50}
//               height={50}
//             />
//             <Topic>ABOUT ME</Topic>
//           </Header>
//           <DotContainer>
//             <Dot />
//             <Dot />
//             <Dot />
//           </DotContainer>
//         </InstaHeader>
//         <InstaContent>
//           I'm Shilpi Maurya, a self-taught front-end developer. Keenly
//           interested in the universe of front-end development and user
//           experience.
//           <br />
//           <br />
//           <br />
//           Started self-taught developer journey about two years ago, used
//           various online platform like codecademy, udemy, learned the basics of
//           HTML, CSS and JS, after that learnt about different libaries and
//           framework simultaenously working on different projects and blogs.
//           <br />
//           <br />
//           <br />
//           Want to become a front-end web developer to learn, explore and provide
//           great user experience on web-based digital products and services.
//         </InstaContent>
//         <InstaSigns>
//           <MainSigns>
//             <Icons>
//               <Image
//                 src="/heart3.png"
//                 alt="Shilpi Maurya picture"
//                 layout="fixed"
//                 width={30}
//                 height={30}
//               />
//             </Icons>
//             <Icons>
//               <Image
//                 src="/comment.jpeg"
//                 alt="Shilpi Maurya picture"
//                 layout="fixed"
//                 width={30}
//                 height={30}
//               />
//             </Icons>
//             <Icons>
//               <Image
//                 src="/share2.png"
//                 alt="Shilpi Maurya picture"
//                 layout="fixed"
//                 width={30}
//                 height={30}
//               />
//             </Icons>
//           </MainSigns>
//           <Image
//             src="/bookmark.jpeg"
//             alt="Shilpi Maurya picture"
//             layout="fixed"
//             width={30}
//             height={30}
//           />
//         </InstaSigns>
//         <InstaLikes>6,567 likes</InstaLikes>
//         <InstaComments>View all 148 comments</InstaComments>
//         <InstaMyComment>
//           <InstaCommentWrap>
//             <InstaID>shilpi_maurya</InstaID>
//             <InstaComment>Checkout my projects</InstaComment>
//           </InstaCommentWrap>
//           <LittleHeart>
//             <Image
//               src="/heart3.png"
//               alt="Shilpi Maurya picture"
//               layout="fixed"
//               width={15}
//               height={15}
//             />
//           </LittleHeart>
//         </InstaMyComment>
//         <InstaMyComment>
//           <InstaCommentWrap>
//             <InstaID>shilpi_maurya</InstaID>
//             <InstaComment>Download my resume</InstaComment>
//           </InstaCommentWrap>
//           <LittleHeart>
//             <Image
//               src="/heart3.png"
//               alt="Shilpi Maurya picture"
//               layout="fixed"
//               width={15}
//               height={15}
//             />
//           </LittleHeart>
//         </InstaMyComment>
//         <InstaTime>12 HOURS AGO</InstaTime>
//         <hr />
//         <InstaFooter>
//           <FooterWrapper>
//             <Smiley>
//               <Image
//                 src="/smiley.png"
//                 alt="Shilpi Maurya picture"
//                 layout="fixed"
//                 width={25}
//                 height={25}
//               />
//             </Smiley>
//             <AddComment>Add a comment...</AddComment>
//           </FooterWrapper>
//           <Post>Post</Post>
//         </InstaFooter>
//       </InstaDiv>
//     </Container>
//   );
// };

// export default AboutPage;
