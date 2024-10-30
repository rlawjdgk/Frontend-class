import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";

// 테마 정의: 색상 값은 문자열로 감싸야 합니다.
const darkTheme = {
  background: "#000",
  color: "#fff", // 문자열로 감싸기
};

const lightTheme = {
  background: "#fff",
  color: "#ccc", // 문자열로 감싸기
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={darkTheme}>
    <App />
  </ThemeProvider>
);
