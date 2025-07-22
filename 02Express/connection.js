const mongoose = require("mongoose");

function connectMongoDb(url = process.env.MONGO_URI) {
  if (!url) {
    console.error("❌ MONGO_URI is not defined. Please check your .env file.");
    process.exit(1); // optional: stops the server if DB can't be connected
  }

  mongoose
    .connect(url)
    .then(() => console.log("✅ Mongoose connected"))
    .catch((err) => {
      console.error("❌ MongoDB connection error:", err);
      process.exit(1); // optional: stops the app if connection fails
    });
}

module.exports = { connectMongoDb };
