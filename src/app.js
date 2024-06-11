const express = require("express");
const app = express();

app.use(express.json());

app.use(ErrorHandler.handleErrors);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port:: http://localhost:${PORT}/`);
});

module.exports = app;
