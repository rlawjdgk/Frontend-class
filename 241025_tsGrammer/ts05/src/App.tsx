import { useContext, useState } from "react";
import styled from "styled-components";
import DataWrapper from "../src/components/DataWrapper";
import TodoInput from "../src/components/TextInput
import Button from "./components/Button";
import ShowInputButton from "./components/ShowInputButton";
import InputContainer from "./components/InputContainer";
import TodoListContextProvider, {
  todoListContext,
} from "../src/contexts/ToDoContext";

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #eee;
`;

const mockTodo = [
  "Typescript 복습하기",
  "Next.js 예습하기",
  "Node.js 공부하기",
];

function App() {
  const [showTodoInput, setShowTodoInput] = useState(false);
  return (
    <Container>
      <TodoListContextProvider>
        <DataWrapper />
        <InputContainer />
      </TodoListContextProvider>
    </Container>
  );
}

export default App;
