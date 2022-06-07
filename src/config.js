import "dotenv/config";

export default {
  port: process.env.PORT || 5001,
  dbUser: process.env.DB_USER || "postgres",
  dbPassword: process.env.DB_PASSWORD || "postgrespassword",
  dbName: process.env.DB_NAME || "predimed",
  dbHost: process.env.DB_HOST || "localhost",
  dbPort: process.env.DB_PORT || "5432",
  dbURL:
    process.env.DATABASE_URL ||
    "postgres://postgres:postgrespassword@localhost:5432/predimed",
  jwtSecret: process.env.JWT_SECRET || "zxcvbnm12345",
  cryptoSecret: process.env.CRYPTO_SECRET || "gonan",
};
