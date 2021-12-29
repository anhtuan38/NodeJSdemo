import express from "express";
// import morgan from 'morgan';
import { engine } from "express-handlebars";
import { dirname } from "path";
import { fileURLToPath } from "url";
import route from "./routes/index.js";
import database from "./config/db/index.js";

// connect to database
database.connect();

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(`${__dirname}`));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

//HTTP logger
// app.use(morgan('combined'))

// Template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", __dirname + "\\resources\\views");

// route init
route(app);

app.listen(port, () => console.log(`http://localhost:${port}`));
