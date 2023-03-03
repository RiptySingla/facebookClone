const express = require("express");
const app = express();
const port = 3000;
const router = require("./routes/index");

app.use("/", router);
app.set("view engine", "ejs");
app.set("views", "views");
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(port, () => {
  console.log(`Facebook Clone app listening on port ${port}`);
});
