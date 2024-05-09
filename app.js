const express = require('express')
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express()
app.use(express.json({ limit: "1mb" }));
app.use(
  cors({
    origin: "*",
  })
);

const port = process.env.PORT || 3000

const authRoute = require("./routes/user");


app.get('/', (req, res) => res.send('Hello World!'))
app.use("/api/user", authRoute);





app.listen(port, () => console.log(`Example app listening on port ${port}!`))