import express, { Application } from "express";
import swaggerUiExpress from "swagger-ui-express";
import swaggerJson from "./configs/swagger.json";
import { router } from "./routes";
import cors from "cors";

const app: Application = express();

app.use(express.json());
app.use(cors());
app.use(
  "/api-docs",
  swaggerUiExpress.serve,
  swaggerUiExpress.setup(swaggerJson)
);

app.use(router);

export default app;
