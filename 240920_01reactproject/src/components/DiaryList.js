import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import DiaryItem from "../components/DiaryItem";
import Button from "./Button";

const Wrapper = styled.div``;

const DiaryContents = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  gap: 10px;
`;

const LeftContent = styled.div`
  flex: 1;
`;
const RightContent = styled.div`
  flex: 3;
  & button {
    width: 100%;
  }
`;

const Select = styled.select`
  background: #ececec;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 28px;
  font-family: "Nanum Pen Script", cursive;
  cursor: pointer;
`;

const ListContents = styled.div``;

const sortOptionList = [
  { value: "lastest", name: "최신순" },
  { value: "oldest", name: "오래된순" },
];

const DiaryList = ({ data }) => {
  const [sortType, setSortType] = useState("latest");
  const [sortedData, setSortedData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const compare = (a, b) => {
      if (sortType === "latest") {
        return Number(b.date) - Number(a.date);
      } else {
        return Number(a.date) - Number(b.date);
      }
    };
    const copyList = JSON.parse(JSON.stringify(data));
    data.sort(compare);
    setSortedData(copyList);
  }, [data, sortType]);
  const onChangeSortType = (e) => {
    console.log(e);
    setSortType(e.target.value);
  };
  const onClickNew = () => {
    navigate("/new");
  };
  return (
    <Wrapper>
      <DiaryContents>
        <LeftContent>
          <Select value={sortType} onChange={onChangeSortType}>
            {sortOptionList.map((it, idx) => (
              <option key={idx} value={it.value}>
                {it.name}
              </option>
            ))}
          </Select>
        </LeftContent>
        <RightContent>
          <Button type={"positive"} text={"새 일기쓰기"} onClick={onClickNew} />
        </RightContent>
      </DiaryContents>
      <ListContents>
        {sortedData.map((it) => (
          <DiaryItem key={it.id} {...it} />
        ))}
      </ListContents>
    </Wrapper>
  );
};

export default DiaryList;
