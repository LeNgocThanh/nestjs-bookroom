import * as mongoose from 'mongoose';
import { RoomBookTime, RoomBookTimeSchema } from './src/room-module/schema/roomBookTime.schema';

// Replace with your MongoDB connection string
const mongoUri = 'mongodb+srv://Amore:Rich%401234@cluster0.prexdvx.mongodb.net/?retryWrites=true&w=majority&appName=Amore';

async function updateRoomBookTimeTimestamps() {
  // Connect to MongoDB
  await mongoose.connect(mongoUri);

  // Create the RoomBookTime model
  const RoomBookTimeModel = mongoose.model('RoomBookTime', RoomBookTimeSchema);

  // Get the current date and time
  const now = new Date();

  // Update all documents in the RoomBookTime collection
  await RoomBookTimeModel.updateMany({ createdAt: { $exists: false } }, // Only update documents missing the createdAt field
    { $set: { createdAt: now, updatedAt: now } });

  console.log('All RoomBookTime documents have been updated with the current date and time.');

  // Close the connection
  await mongoose.disconnect();
}

// Run the script
updateRoomBookTimeTimestamps().catch((err) => {
  console.error('Error updating RoomBookTime documents:', err);
  process.exit(1);
});