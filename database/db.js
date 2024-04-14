const mongoose = require("mongoose");

const connectDatabase = () => {
  // Use mongoose to connect
  mongoose
    .connect("mongodb+srv://nobu:495Y8WWVbY1rr3zF@cluster0.hvsbriu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
      dbName: "StackOverflow-clone",
    })
    .then((data) => {
      console.log(`Connected to MongoDB server: ${data.connection.host}`);
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
};

module.exports = connectDatabase;
