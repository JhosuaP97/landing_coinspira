import styled from "styled-components";
import { breakpoint, Colors } from "styles/GlobalStyles";

export const BootcampsWrapper = styled.div`
  padding: 4.6875rem 0;
  background-color: ${Colors.white};
  display: flex;
  align-items: center;
  justify-content: space-around;
  ${breakpoint.deviceMin768Max992} {
    gap: 2rem;
    flex-direction: column;
  }

  ${breakpoint.deviceMax768} {
    gap: 2rem;
    flex-direction: column;
  }
`;

export const BootcampInfo = styled.section`
  width: 50%;
  padding: 0 2rem;
  h3 {
    color: ${Colors.lightGray};
  }

  ${breakpoint.deviceMax768} {
    width: 100%;
  }
`;

export const BootcampHeading = styled.h3`
  color: ${Colors.lightGray};
  margin: 0.625rem 0;
`;

export const Courses = styled.div`
  display: flex;
  padding: 0 2rem;
  gap: 1rem;

  ${breakpoint.deviceMax768} {
    flex-direction: column;
  }
`;
