import { db } from "./server.js";

//a sql in the seed file --> we need to write our sql in backticks and inside the query method
//IF NOT EXISTS adds a condition to the CREATE TABLE query
db.query(`CREATE TABLE IF NOT EXISTS userdata ( 
    id SERIAL PRIMARY KEY ,
    username VARCHAR(255),
    city VARCHAR(255),
    fav_colour VARCHAR(255),
    fav_number NUMERIC,
    message TEXT,
    likes NUMERIC)`);
