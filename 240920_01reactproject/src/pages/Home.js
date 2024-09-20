import React, { useState, useEffect, useContext } from "react";
import { DiaryStateContext } from "../App";
import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
import { getMonthRangeByDate } from "../utils";

const Home = () => {
  const data = useContext(DiaryStateContext);
  const [pivoteDate, setPivoteDate] = useState(new Date());
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (data.length >= 1) {
      const { beginTimeStamp, endTimeStamp } = getMonthRangeByDate(pivoteDate);
      setFilteredData(
        data.filter(
          (it) => beginTimeStamp <= it.date && it.date <= endTimeStamp
        )
      );
    } else {
      setFilteredData([]);
    }
  }, [data, pivoteDate]);

  const headerTitle = `${pivoteDate.getFullYear()}년 ${
    pivoteDate.getMonth() + 1
  }월`;

  const onIncreaseMonth = () => {
    setPivoteDate(
      new Date(pivoteDate.getFullYear(), pivoteDate.getMonth() + 1)
    );
  };

  const onDecreaseMonth = () => {
    setPivoteDate(
      new Date(pivoteDate.getFullYear(), pivoteDate.getMonth() - 1)
    );
  };

  return (
    <div>
      <Header
        leftChild={<Button text={"<"} onClick={onDecreaseMonth} />}
        title={headerTitle}
        rightChild={<Button text={">"} onClick={onIncreaseMonth} />}
      />
      <DiaryList data={filteredData} />
    </div>
  );
};

export default Home;
