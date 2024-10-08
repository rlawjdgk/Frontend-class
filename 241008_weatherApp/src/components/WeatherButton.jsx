import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const WeatherButton = ({ cities, setCity, handleCityChange }) => {
  console.log(cities);
  return (
    <ButtonGroup>
      <Button variant="outline-info" onClick={() => setCity("")}>
        Current Location
      </Button>
      {/* <Button variant="outline-info">Paris</Button>
      <Button variant="outline-info">NewYork</Button>
      <Button variant="outline-info">Tokyo</Button> */}
      {cities.map((it, index) => (
        <Button
          onClick={() => {
            handleCityChange(it);
          }}
          variant="outline-info"
          key={index}
        >
          {it}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default WeatherButton;
