const app = require("./app.js");
const dotenv = require("dotenv");
const connectDatabase = require("./database/db.js");

//config
dotenv.config({ path: "./.env" });

connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});
