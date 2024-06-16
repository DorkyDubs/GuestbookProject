import express from "express";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config();

import pg from "pg";

const dbConnectionString = process.env.DATABASE_URL;

export const db = new pg.Pool({
  connectionString: dbConnectionString,
});

const app = express();
app.use(express.json());

app.use(cors());

const PORT = 5050;
app.listen(PORT, () => {
  console.log(`Server is running in port ${PORT}`);
});

app.get("/", (request, response) => {
  response.json({ message: "This is the root , I am route!" });
});

//test connection to DB
app.get("/pets", async (req, res) => {
  const result = await db.query(`
    SELECT * FROM pets
    `);
  console.log(result);
  //parse the result into json and wrangle the data from the result object
  res.json(result.rows);
});

// db.query(`CREATE TABLE IF NOT EXISTS userdata (
//     id SERIAL PRIMARY KEY ,
//     username VARCHAR(255),
//     city VARCHAR(255),
//     fav_colour VARCHAR(255),
//     fav_number NUMERIC,
//     message TEXT

// )`); //send to seed?

app.post(`/userdata`, async (req, res) => {
  //match form data at end point

  // switch (Object.length(Object.keys(req.body)))  //prep for like and delete functions

  const { username, city, fav_colour, fav_number, message } = req.body;
  // db.query('UPDATE userdata WHERE id = ${item.id} SET likes = ${item.likes + 1}'); same ^^
  try {
    await db.query(
      `INSERT into userdata (username, city, fav_colour, fav_number, message) Values ($1, $2, $3, $4, $5, $6)`,
      [username, city, fav_colour, fav_number, message]
    );
    // db.query('UPDATE userdata WHERE id = ${item.id} SET likes = ${item.likes + 1}');
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Nope", error);
    res.status(500);
  }
});
