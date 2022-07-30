import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://testapp:testapp123@app-cluster.lj4lmtp.mongodb.net/?retryWrites=true&w=majority');

let database = mongoose.connection;

export default database;