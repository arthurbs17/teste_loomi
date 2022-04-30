import { Request, Response, NextFunction } from "express";
import JWT from "jsonwebtoken";
import { jwtConifg } from "../database/auth";
import { UserRepository } from "../modules/user/repository/UserRepository";

const authenticateToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authorizationHeader = req.headers["authorization"];

  if (!authorizationHeader) {
    return res.status(401).json({ message: "missing authorization header" });
  }

  const token = authorizationHeader.split(" ")[1];

  await JWT.verify(token, jwtConifg.secretKey, async (err, decode: any) => {
    if (err) {
      return res.status(401).json(err);
    }

    req.user = await new UserRepository().findByEmail(decode.email);
    delete req.user.senha;
    return next();
  });
};

export { authenticateToken };
