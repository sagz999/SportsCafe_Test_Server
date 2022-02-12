
module.exports = {
  fetchAllArticles: (req, res) => {
    res.send("Fetched all articles");
  },

  fetchArticleById: (req, res) => {
    const id = req.params.id;
    res.send("fetch by" + id);
  },

  insertOrEditArticle: (req, res) => {
    // res.send("Edit or delete");
    // console.log("Data", req.body);
    // console.log("File", req.file);
  },

  deleteArticleById: (req, res) => {
    const id = req.params.id;
    res.send("delete by" + id);
  },
};
