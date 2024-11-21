// import express from "express";
// import morgan from "morgan";

// const PORT = 4000;

// const app = express();
// const morganMiddleWare = morgan("dev");

// const middleWare = (req, res, next) => {
//   console.log(`${req.method} ${req.url}`);
//   next();
// };

// const privateMiddleWare = (req, res, next) => {
//   const url = req.url;
//   if (url === "/protected") {
//     return res.send("<h1>Not Allowed</h1>");
//   }
//   console.log("Allowed, You may contiune");
//   next();
// };

// // const handleHome = (req, res, next) => {
// //   return res.send("<h1>I still love you</h1>");
// // };
// // Final midleware 함수
// const handleHome = (req, res) => {
//   return res.end();
// };

// const handleProtected = (req, res) => {
//   return res.send("Welcome to the Private Lounge");
// };

// app.use(morganMiddleWare);
// // app.use(privateMiddleWare);
// app.get("/", handleHome);
// // app.use(middleWare); // console에 안뜸 순서가 중요
// // Finalware 함수보다 더 먼저 써야함
// app.get("/protected", handleProtected);

// const handleListening = () =>
//   console.log(`⏳Server Listening on Port http://localhost:${PORT}⏳`);

// app.listen(5000, handleListening);
