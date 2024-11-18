import React, { ReactNode, useEffect, useState } from "react";
import SearchableLayout from "@/components/searchable-layout";
import BookItem from "@/components/book-item";
import fetchBooks from "@/lib/fetch-books";
import { BookData } from "@/types";
import { useRouter } from "next/router";

const Search = () => {
  const router = useRouter();
  const [books, setBooks] = useState<BookData[]>();
  const q = router.query.q;
  const fetchSearchResult = async () => {
    const data = await fetchBooks(q as string);
    setBooks(data);
  };
  useEffect(() => {
    if (q) {
      fetchSearchResult();
    }
  }, [q]);

  return (
    <div>
      {books?.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
};
Search.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
export default Search;
