// 전체 화면을 차지하며 중앙 정렬된 Wrapper 컴포넌트
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.bgColor}; // 배경색
  color: ${({ theme }) => theme.textColor}; // 텍스트 색상
`;

// 테두리가 있는 박스 컴포넌트
const ItemBox = styled.div`
  border: 2px solid ${({ theme }) => theme.accentColor}; // 강조 색상으로 테두리
  border-radius: 8px; // 둥근 모서리
  padding: 10px 16px; // 내부 여백
`;

// Home 컴포넌트: Wrapper 안에 ItemBox를 렌더링
const Home = () => {
  return (
    <Wrapper>
      <ItemBox>Home</ItemBox> {/* "Home" 텍스트를 표시 */}
    </Wrapper>
  );
};
