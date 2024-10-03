import React from "react";
import styled from "styled-components";
import { IPost } from "./TimeLine";

const Post = ({ username, post, photo }: IPost) => {
  return (
    <div>
      <div>
        <div>{username}</div>
        <div>{post}</div>
      </div>
      <div>
        <img src={photo} />
      </div>
    </div>
  );
};

export default Post;
