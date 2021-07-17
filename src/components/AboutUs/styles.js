import styled from "styled-components";
import { Colors, breakpoint } from "styles/GlobalStyles";

export const AboutContainer = styled.div`
  background-color: ${Colors.white};
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const AboutInfo = styled.section`
  grid-column: 2 / 3;
  display: flex;
  justify-content: center;
  align-items: center;

  ${breakpoint.deviceMin768Max992} {
    grid-column: 1 / span 2;
    grid-row: 1;
  }

  ${breakpoint.deviceMax768} {
    grid-column: 1 / span 2;
    grid-row: 1;
  }
`;

export const AboutHeader = styled.header`
  max-width: 400px;
  margin: 2rem;
  width: 100%;
`;

export const AboutHeading = styled.h3`
  color: ${Colors.lightGray};
  margin: 0.625rem 0;
`;

export const AboutImages = styled.section`
  grid-column: 1 / 2;
  display: grid;
  display: flex;
  grid-template-columns: 1fr 1fr;
  margin: 2rem 0 0 2rem;

  ${breakpoint.deviceMin768Max992} {
    grid-column: 1 / -1;
    justify-content: center;
    align-items: center;
    grid-row: 2;
  }
  ${breakpoint.deviceMax768} {
    grid-column: 1 / -1;
    justify-content: center;
    align-items: center;
    grid-row: 2;
  }
`;

export const GroupOne = styled.div`
  grid-column: 1 / span 1;
`;

export const ImageContainer = styled.div`
  max-width: 300px;
  width: 100%;
  height: auto;
  padding: 5px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const GroupTwo = styled.div`
  grid-column: 2 / span 1;
`;
