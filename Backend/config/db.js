import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.DATABASE_URI;
const client = new MongoClient(uri);
const dbName = 'chat-app'

async function main(){
    await client.connect();
    console.log("Connected Successfully to MongoDB Server!");
    const db = client.db(dbName);
    const collection = db.collection('users');

    return 'done.';
}

main().then(console.log).catch(console.error).finally(() => client.close());