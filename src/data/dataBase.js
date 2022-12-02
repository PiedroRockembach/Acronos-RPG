const express = require('express');
const { google } = require('googleapis')

const app = express();

const PORT = process.env.PORT || 5050;
// app.use('/')
app.get("/product", async (req, res) => {
  try {
    res.json({
      status: 200,
      message: "get data successfuly"
    });
  } catch (error) {
    console.error(error);
    return resizeBy.status(500).send("Server error");
  }
})

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`))