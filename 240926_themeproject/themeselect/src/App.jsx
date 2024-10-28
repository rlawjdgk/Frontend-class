import { useState } from "react";
import { ThemeProvider, styled, createGlobalStyle } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import Home from "./Home";

// 전역 스타일을 설정하는 컴포넌트
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0; // 기본 여백 제거
    padding: 0; // 기본 패딩 제거
    box-sizing: border-box; // 박스 모델 설정
  }
`;

// 다크모드 토글 버튼 스타일
const Button = styled.button`
  position: absolute; // 위치를 절대적으로 설정
  top: 10px; // 상단에서 10px
  right: 10px; // 우측에서 10px
  padding: 10px 20px; // 내부 여백
  border-radius: 8px; // 둥근 모서리
  cursor: pointer; // 마우스 커서가 포인터로 변경
`;

function App() {
  const [isDark, setIsDark] = useState(false); // 다크모드 상태 관리
  const toggleDark = () => {
    setIsDark((current) => !current); // 현재 상태를 반전
  };

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        {" "}
        {/* 테마 제공 */}
        <GlobalStyle /> {/* 전역 스타일 적용 */}
        <Button onClick={toggleDark}>
          {isDark ? "라이트모드" : "다크모드"} {/* 버튼 텍스트 변경 */}
        </Button>
        <Home /> {/* Home 컴포넌트 렌더링 */}
      </ThemeProvider>
    </>
  );
}

export default App; // App 컴포넌트 내보내기
