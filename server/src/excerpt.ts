import * as mongodb from "mongodb";

export interface Excerpt {
  date: number;
  thoughts: string;
  excerpt: string;
  category: string;
  source: string;
  id?: mongodb.ObjectId;
}

