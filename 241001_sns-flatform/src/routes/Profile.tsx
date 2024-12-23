import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { auth, storage, db } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { updateProfile } from "firebase/auth";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { IPost } from "../components/TimeLine";
import Post from "../components/Post";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const AvatarUpload = styled.label`
  width: 80px;
  height: 80px;
  background: #1d9bf0;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  svg {
    width: 50px;
  }
`;

const AvatarImg = styled.img`
  width: 100%;
`;

const AvatarInput = styled.input`
  display: none;
`;

const Name = styled.span`
  font-size: 22px;
`;

const Posts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const ChangeNameButton = styled.button`
  background: #3b3a3a;
  color: #fff;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  padding: 10px 16px;
`;

const NameInput = styled.input`
  background: #000;
  color: #fff;
  border: none;
  border-bottom: 1px solid #fff;
  padding: 8px;
  font-size: 18px;
  &:focus {
    outline {
      outline: none;
    }
  }
`;

const Profile = () => {
  const user = auth.currentUser;
  const [avatar, setAvatar] = useState(user?.photoURL || null || undefined);

  const [posts, setPosts] = useState<IPost[]>([]);
  const [name, setName] = useState(user?.displayName ?? "Anonymou");
  const [editMode, setEditMode] = useState(false);
  const onAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    ``;
    if (!user) return;
    if (files && files.length === 1) {
      const file = files[0];
      const locatinRef = ref(storage, `avatars/${user?.uid}`);
      const result = await uploadBytes(locatinRef, file);
      const avatarUrl = await getDownloadURL(result.ref);
      setAvatar(avatarUrl);
      await updateProfile(user, {
        photoURL: avatarUrl,
      });
    }
  };

  const onChangeNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onChangeNameBtn = async (e: any) => {
    if (!user) return;
    setEditMode((prev) => !prev);
    if (!editMode) return;
    try {
      await updateProfile(user, {
        displayName: name,
      });
    } catch {
      console.error(e);
    } finally {
      setEditMode(false);
    }
  };

  const fetchPosts = async () => {
    const postQuery = query(
      collection(db, "contents"),
      where("userId", "==", user?.uid),
      orderBy("createsAt", "desc"),
      limit(25)
    );
    const snapshot = await getDocs(postQuery);
    const posts = snapshot.docs.map((doc) => {
      const { createdAt, photo, video, post, userId, username } = doc.data();
      return {
        createdAt,
        photo,
        video,
        post,
        userId,
        username,
        id: doc.id,
      };
    });
    setPosts(posts);
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <Wrapper>
      <AvatarUpload htmlFor="avatar">
        {Boolean(avatar) ? (
          <AvatarImg src={avatar} />
        ) : (
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
          </svg>
        )}
      </AvatarUpload>
      <AvatarInput
        id="avatar"
        type="file"
        accept="image"
        onChange={onAvatarChange}
      />
      {editMode ? (
        <NameInput onChange={onChangeNameInput} value={name} />
      ) : (
        <Name>{user?.displayName ?? "Anonymou"}</Name>
      )}
      <ChangeNameButton onClick={onChangeNameBtn}>
        {editMode ? "save" : "New"}
      </ChangeNameButton>
      <Posts>
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </Posts>
    </Wrapper>
  );
};

export default Profile;
