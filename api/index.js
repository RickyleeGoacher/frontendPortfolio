const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = express.Router();
const cors = require('cors');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));