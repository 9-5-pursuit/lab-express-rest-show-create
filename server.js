const app = require("./app");

require("dotenv").config();

const PORT = process.env.PORT || 3004;

app.listen(PORT, () => {
  console.log(`Server is now running on port: ${PORT}`);
});
