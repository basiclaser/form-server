import express, { request } from "express";
import cors from "cors";
const PORT = process.env.PORT || 8000;
const app = express();

//CROSS ORIGIN RESOURCE SHARING
app.use(cors());
app.use(express.static("public"));
// STATIC "PUBLIC" FOLDER DEALS WITH REQUESTS LIKE THIS
// http://localhost:8000/styles.css
// http://localhost:8000/companyLogo.png
// http://localhost:8000/index.html
// http://localhost:8000/main.js
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/login", (req, res) => {
  //get = query
  console.log(req.query);
  res.send("please check your email to confirm your account");
});

app.post("/login", (req, res) => {
  //post = body
  console.log(req.body);
  res.send("please check your email to confirm your account");
});

app.listen(PORT, () =>
  console.log(`form server listening on http://localhost:${PORT}`)
);
