import * as mongodb from "mongodb";
import { Excerpt } from "./excerpt";

export const collections: {
  excerpts?: mongodb.Collection<Excerpt>;
} = {};

export async function connectToDatabase(uri: string) {
  const client = new mongodb.MongoClient(uri);
  await client.connect();

  const db = client.db("excerptsApp");
  await applySchemaValidation(db);

  const excerptsCollection = db.collection<Excerpt>("excerpts");
  collections.excerpts = excerptsCollection;
}

// Update our existing collection with JSON schema validation so we know our documents will always match the shape of our Employee model, even if added elsewhere.
// For more information about schema validation, see this blog series: https://www.mongodb.com/blog/post/json-schema-validation--locking-down-your-model-the-smart-way
async function applySchemaValidation(db: mongodb.Db) {
  const jsonSchema = {
    $jsonSchema: {
      bsonType: "object",
      required: ["date", "thoughts", "excerpt", "category", "source"],
      additionalProperties: false,
      properties: {
        id: {},
        date: {
          bsonType: "number",
          description: "'date' is required and is a number",
        },
        thoughts: {
          bsonType: "string",
          description: "'thoughts' is required and is a string",
        },
        excerpt: {
          bsonType: "string",
          description: "'excerpt' is required and is a string",
        },
        category: {
          bsonType: "string",
          description: "'category' is required and is a string",
        },
        source: {
          bsonType: "string",
          description: "'source' is required and is a string",
        },
      },
    },
  };

  // Try applying the modification to the collection, if the collection doesn't exist, create it
  await db.command({
    collMod: "excerpts",
    validator: jsonSchema
  }).catch(async (error: mongodb.MongoServerError) => {
    if (error.codeName === 'NamespaceNotFound') {
      await db.createCollection("excerpts", { validator: jsonSchema });
    }
  });
}
