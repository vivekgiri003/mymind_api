const express = require("express");
const app = express();

require("dotenv").config();
const port = process.env.PORT || 8080;

// const { CORS_ORIGIN } = process.env;
const cors = require("cors");
app.use(cors());

app.use(express.json());


const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

const journalRoutes = require("./routes/journalRoutes");
app.use("/api/journals", journalRoutes);

const scoreRoutes = require("./routes/scoreRoutes");
app.use("/api/scores", scoreRoutes);

const activityRoutes = require("./routes/activityRoutes");
app.use("/api/activities", activityRoutes);

const recommendRoutes = require("./routes/recommendRoutes");
app.use("/api/recommendations", recommendRoutes);

app.listen(port, () => {
  console.log(`running at http://localhost:${port}`);
});
