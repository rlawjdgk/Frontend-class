import React from "react";
import styled from "styled-components";

// ContainerProps 인터페이스: Container의 color prop을 정의
interface ContainerProps {
  color: string;
}

// styled-components를 사용하여 버튼 스타일 정의
const Container = styled.button<ContainerProps>`
  border: none; // 버튼의 기본 테두리 제거
  border-radius: 4px; // 모서리를 둥글게 처리
  background: ${({ color }) => color}; // 버튼의 배경색을 color prop으로 설정
  color: #fff; // 버튼의 글자색을 흰색으로 설정
  padding: 8px 15px; // 버튼의 내부 여백 설정
  cursor: pointer; // 마우스를 올릴 때 포인터 모양으로 변경
  transition: opacity 0.3s; // 투명도 변화에 애니메이션 적용
  &:hover {
    background: ${({ color }) => color}; // hover 상태에서 배경색 유지
    opacity: 0.8; // hover 시 투명도를 0.8로 설정
  }
  &:active {
    // 버튼 클릭 시 스타일 (타이포 수정 필요)
    box-sizing: insat 5px 5px 10px rgb(0, 0, 0, 0.2); // 잘못된 속성명 (insat) 사용됨
  }
`;

// Props 인터페이스: Button 컴포넌트의 props를 정의
interface Props {
  label: string; // 버튼의 텍스트
  color?: string; // 버튼의 배경색 (기본값: #ff5722)
  onClick?: () => void; // 클릭 이벤트 핸들러
}

// Button 컴포넌트 정의
const Button = ({ label, color = "#ff5722", onClick }: Props) => {
  return (
    <Container color={color} onClick={onClick}>
      {label}
    </Container> // 버튼의 텍스트
  );
};

// Button 컴포넌트를 다른 파일에서 사용할 수 있도록 export
export default Button;
