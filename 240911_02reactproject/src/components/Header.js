import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #e2e2e2;
`;

const LeftChild = styled.div``;

const Title = styled.div`
  font-size: 25px;
`;

const RightChild = styled.div``;

const Header = ({ title, leftChild, rightChild }) => {
  return (
    <Wrapper>
      <div>{leftChild}</div>
      <div>{title}</div>
      <div>{rightChild}</div>
    </Wrapper>
  );
};

export default Header;
