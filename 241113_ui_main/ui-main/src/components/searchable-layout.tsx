import { ReactNode, useState } from "react";
import { useRouter } from "next/router";
import style from "./search-layout.module.css";

const SearchableLayout = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState("");
  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const Router = useRouter();
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!search) return;
    Router.push(`/search?q=${search}`);
  };
  return (
    <div>
      <div>
        <form className={style.searchbar_container} onSubmit={onSubmit}>
          <input
            value={search}
            type="text"
            onChange={onChangeSearch}
            placeholder="검색어를 입력하세요"
          />
          <input type="submit" value="검색" />
        </form>
      </div>
      {children}
    </div>
  );
};

export default SearchableLayout;
