const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 3002;

app.listen(PORT, (req, res) => {
  console.log(`listening on port ${PORT}`);
});
