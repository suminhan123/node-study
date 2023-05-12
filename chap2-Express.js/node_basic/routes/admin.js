const express = require("express");
const path = require("path");
const rootDir = require("../util/path");

const router = express.Router();

// /admin/add-product
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// /admin/product
router.post("/add-product", (req, res, next) => {
  // 들어오는 데이터를 출력하기
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
