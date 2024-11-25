// const fakeUser = {
//   userName: "rlawjdgk",
//   loggedIn: false,
// };

// const videos = [
//   {
//     id: 1,
//     title: "First video",
//     createdAt: "2 minutes ago",
//     views: 59,
//     comment: 2,
//     rating: 5,
//   },
//   {
//     id: 2,
//     title: "Second video",
//     createdAt: "2 minutes ago",
//     views: 59,
//     comment: 2,
//     rating: 5,
//   },
//   {
//     id: 3,
//     title: "Third video",
//     createdAt: "2 minutes ago",
//     views: 59,
//     comment: 2,
//     rating: 5,
//   },
// ];
import Video from "../models/video";

import Video from "../models/video";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({}); // MongoDB에서 비디오 목록을 가져옵니다
    return res.render("home", { pageTitle: "Home", videos }); // 뷰에 비디오 목록 전달
  } catch (error) {
    return res.render("server-error", { error });
  }
  // videoModel
  //   .find()
  //   .then((videos) => {
  //     console.log("videos", videos);
  //     return res.render("home", { pageTitle: "Home", videos: [] });
  //   })
  //   .catch((err) => {
  //     console.log("errors", err);
  //   });
  // console.log(start);
};
export const search = (req, res) => res.send("search Videos");

// export const upload = (req, res) => res.send("Upload Videos");
export const watch = (req, res) => {
  const { id } = req.params;
  const video = video[id - 1];
  return res.render("watch", { pageTitle: `Watching ${video.title}`, video });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = video[id - 1];
  return res.render("edit", { pageTitle: `Editing ${video.title}`, video });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  // console.log(req.body);
  const { title } = req.body;
  video[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Videos" });
};

export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  const video = new Video({
    title,
    description,
    createdAt: DataTransfer.now(),
    hashtags: hashtags.split(",").map((word) => `#${word}`),
    meta: {
      views: 0,
      rating: 0,
    },
  });
  const dbVideo = await video.save();
  console.log(db);
  return res.redirect("/");
};

export const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send("Delete Video");
};
