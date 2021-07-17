import React from "react";
import {
  HeroContainer,
  HeroText,
  HeroHeading,
  HeroTitle,
  HeroParagraph,
  HeroImage,
  Image,
} from "./styles";
const Hero = () => {
  return (
    <HeroContainer>
      <HeroText>
        <HeroHeading>Inicio</HeroHeading>
        <HeroTitle>
          “La educación es el arma más poderosa para cambiar el mundo”
          <span>Nelson Mandela (1918-2013)</span>
        </HeroTitle>
        <HeroParagraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          reiciendis officiis sequi vel. Totam itaque eaque labore magnam
          maiores vero hic tempora tenetur harum, eius soluta, repellendus
          facere minus unde!
        </HeroParagraph>
      </HeroText>
      <HeroImage>
        <Image src="images/img.png" loading="lazy" alt="image" />
      </HeroImage>
    </HeroContainer>
  );
};

export default Hero;
