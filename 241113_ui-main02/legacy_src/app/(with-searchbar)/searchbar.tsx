"use client";
// Next.js에서 사용되는 지시문으로, 특정 파일이 클라이언트 컴포넌트임을 명시적으로 지정합니다. 이는 Next.js의 App Router에서 클라이언트와 서버 컴포넌트의 동작을 구분하는 데 사용됩니다.
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // App Router의 useRouter

const Searchbar = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search?q=${search}`); // 라우팅 이동
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={search} type="text" onChange={onChangeSearch} />
        <input type="submit" value="검색" />
      </form>
    </div>
  );
};

export default Searchbar;
