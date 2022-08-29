import * as express from "express";
import * as mongodb from "mongodb";
import { collections } from "./database";

export const excerptRouter = express.Router();
excerptRouter.use(express.json());

excerptRouter.get("/", async (_req, res) => {
  try {
    const excerpts = await collections.excerpts.find({}).toArray();
    res.status(200).send(excerpts);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

excerptRouter.post("/", async (req, res) => {
  console.log(req)
  try {
    const excerpt = req.body;
    const result = await collections.excerpts.insertOne(excerpt);

    if (result.acknowledged) {
      res.status(201).send(`Created a new excerpt: ID ${result.insertedId}.`);
    } else {
      res.status(500).send("Failed to create a new excerpt.");
    }
  } catch (error) {
    console.error(error);
    res.status(400).send(error.message);
  }
});

excerptRouter.delete("/:id", async (req, res) => {
  try {
    const id = req?.params?.id;
    const query = { _id: new mongodb.ObjectId(id) };
    const result = await collections.excerpts.deleteOne(query);

    if (result && result.deletedCount) {
      res.status(202).send(`Removed an excerpt: ID ${id}`);
    } else if (!result) {
      res.status(400).send(`Failed to remove an excerpt: ID ${id}`);
    } else if (!result.deletedCount) {
      res.status(404).send(`Failed to find an excerpt: ID ${id}`);
    }
  } catch (error) {
    console.error(error.message);
    res.status(400).send(error.message);
  }
});
