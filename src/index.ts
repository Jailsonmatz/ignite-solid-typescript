import express from "express";
import swaggerUi from "swagger-ui-express";

import swaggerConfig from "../swagger.json";
import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerConfig));

app.use("/users", usersRoutes);

export { app };
