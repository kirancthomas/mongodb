const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri, { useUnifiedTopology: true });

let db;

async function connect() {
  try {
    await client.connect();
    db = client.db();
    console.log("Database connected!");
  } catch (err) {
    console.error("Error", err);
  }
}

connect();

module.exports = db;
