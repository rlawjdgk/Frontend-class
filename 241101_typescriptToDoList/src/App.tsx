import { createGlobalStyle, styled } from "styled-components";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import { toDoState } from "./atom";
import Board from "./components/Board";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul, li {
    list-style: none;
  }
  
  a{
    text-decoration: none;
    color: inherit;
  }

  body {
    background: ${(props) => props.theme.bgColor};
    color: #000;
  }
`;

const Wrapper = styled.main`
  width: 1200px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const Boards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const App = () => {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = (info: DropResult) => {
    console.log(info);
    const { destination, source, draggableId } = info;
    if (!destination) return; // 드래그가 취소된 경우

    if (destination.droppableId === source.droppableId) {
      setToDos((oldToDos) => {
        const boardCopy = [...oldToDos[source.droppableId]];
        const taskObj = boardCopy[source.index];
        boardCopy.splice(source.index, 1);
        boardCopy.splice(destination.index, 0, taskObj);
        return {
          ...oldToDos,
          [source.droppableId]: boardCopy,
        };
      });
    }
    if (destination.droppableId !== source.droppableId) {
      setToDos((oldToDos) => {
        const sourceBoard = [...oldToDos[source.droppableId]];
        const taskObj = sourceBoard[source.index];
        const destinationBoard = [...oldToDos[destination.droppableId]];
        sourceBoard.splice(source.index, 1);
        destinationBoard.splice(destination.index, 0, taskObj);
        return {
          ...oldToDos,
          [source.droppableId]: sourceBoard,
          [destination.droppableId]: destinationBoard,
        };
      });
    }

    // if (destination.droppableId === source.droppableId) {
    //   // 같은 보드 내에서 드래그 이동
    //   setToDos((oldToDos) => {
    //     const boardCopy = [...oldToDos[source.droppableId]];
    //     boardCopy.splice(source.index, 1); // 원래 위치에서 삭제
    //     boardCopy.splice(destination.index, 0, draggableId); // 새로운 위치에 추가
    //     return {
    //       ...oldToDos,
    //       [source.droppableId]: boardCopy,
    //     };
    //   });
    // }
    // if (destination?.droppableId !== source.droppableId) {
    //   setToDos((oldToDos) => {
    //     const sourseBoard = [...oldToDos[source.droppableId]];
    //     const destinationBoard = [...oldToDos[destination.droppableId]];
    //     sourseBoard.splice(source.index, 1);
    //     destinationBoard.splice(destination.index, 0, draggableId);
    //     return {
    //       ...oldToDos,
    //       [source.droppableId]: sourseBoard,
    //       [destination?.droppableId]: destinationBoard,
    //     };
    //   });
    // }
  };

  return (
    <>
      <GlobalStyle />
      <DragDropContext onDragEnd={onDragEnd}>
        <Wrapper>
          <Boards>
            {Object.keys(toDos).map((boardId) => (
              <Board key={boardId} toDos={toDos[boardId]} boardId={boardId} />
            ))}
          </Boards>
        </Wrapper>
      </DragDropContext>
    </>
  );
};

export default App;