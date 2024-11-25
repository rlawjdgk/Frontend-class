import app from "./server"; // server.js에서 app을 import

const PORT = 4000;

const handleListening = () =>
  console.log(`⏳Server Listening on Port http://localhost:${PORT}⏳`);

// 서버가 정상적으로 실행되면 handleListening 콜백을 실행
app.listen(PORT, handleListening); // app.listen에 handleListening 전달
