import express from "express";
import cors from "cors";
const PORT = process.env.PORT || 8000;
const app = express();

//CROSS ORIGIN RESOURCE SHARING
app.use(cors());

app.get("/", (req, res) => {
  console.log("GET / was requested");
  res.send(`<h1>hi.</h1>`);
});

app.get("/form", (req, res) => {
  console.log("GET /form was requested");
  res.send(`<h1>hi.</h1>`);
});

app.listen(PORT, () =>
  console.log(`form server listening on http://localhost:${PORT}`)
);
