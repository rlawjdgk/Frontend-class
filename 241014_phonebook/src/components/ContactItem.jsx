import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 20px 0;
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Name = styled.div``;

const Number = styled.div``;

const ContactItem = ({ item }) => {
  console.log(item);
  return (
    <Wrapper>
      <Row>
        <Col lg={1}>
          <Img
            src="https://i.pinimg.com/736x/09/21/fc/0921fc87aa989330b8d403014bf4f340.jpg"
            alt="user"
          />
        </Col>
        <Col lg={11}>
          <Name>{item.name}</Name>
          <Number>{item.phoneNumber}</Number>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default ContactItem;
