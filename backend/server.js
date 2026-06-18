require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const enquiryRoutes = require(
  "./routes/enquiryRoutes"
);

const app = express();

connectDB();


app.use(
  cors({
    origin: [
      "https://kidrove-workshop-assignment.vercel.app",
    ],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());

app.use("/api", enquiryRoutes);

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on ${PORT}`
  );
});