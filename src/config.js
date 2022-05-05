import 'dotenv/config';

export default {
    port: process.env.PORT || 5001,
    dbUser: process.env.DB_USER || 'root',
    dbPassword: process.env.DB_PASSWORD || 'mysqlpassword',
    dbName: process.env.DB_NAME || 'predimed',
    dbHost: process.env.DB_USER || 'localhost',
    jwtSecret: process.env.JWT_SECRET || 'zxcvbnm12345',
    cryptoSecret: process.env.CRYPTO_SECRET || 'gonan'
};