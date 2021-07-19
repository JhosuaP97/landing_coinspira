import styled from "styled-components";
import { Colors, breakpoint } from "styles/GlobalStyles";

export const HeroContainer = styled.section`
  background-color: ${Colors.gray};
  width: 100%;
  display: flex;
  align-items: center;

  ${breakpoint.deviceMax992} {
    flex-direction: column;
  }
`;

export const HeroText = styled.div`
  flex: 40;
  margin-left: 2rem;
`;

export const HeroHeading = styled.h3`
  color: ${Colors.lightGray};
  font-family: oswald;
  margin: 0.625rem 0;
`;

export const HeroTitle = styled.h1`
  font-family: OpenSans;

  span {
    font-size: 1.4rem;
  }
`;

export const HeroParagraph = styled.p`
  font-family: OpenSans;
  font-size: 1rem;
  text-align: left;
  margin-top: 10px;
  ${breakpoint.deviceMax992} {
    margin: 0.625rem 0 1.875rem;
    font-size: 1.75rem;
  }
`;

export const HeroImage = styled.div`
  width: 100%;
  flex: 60;
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  ${breakpoint.deviceMin768Max992} {
    margin-top: -6.25rem;
  }
`;
