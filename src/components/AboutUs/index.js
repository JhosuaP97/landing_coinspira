import React from "react";
import {
  AboutContainer,
  AboutInfo,
  AboutHeader,
  AboutHeading,
  AboutImages,
  GroupOne,
  GroupTwo,
  ImageContainer,
  Image,
} from "./styles";
const AboutUs = () => {
  return (
    <AboutContainer>
      <AboutImages>
        <GroupOne>
          <ImageContainer>
            <Image src="images/engineer.jpeg" alt="engineer" loading="lazy" />
          </ImageContainer>
          <ImageContainer>
            <Image
              src="images/smiling-woman.jpeg"
              alt="smiling woman"
              loading="lazy"
            />
          </ImageContainer>
        </GroupOne>
        <GroupTwo>
          <ImageContainer>
            <Image src="images/team.jpeg" alt="team" loading="lazy" />
          </ImageContainer>
          <ImageContainer>
            <Image
              src="images/developers.jpeg"
              alt="developers"
              loading="lazy"
            />
          </ImageContainer>
        </GroupTwo>
      </AboutImages>
      <AboutInfo>
        <AboutHeader>
          <AboutHeading>¿Quiénes somos?</AboutHeading>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nemo
            quidem, nisi ipsum doloribus odit quisquam voluptas, laborum facere
            id labore dolor eligendi illo sint, assumenda veniam voluptatibus ea
            facilis!
          </p>
        </AboutHeader>
      </AboutInfo>
    </AboutContainer>
  );
};

export default AboutUs;
