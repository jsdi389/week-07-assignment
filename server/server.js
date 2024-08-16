import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });

app.get("/", function (request, response) {
  response.json("You are looking at my root route. How roude.");
});

app.get("/books", async function (request, response) {
  const data = await db.query(`SELECT * FROM books`);
  response.json(data.rows);
});

app.post("/books", async function (request, response) {
  const title = request.body.title;
  const author = request.body.author;
  const genre = request.body.genre;
  const price = request.body.price;
  //add book to db
  await db.query(
    `INSERT INTO books (title, author, genre, price) VALUES($1, $2, $3, $4)`,
    [title, author, genre, price]
  );
  response.json("books post endoiunt");
});

app.listen(8080, () => console.log("Server is running on port 8080"));
