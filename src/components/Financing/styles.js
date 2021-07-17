import styled from "styled-components";
import { breakpoint, Colors } from "styles/GlobalStyles";

export const FinancingWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 5rem 0 0 0;
  background-color: ${Colors.white};
  ${breakpoint.deviceMax992} {
    flex-direction: column-reverse;
    align-items: center;
    gap: 3.125rem;
  }
`;

export const FinancingInfo = styled.section`
  width: 50%;
  padding: 0 2rem;
  h3 {
    color: ${Colors.lightGray};
  }

  ${breakpoint.deviceMax992} {
    width: 100%;
  }
`;

export const FinancingHeading = styled.h3`
  color: ${Colors.lightGray};
  margin: 0 0 0.625rem 0;
`;
