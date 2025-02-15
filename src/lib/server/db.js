import { MongoClient } from 'mongodb';
import { MONGODB_URI } from '$env/static/private';

let client = new MongoClient(MONGODB_URI);

export default client;
