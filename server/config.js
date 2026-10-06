const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

module.exports = {
  PORT: process.env.PORT || 5000,
  JWT_SECRET: process.env.JWT_SECRET,
  MONGO_URI: process.env.MONGO_URI,
  NODE_ENV: process.env.NODE_ENV || "development",

  INITIAL_CHIPS_AMOUNT: 30000,
  JWT_TOKEN_EXPIRES_IN: 3600000 * 24,

  SMTP_HOST: process.env.SMTP_HOST,
  SMTP_PORT: process.env.SMTP_PORT,
  SMTP_USER: process.env.SMTP_USER,
  SMTP_PW: process.env.SMTP_PW,

  FROM_NAME: "Vintage Poker Info",
  FROM_EMAIL: "no-reply@vintagepoker.net",
};