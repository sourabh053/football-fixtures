const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require('./config/db');

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//routes
app.use('/api/v1/teams', require('./routes/teamsRoutes'))
app.use('/api/v1/fixtures', require('./routes/fixturesRoutes'))


app.get("/", (req, res) => {
  res.send("Hello World!!");
});

db.query("SELECT 1")
  .then(() => {
    //mysql
    console.log("MYSQL DB Connected");

    //listen
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
