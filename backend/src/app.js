const express = require("express");
const app = express();

app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/content", require("./routes/content"));
app.use("/api/user", require("./routes/user"));

module.exports = app;