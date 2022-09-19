const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const dbConnect = require("./utils/dbConnect");
const tourRouter = require("./routes/v1/tour.router");

// middleware 
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");

// data base connection 
dbConnect();
// application routes
app.use('/api/v1/tour',tourRouter)

// ejs
app.get("/", (req, res) => {
  res.send('server is running')
});

app.all("*", (req, res) => {
  res.send("NO route found.");
});

app.listen(port, () => {
  console.log(`Tour-Management app listening on port ${port}`);
});

