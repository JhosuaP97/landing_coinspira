import BootCard from "components/BootCard";
import React from "react";
import {
  BootcampHeading,
  BootcampInfo,
  BootcampsWrapper,
  Courses,
} from "./styles";

const Bootcamps = () => {
  return (
    <BootcampsWrapper>
      <BootcampInfo>
        <BootcampHeading>Bootcamps</BootcampHeading>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nemo
          quidem, nisi ipsum doloribus odit quisquam voluptas, laborum facere id
          labore dolor eligendi illo sint, assumenda veniam voluptatibus ea
          facilis!
        </p>
      </BootcampInfo>
      <Courses>
        <BootCard
          img="http://javadesde0.com/wp-content/uploads/logo-react.jpg"
          title="ReactJS"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non vehicula quam."
        />
        <BootCard
          img="http://javadesde0.com/wp-content/uploads/logo-react.jpg"
          title="Vue"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non vehicula quam."
        />
        <BootCard
          img="http://javadesde0.com/wp-content/uploads/logo-react.jpg"
          title="Angular"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non vehicula quam."
        />
      </Courses>
    </BootcampsWrapper>
  );
};

export default Bootcamps;
