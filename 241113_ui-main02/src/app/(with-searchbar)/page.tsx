import styles from "../(with-searchbar)/page.module.css";
import BookItem from "@/components/book.item";
import books from "@/mock/book.json";
import { BookData } from "@/types";

const RecoBooks = async () => {
  const response = await fetch("http://localhost:12345/book/random");
  if (!response.ok) {
    return <div>오류가 발생했습니다...</div>;
  }
  const RecoBooks: BookData[] = await response.json();
  return (
    <div>
      {allBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
};

const AllBooks = async () => {
  const response = await fetch("http://localhost:12345/book");
  if (!response.ok) {
    return <div>오류가 발생했습니다...</div>;
  }
  const allBooks: BookData[] = await response.json();
  return (
    <div>
      {allBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
};

const Home = async () => {
  const response = await fetch("http://localhost:12345/book");
  const allBooks = await response.json();
  console.log(allBooks);
  return (
    <div className={styles.page}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        <AllBooks />
      </section>
    </div>
  );
};

export default Home;
