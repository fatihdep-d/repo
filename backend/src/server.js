require("dotenv").config();

const express = require("express");
const cors = require("cors");

const heroRoute = require("./routes/heroRoute");
const projectRoute = require("./routes/projectRoute");
const messageRoute = require("./routes/messageRoute");
const skillRoute = require("./routes/skillRoute");
const certificateRoute = require("./routes/certificateRoute");
const testimonialRoute = require("./routes/testimonialRoute");
const dashboardRoute = require("./routes/dashboardRoute");

require("./config/db");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Selamat Datang di Backend Portfolio",
  });
});

// 🔍 PENGECEKAN OTOMATIS: Mendeteksi rute mana yang bernilai undefined / bukan fungsi
const routesToCheck = {
  "/api/hero": heroRoute,
  "/api/projects": projectRoute,
  "/api/messages": messageRoute,
  "/api/skills": skillRoute,
  "/api/certificates": certificateRoute,
  "/api/testimonials": testimonialRoute,
  "/api/dashboard": dashboardRoute,
};

Object.entries(routesToCheck).forEach(([path, routeHandler]) => {
  if (typeof routeHandler !== "function") {
    console.error(`❌ ERROR: Route untuk path "${path}" bernilai undefined atau bukan router yang valid! Periksa file routernya.`);
  }
  app.use(path, routeHandler);
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});