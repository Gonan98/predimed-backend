import express from "express";
import morgan from "morgan";
import cors from "cors";

import authRouter from "./routes/auth.routes";
import userRouter from "./routes/user.routes";
import patientRouter from "./routes/patient.routes";
import historyRouter from "./routes/history.routes";
import antecedentRouter from "./routes/antecedent.routes";
import symptomRouter from "./routes/symptom.routes";
import diseaseRouter from "./routes/disease.routes";
import diagnosticRouter from "./routes/diagnostic.routes";
import ubigeoRouter from "./routes/ubigeo.routes";
import establishmentRouter from "./routes/establishment.routes";
import referredRouter from "./routes/referred.routes";

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v2/auth", authRouter);
app.use("/api/v2/users", userRouter);
app.use("/api/v2/diseases", diseaseRouter);
app.use("/api/v2/patients", patientRouter);
app.use("/api/v2/histories", historyRouter);
app.use("/api/v2/referreds", referredRouter);
app.use("/api/v2/antecedents", antecedentRouter);
app.use("/api/v2/symptoms", symptomRouter);
app.use("/api/v2/ubigeo", ubigeoRouter);
app.use("/api/v2/establishments", establishmentRouter);
app.use("/api/v2/diagnostic", diagnosticRouter);

app.get("/", (req, res) => {
  res.send("Hola!");
});

export default app;
