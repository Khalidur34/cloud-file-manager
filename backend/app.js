const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Kevin and Parthib cloud file manager is running');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});