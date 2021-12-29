import mongoose from "mongoose";
async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/my_database", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect DB success");
  } catch (error) {
    console.log("error");
  }
}

export default { connect };
