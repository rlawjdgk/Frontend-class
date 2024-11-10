import styled from "styled-components";
import { useRecoilValue, useRecoilState } from "recoil";
import CreateToDo from "./CreateToDo";
import { toDoSelector, categoryState } from "../atom";
import ToDo from "./ToDo";
import React from "react";
import { Categories } from "../atom";

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 50px;
`;

const Title = styled.h1`
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #000;
`;

const ToDoList = () => {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };

  return (
    <Container>
      <Title>ToDo List</Title>
      <select value={category} onChange={onChange}>
        <option value={Categories.TODO}>TODO</option>
        <option value={Categories.DOING}>DOING</option>
        <option value={Categories.DONE}>DONE</option>
      </select>
      <CreateToDo />
      <ul>
        {toDos.map((toDoItem) => (
          <ToDo key={toDoItem.id} {...toDoItem} />
        ))}
      </ul>
    </Container>
  );
};

export default ToDoList;
