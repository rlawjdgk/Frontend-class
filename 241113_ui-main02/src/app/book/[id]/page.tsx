import React from "react";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return <div>book/[id] page : {id}</div>;
};

export default Page;

//동적파라미터의 값이 2개 이상 / Catch All Segment : [...아이디값]
//동적파라미터가 없을 때에도 대응 : Optional Catch All Segment [[...아이디]]

//Optional Catch All Segment

// Catch All Segment 혹은 Optional Catch All Segment를 사용하면
// 동적파라미터의 값을 부담없이 사용할 수 있는 장점

// 동적 파라미터의 값이 존재 x
// 404 에러메세지
