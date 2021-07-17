import Timeline from "components/FinancingTimeline";
import React from "react";
import { FinancingHeading, FinancingInfo, FinancingWrapper } from "./styles";

const Financing = () => {
  return (
    <FinancingWrapper>
      <Timeline />
      <FinancingInfo>
        <FinancingHeading>Financiamiento</FinancingHeading>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nemo
          quidem, nisi ipsum doloribus odit quisquam voluptas, laborum facere id
          labore dolor eligendi illo sint, assumenda veniam voluptatibus ea
          facilis!
        </p>
      </FinancingInfo>
    </FinancingWrapper>
  );
};

export default Financing;
