const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const authRoutes = require("./src/routes/authRoutes");
 const userRoutes = require("./src/routes/userRoutes");
const questionRoutes = require("./src/routes/questionRoutes");
const testRoutes = require("./src/routes/testRoutes");
const questionTypeRoutes = require("./src/routes/questionTypeRoutes");
const subjectRoutes = require("./src/routes/subjectRoutes");
const chapterRoutes = require("./src/routes/chapterRoutes");
const topicRoutes = require("./src/routes/topicRoutes");

dotenv.config();

const app = express();

app.use(cors({ origin: 'http://localhost:3000'  }));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/tests", testRoutes);
app.use("/api/question-types", questionTypeRoutes);
app.use("/api/subjects", subjectRoutes);
app.use("/api/chapters", chapterRoutes);
app.use("/api/topics", topicRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
