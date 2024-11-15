// // React에서 Data-Fetching 괴정
// import { useState, useEffect } from "react";

// const Page = () => {
//   const [data, setState] = useState();
//   const fetchData = () => {
//     const response = fetch("...");
//     const data = await response.json();

//     setState(data);
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);
//   return <div>{data}</div>;
// };

// export default Page;
