import styled from "styled-components";
import { Colors, breakpoint } from "styles/GlobalStyles";

export const StoriesContainer = styled.div`
  background-color: ${Colors.white};
  display: flex;
  flex-direction: column;
`;

export const StoriesInfo = styled.section`
  margin: 2rem;
`;
export const StoriesHeading = styled.h3`
  color: ${Colors.lightGray};
`;

export const StoriesMasonry = styled.section`
  padding: 1rem;
  column-count: 3;
  margin-bottom: 1rem;

  img {
    width: 100%;
    object-fit: cover;
  }

  ${breakpoint.deviceMax992} {
    column-count: 2;
  }
`;
