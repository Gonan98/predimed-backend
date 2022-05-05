import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import authRouter from './routes/auth.routes';
import userRouter from "./routes/user.routes";
import patientRouter from './routes/patient.routes';
import symptomRouter from './routes/symptom.routes';
import diseaseRouter from './routes/disease.routes';
import aiRouter from './routes/ai.routes';
import ubigeoRouter from './routes/ubigeo.routes';

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v2/auth', authRouter);
app.use('/api/v2/users', userRouter);
app.use('/api/v2/diseases', diseaseRouter);
app.use('/api/v2/patients', patientRouter);
app.use('/api/v2/symptoms', symptomRouter);
app.use('/api/v2/ubigeo', ubigeoRouter);
app.use('/api/v2/nn', aiRouter);

app.get("/", (req, res) => {
    res.send("Hola!");
});

export default app;
