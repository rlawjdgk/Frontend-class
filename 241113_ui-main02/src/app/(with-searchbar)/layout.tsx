import React, { ReactNode } from "react";
import Searchbar from "./searchbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Searchbar />
      {children}
    </div>
  );
};

export default Layout;

//Route Group
//경로상에서는 아무런 영향을 미치지 않습니다.
//하지만 공통의 layout을 적용시키고자 하는 컴포넌트 페이지들을 그룹핑
