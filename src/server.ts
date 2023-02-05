import express, { Request, Response } from "express";
import axios from "axios";

const app = express();

app.get("/products", (req: Request, res: Response) => {
  res.json([
    {
      id: 1,
      name: "Applee",
    },
    {
      id: 2,
      name: "Melon",
    },
  ]);
});

app.listen(3000, () => {
  console.log("server started on port 3000.");
});
