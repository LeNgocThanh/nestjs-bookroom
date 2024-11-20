"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const roomBookTime_schema_1 = require("./src/room-module/schema/roomBookTime.schema");
const mongoUri = 'mongodb+srv://Amore:Rich%401234@cluster0.prexdvx.mongodb.net/?retryWrites=true&w=majority&appName=Amore';
async function updateRoomBookTimeTimestamps() {
    await mongoose.connect(mongoUri);
    const RoomBookTimeModel = mongoose.model('RoomBookTime', roomBookTime_schema_1.RoomBookTimeSchema);
    const now = new Date();
    await RoomBookTimeModel.updateMany({ createdAt: { $exists: false } }, { $set: { createdAt: now, updatedAt: now } });
    console.log('All RoomBookTime documents have been updated with the current date and time.');
    await mongoose.disconnect();
}
updateRoomBookTimeTimestamps().catch((err) => {
    console.error('Error updating RoomBookTime documents:', err);
    process.exit(1);
});
//# sourceMappingURL=updateRBT.js.map