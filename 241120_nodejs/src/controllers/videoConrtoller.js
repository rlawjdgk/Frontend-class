export const trending = (req, res) =>
  res.render("Home", { pageTitle: "Home", home: "Home" });
export const search = (req, res) => res.send("Search Videos");
export const upload = (req, res) => res.send("Upload Videos");
export const see = (req, res) => {
  return res.render("Watch", { pageTitle: "Watch" });
};
export const edit = (req, res) => {
  console.log(
    `<!DOCTYPE HTML><head><title>node.js</title></head><body><h1>Edit Video! : ${req.params.id}!</h1></body>`
  );
  return res.send("Edit Videos");
};
export const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send("Delete Videos");
};
