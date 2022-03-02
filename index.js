const express = require("express");
const dotenv = require("dotenv");
const personRouter = require("./routes/person.routes");
const postRouter = require("./routes/post.routes");
dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.json());
app.use("/api", personRouter);
app.use("/api", postRouter);

app.listen(PORT, () => console.log("Server Started!!! PORT:", PORT));
