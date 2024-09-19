import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useDiary from "../hocks/useDiary";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import { getFormattedDate } from "../utils";

const Diary = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = useDiary(id);
  if (!data) {
    return <div>일기를 불러오고 있습니다...</div>;
  } else {
    const goBack = () => {
      navigate(-1);
    };

    const goEdit = () => {
      navigate(`/edit/${id}`);
    };

    const { date, emotionId, content } = data;
    const title = `${getFormattedDate(new Date(parseInt(date)))} 기록`;
    return (
      <div>
        <Header
          leftChild={<Button text={"< 뒤로가기"} onClick={goBack} />}
          title={title}
          rightChild={<Button text={"수정하기"} onClick={goEdit} />}
        />
        <Viewer />
        <div>{id}번 일기</div>
        <div>Diary 페이지 입니다.</div>
      </div>
    );
  }
};

export default Diary;
