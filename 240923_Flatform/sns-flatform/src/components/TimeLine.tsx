import { collection, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../firebase";
import { getDocs } from "firebase/firestore";
import Post from "./Post";

export interface IPost {
  id: string;
  createdAt: number;
  photo?: string;
  post: string;
  userId: string;
  username: string;
}

const Wrapper = styled.div``;

const TimeLine = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const fetchPosts = async () => {
    const postQuery = query(
      collection(db, "contents"),
      orderBy("createAt", "desc")
    );
    const snapshot = await getDocs(postQuery);
    const posts = snapshot.docs.map((doc) => {
      const { createdAt, photo, post, userId, username } = doc.data();
      return {
        id: doc.id,
        createdAt,
        photo,
        post,
        userId,
        username,
      };
    });
    setPosts(posts);
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <Wrapper>
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </Wrapper>
  );
};

export default TimeLine;
