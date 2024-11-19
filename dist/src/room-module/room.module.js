"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const room_service_1 = require("./room.service");
const room_controller_1 = require("./room.controller");
const room_schema_1 = require("./schema/room.schema");
const roomBook_schema_1 = require("./schema/roomBook.schema");
const roomType_schema_1 = require("./schema/roomType.schema");
const bookingType_schema_1 = require("./schema/bookingType.schema");
const roomPrice_schema_1 = require("./schema/roomPrice.schema");
const roomBookTime_schema_1 = require("./schema/roomBookTime.schema");
let RoomModule = class RoomModule {
};
exports.RoomModule = RoomModule;
exports.RoomModule = RoomModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: room_schema_1.RoomBrand.name, schema: room_schema_1.RoomSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: roomBook_schema_1.RoomBook.name, schema: roomBook_schema_1.RoomBookSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: roomType_schema_1.RoomType.name, schema: roomType_schema_1.RoomTypeSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: bookingType_schema_1.BookingType.name, schema: bookingType_schema_1.BookingTypeSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: roomPrice_schema_1.RoomPrice.name, schema: roomPrice_schema_1.RoomPriceSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: roomBookTime_schema_1.RoomBookTime.name, schema: roomBookTime_schema_1.RoomBookTimeSchema }]),
        ],
        controllers: [room_controller_1.RoomController],
        providers: [room_service_1.RoomService],
    })
], RoomModule);
//# sourceMappingURL=room.module.js.map