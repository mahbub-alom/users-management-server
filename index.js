const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const users = [
  { id: 1, name: "milon", email: "milon@gmail.com" },
  { id: 2, name: "yusuf", email: "yusuf@gmail.com" },
  { id: 3, name: "tasu", email: "tasu@gmail.com" },
];

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("user server is coming");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser);
});

app.listen(port, () => {
  console.log(`user server running or port ${port}`);
});
