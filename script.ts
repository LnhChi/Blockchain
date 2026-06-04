import "dotenv/config";
import mongoose from "mongoose";
import Weed from "./models/weed.model";

const clearWeedData = async (): Promise<void> => {
  const uri = process.env.MONGOOSE_URL || process.env.MONGO_URI;
  if (!uri) {
    console.error("Missing MongoDB URI. Set MONGOOSE_URL or MONGO_URI in .env");
    process.exit(1);
  }

  try {
    await mongoose.connect(uri);
    const result = await Weed.deleteMany({});
    console.log(`Deleted ${result.deletedCount ?? 0} documents from weeds collection.`);
  } catch (error) {
    console.error("Failed to clear weeds collection:", error);
    process.exitCode = 1;
  } finally {
    await mongoose.connection.close();
  }
};

clearWeedData();
