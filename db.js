const dotenv = require("dotenv");

dotenv.config();
const mongoose = require('mongoose');
const mongoURI = process.env.DATABASE;

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to mongoose');

    // Fetch data from the database
    const collection = mongoose.connection.db.collection('Zwigato');
    const data = await collection.find({}).toArray();
    const Zwigato_Category = mongoose.connection.db.collection('Zwigato_Category');
    const catData = await Zwigato_Category.find({}).toArray();
    global.Zwigato = data;
    global.Zwigato_Category = catData;
  } catch (err) {
    console.error(err);
  }
};

module.exports = mongoDB;
