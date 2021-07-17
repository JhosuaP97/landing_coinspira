import styled from "styled-components";
import { breakpoint, Colors } from "styles/GlobalStyles";

export const TimelineWrapper = styled.div`
  padding: 0 1rem;
  width: 30%;

  p {
    font-size: 1em;
    line-height: 1.75em;
    border-top: 3px solid;
    border-image: ${Colors.lightGray};
    border-image-slice: 1;
    margin: 0;
    padding: 40px;
    counter-increment: section;
    position: relative;
    color: #34435e;

    &:before {
      display: flex;
      align-items: center;
      justify-content: center;
      content: counter(section);
      position: absolute;
      border-radius: 50%;
      padding: 10px;
      height: 2.5rem;
      width: 2.5rem;
      background-color: #34435e;
      text-align: center;
      line-height: 1.25em;
      color: #ffffff;
      font-size: 1em;
    }

    &:nth-child(odd) {
      border-right: 3px solid;
      padding-left: 0;
    }

    &:nth-child(odd):before {
      left: 100%;
      margin-left: -20px;
    }

    &:nth-child(even) {
      border-left: 3px solid;
      padding-right: 0;
    }

    &:nth-child(even):before {
      right: 100%;
      margin-right: -20px;
    }

    &:first-child {
      border-top: 0;
      border-top-right-radius: 0;
      border-top-left-radius: 0;
    }

    &:last-child {
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    }
  }

  ${breakpoint.deviceMax992} {
    width: 100%;
  }
`;
