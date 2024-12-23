import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 4px;
`;

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const id = useSelector((state) => state.id);
  const pw = useSelector((state) => state.pw);

  const increase = () => {
    dispatch({ type: "INCREMENT", payload: { num: 5 } });
  };

  const decrease = () => {
    dispatch({ type: "DECREASE", payload: { number: 5 } });
  };

  const login = () => {
    dispatch({ type: "LOGIN", payload: { id: "David", password: "1234" } });
  };

  return (
    <Wrapper>
      <h1>{count}</h1>
      <ButtonGroup>
        <button onClick={increase}>증가</button>
        <button onClick={decrease}>감소</button>
      </ButtonGroup>
      {loginState ? <h2>로그인 ok</h2> : ""}
      <button onClick={login}>
        {loginState ? `${id}님, 환영합니다!` : "로그인"}
      </button>
    </Wrapper>
  );
};
export default App;
