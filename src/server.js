import express, { urlencoded } from "express";

import { apiRouter } from "./routes/api";

const PORT = 3001;
const app = express();

app.use(express.json());
app.use(urlencoded({extended: true}));

app.use("/api", apiRouter);

app.listen(PORT, () => {
    console.log(`Started started on port: ${PORT}`);
});