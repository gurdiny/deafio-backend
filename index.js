require("dotenv").config();
const server = require("./src/server");
const db = require("./src/lib/db");

const PORT = process.env.PORT || 8080;

db.connect()
  .then(() => {
    console.log("DB Conected");
    server.listen(PORT, () => {
      console.log("Server is running in", PORT);
    });
  })
  .catch((error) => {
    console.log("DB Connection error", error);
  });
