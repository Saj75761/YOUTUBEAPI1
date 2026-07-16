const express = require("express");
const cors = require("cors");
require("dotenv").config();

const videoRoutes = require("./routes/youtuberoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api", videoRoutes);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
