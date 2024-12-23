import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Box from "./components/Box";

const GlobalStyles = createGlobalStyle`
  ${reset}

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    ul, li{
      list-style: none;
    }

    a{
      text-decoration: none;
      color: inherit;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100%;
  height: 100vh;
`;

const BoxGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Button = styled.button`
  display: inline-block;
  width: 80px;
  padding: 10px;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

const choice = {
  rock: {
    name: "rock",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFpQ73eMssVWbrJFhS1uFkIIvQ-cR9TXTRIVmMXZsXDqB5n-1ytHZmvRRVwY6a_NAQdhE&usqp=CAU",
  },
  scissors: {
    name: "scissors",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRql202lEB0T2YrX7rFly3RwBE2sn1q89UyFg&s",
  },
  paper: {
    name: "paper",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuXW8UgLnh5BGDf6ZcV32KHs5QF7CLMxau2w&sg",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgeMent(choice[userChoice], computerChoice));
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  const judgeMent = (user, computer) => {
    if (user.name === computer.name) {
      return "tie";
    } else if (user.name === "rock") {
      return computer.name === "scissors" ? "win" : "lose";
    } else if (user.name === "scissors") {
      return computer.name === "paper" ? "win" : "lose";
    } else if (user.name === "paper") {
      return computer.name === "rock" ? "win" : "lose";
    }
  };

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <BoxGroup>
          <Box title={"You"} item={userSelect} result={result} />
          <Box title={"Computer"} item={computerSelect} result={result} />
        </BoxGroup>
        <ButtonGroup>
          <Button onClick={() => play("scissors")}>가위</Button>
          <Button onClick={() => play("rock")}>바위</Button>
          <Button onClick={() => play("paper")}>보</Button>
        </ButtonGroup>
      </Wrapper>
    </>
  );
}
export default App;
