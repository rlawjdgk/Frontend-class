// 외부 API 데이터를 찾아오게 되었을 떄, 타입을 지정

// import { error } from "console";

const LoadingTask = {
  state: "LOADING",
};

const FailedTask = {
  state: "FAILED",
  error: {
    message: "오류발생...",
  },
};

const success = {
  state: "SUCCESS",
  response: {
    data: "movie...",
  },
};

type AsyncTask = {
  state: "LOADING" | "FAILED" | "SUCCESS";
  error?: {
    message: string;
  };
  response?: {
    data: string;
  };
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

const processResult = (task: AsyncTask) => {
  switch (task.state) {
    case "LOADING": {
      console.log("로딩 중...");
      break;
    }
    case "FAILED": {
      console.log(`에러발생: ${task.error?.message}`);
      break;
    }
    case "SUCCESS": {
      console.log(`성공: ${task.response?.data}`);
      break;
    }
  }
};
