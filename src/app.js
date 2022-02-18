import express from "express";
import morgan from "morgan";
import cors from "cors";

import medicRoutes from "./routes/medic.routes";

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/medics", medicRoutes);

app.get("/", (req, res) => {
  res.send("Hola!");
});

export default app;
