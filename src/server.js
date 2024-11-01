import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import connectDb from "./config/connectDb";
import dotenv from "dotenv";

let app = express();
dotenv.config();

//config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

connectDb();

const port = process.env.PORT || 8088;
const hostname = process.env.HOST_NAME;

app.listen(port, () => {
  console.log("Server listening on port " + port);
});
