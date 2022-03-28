import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import authRoutes from './routes/auth.routes';
import userRoutes from "./routes/user.routes";
import patientRoutes from './routes/patient.routes';
import departmentRoutes from './routes/department.routes';
import provinceRoutes from './routes/province.routes';
import districtRoutes from './routes/district.routes';


const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/patients', patientRoutes);
app.use('/api/v1/departments', departmentRoutes);
app.use('/api/v1/provinces', provinceRoutes);
app.use('/api/v1/districts', districtRoutes);


app.get("/", (req, res) => {
    res.send("Hola!");
});

export default app;
