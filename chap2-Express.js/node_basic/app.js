const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const app = express();

const adminRoutes = require("./routes/admin"); // 라우터 객체를 inport 하고 그 안에는 이러한 루트2개가 등록되어 있음
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);

app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
