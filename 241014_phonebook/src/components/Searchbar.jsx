import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

const Searchbar = () => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();

  const SearchByName = (e) => {
    e.preventDefault();
    dispatch({ type: "SEARCH", payload: { keyword } });
  };
  return (
    <Form onSubmit={SearchByName}>
      <Row>
        <Col lg={11}>
          <Form.Control
            type="text"
            placeholder="Search Name"
            onChange={(e) => setKeyword(e.target.value)}
          />
        </Col>
        <Col lg={1}>
          <Button variant="dark">Search</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Searchbar;
