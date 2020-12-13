const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
require("dotenv").config();

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
//  ROUTES
app.post('/search', async (req, res) => {
  try {
    const result = await axios.get(
      `${process.env.ROOT_URL}/search?app_id=${
        process.env.APPLICATION_ID
      }&app_key=${encodeURIComponent(
        process.env.API_KEY
      )}&q=${req.body.q}`);

      res.status(200).json(result.data);
  }
  catch(error) {
    res.status(404).json({message: error.message});
  }  
})

const port = process.env.PORT || 5000;
app.listen(port);