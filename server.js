const express = require("express");
const mongodb = require("mongodb");

const app = express();
const dbUrl = "mongodb://test:qwerty123@ds237072.mlab.com:37072/parking";

function validate(data) {
  let errors = {};

  if (data === "") errors.name = "Can't be empty";
  // if (this.state.cover === "") errors.cover = "Can't be empty";
  if (data === "") errors.rateWeekly = "Can't be empty";
  if (data === "") errors.rateWekend = "Can't be empty";
  if (data === "") errors.discount = "Can't be empty";

  const isValid = Object.keys(errors).length === 0;

  return { errors, isValid };
}

mongodb.MongoClient.connect(
  dbUrl,
  function(err, db) {
    app.get("/api/parking", (req, res) => {
      db.collection("parking")
        .find({})
        .toArray((err, parking) => {
          res.json({ parking });
        });
    });

    app.use((req, res) => {
      res.status(404).json({
        errors: {
          global:
            "Still working on it. Please try again later when we implement it"
        }
      });
    });
  }
);

app.listen(5001, () => console.log("Server is running on localhost:5001"));
