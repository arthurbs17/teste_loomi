import dotenv from "dotenv";

dotenv.config();

const jwtConifg = {
  secretKey: process.env.SECRET_KEY ?? "",
  expiresIn: process.env.EXPIRES_IN ?? "1h",
};

export { jwtConifg };
