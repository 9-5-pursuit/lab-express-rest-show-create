const app = require("./app.js");

require("dotenv").config();
const PORT = 3001 || process.env.PORT;

app.listen(PORT, () => {
  console.log("Server is now listening on port " + PORT);
});
