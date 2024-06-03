const mongoose = require("mongoose");

const connectDatabase = () => {
  const dbUrl = process.env.DB_URL;
  if (!dbUrl) {
    throw new Error("DB_URL environment variable is not defined");
  }
  
  mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then((data) => {
    console.log(`Mongodb connected with server: ${data.connection.host}`);
  }).catch((error) => {
    console.log(`Error connecting to MongoDB: ${error.message}`);
  });
};

module.exports = connectDatabase;
