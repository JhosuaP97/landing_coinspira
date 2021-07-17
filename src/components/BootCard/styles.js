import styled from "styled-components";
import { Colors } from "styles/GlobalStyles";

export const CardWrapper = styled.div`
  max-width: 280px;
  background-color: ${Colors.white};
  border: 1px solid #dcdcdc;
  border-radius: 1rem;
  .o_card_image {
    width: 100%;
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
  }
  .o_card_body {
    display: flex;
    flex-direction: column;
    padding: 20px 10px 50px 10px;
    text-align: justify;
  }
`;
