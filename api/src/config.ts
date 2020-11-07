import dotenv from "dotenv";

dotenv.config();

export default {
  MONGO_DATABASE: process.env.MONGO_DATABASE || "tododb",
  MONGO_USER: "admin",
  MONGO_PASSWORD: "admin",
  MONGO_HOST: "localhost",
  PORT: process.env.PORT || 3000,
};
