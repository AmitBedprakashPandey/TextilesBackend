import dotenv from "dotenv";
dotenv.config();

import connectDB from "./config/db.js";


import express from "express";
import cors from "cors";

import serialNumberRoutes from "./routes/serialNumber.routes.js";
import unitRoutes from "./routes/unit.routes.js";
import areaRoutes from "./routes/Area.Router.js";
import cityRoutes from "./routes/City.Router.js";
import venderRoutes from "./routes/Vendor.Route.js"
import companyRoutes from "./routes/Company.routes.js";

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());

app.use(express.json());
app.use("/api/company", companyRoutes);
app.use("/api/serial", serialNumberRoutes);
app.use("/api/unit", unitRoutes);
app.use("/api/area", areaRoutes);
app.use("/api/city", cityRoutes);
app.use("/api/vendor", venderRoutes);

app.get("/", (req, res) => {
  res.send("Hello Express!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
