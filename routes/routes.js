const express = require("express");
const router = express.Router();
const { fetchAllArticles, fetchArticleById, insertOrEditArticle, deleteArticleById } = require("../controller/controller");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.get("/all", fetchAllArticles);
router.get("/article/:id", fetchArticleById);
router.post("/article/insertOrEdit", upload.single('avatar'), insertOrEditArticle);
router.delete("/article/:id", deleteArticleById);


module.exports = router;