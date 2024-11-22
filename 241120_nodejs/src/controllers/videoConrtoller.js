// const fakeUser = {
//   userName: "rlawjdgk",
//   loggedIn: false,
// };

const videos = [
  {
    id: 1,
    title: "First video",
    createdAt: "2 minutes ago",
    views: 59,
    comment: 2,
    rating: 5,
  },
  {
    id: 2,
    title: "Second video",
    createdAt: "2 minutes ago",
    views: 59,
    comment: 2,
    rating: 5,
  },
  {
    id: 3,
    title: "Third video",
    createdAt: "2 minutes ago",
    views: 59,
    comment: 2,
    rating: 5,
  },
];

export const trending = (req, res) => {
  res.render("home", { pageTitle: "Home", videos });
};
export const search = (req, res) => res.send("Search Videos");
export const upload = (req, res) => res.send("Upload Videos");
export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("Watch", { pageTitle: `Watching ${video.title}`, video });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("edit", { pageTitle: `Editing ${video.title}`, video });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};

export const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send("Delete Videos");
};
