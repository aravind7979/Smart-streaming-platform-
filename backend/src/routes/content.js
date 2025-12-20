const router = require("express").Router();
const {
  getAllContent,
  searchContent
} = require("../controllers/contentController");

router.get("/", getAllContent);
router.get("/search", searchContent);

module.exports = router;