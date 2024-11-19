"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const room_schema_1 = require("./schema/room.schema");
const roomBook_schema_1 = require("./schema/roomBook.schema");
const roomType_schema_1 = require("./schema/roomType.schema");
const bookingType_schema_1 = require("./schema/bookingType.schema");
const roomPrice_schema_1 = require("./schema/roomPrice.schema");
const roomBookTime_schema_1 = require("./schema/roomBookTime.schema");
let RoomService = class RoomService {
    constructor(roomModel, roomBookModel, roomTypeModel, bookingTypeModel, roomPriceModel, roomBookTimeModel) {
        this.roomModel = roomModel;
        this.roomBookModel = roomBookModel;
        this.roomTypeModel = roomTypeModel;
        this.bookingTypeModel = bookingTypeModel;
        this.roomPriceModel = roomPriceModel;
        this.roomBookTimeModel = roomBookTimeModel;
    }
    async findAll() {
        return this.roomModel.find().exec();
    }
    async findOne(id) {
        return this.roomModel.findById(id).exec();
    }
    async create(createRoomDto) {
        console.log('Checking if BrandName already exists.');
        const existingRoom = await this.roomModel.findOne({ BrandName: createRoomDto.BrandName }).exec();
        if (existingRoom) {
            console.log('BrandName already exists. Action not performed.');
            return { exists: true };
        }
        console.log('BrandName does not exist. Creating new room.');
        const createdRoom = new this.roomModel(createRoomDto);
        const room = await createdRoom.save();
        return { exists: false, room };
    }
    async update(id, updateRoomDto) {
        const existingRoom = await this.roomModel.findOne({ BrandName: updateRoomDto.BrandName, _id: { $ne: id } }).exec();
        if (existingRoom) {
            return { exists: true };
        }
        const room = await this.roomModel.findByIdAndUpdate(id, updateRoomDto, { new: true }).exec();
        return { exists: false, room };
    }
    async remove(id) {
        return this.roomModel.findByIdAndDelete(id).exec();
    }
    async findAllRoomBooks() {
        return this.roomBookModel.find().exec();
    }
    async findRoomBookById(id) {
        return this.roomBookModel.findById(id).exec();
    }
    async createRoomBook(createRoomBookDto) {
        const createdRoomBook = new this.roomBookModel(createRoomBookDto);
        return createdRoomBook.save();
    }
    async updateRoomBook(id, updateRoomBookDto) {
        return this.roomBookModel.findByIdAndUpdate(id, updateRoomBookDto).exec();
    }
    async removeRoomBook(id) {
        return this.roomBookModel.findByIdAndDelete(id).exec();
    }
    async updateRoomBooksByBrandName(brandName, updateRoomBookDto) {
        const result = await this.roomBookModel.updateMany({ BrandName: brandName }, updateRoomBookDto).exec();
        console.log('update by BrandName', result);
        return { matchedCount: result.matchedCount, modifiedCount: result.modifiedCount };
    }
    async removeRoomBooksByBrandName(brandName) {
        const result = await this.roomBookModel.deleteMany({ BrandName: brandName }).exec();
        return { deletedCount: result.deletedCount };
    }
    async findAllRoomTypes() {
        return this.roomTypeModel.find().exec();
    }
    async findRoomTypeById(id) {
        return this.roomTypeModel.findById(id).exec();
    }
    async createRoomType(createRoomTypeDto) {
        console.log('Checking if TypeName already exists.');
        const existingRoom = await this.roomTypeModel.findOne({ TypeName: createRoomTypeDto.TypeName }).exec();
        if (existingRoom) {
            console.log('TypeName already exists. Action not performed.');
            return { exists: true };
        }
        console.log('TypeName does not exist. Creating new room.');
        const createdRoom = new this.roomTypeModel(createRoomTypeDto);
        const roomType = await createdRoom.save();
        return { exists: false, roomType };
    }
    async updateRoomType(id, updateRoomTypeDto) {
        const existingRoom = await this.roomTypeModel.findOne({ TypeName: updateRoomTypeDto.TypeName, _id: { $ne: id } }).exec();
        if (existingRoom) {
            return { exists: true };
        }
        const roomType = await this.roomTypeModel.findByIdAndUpdate(id, updateRoomTypeDto, { new: true }).exec();
        return { exists: false, roomType };
    }
    async removeRoomType(id) {
        return this.roomTypeModel.findByIdAndDelete(id).exec();
    }
    async updateRoomPriceByTypeName(typeName, updateRoomPriceDto) {
        const result = await this.roomPriceModel.updateMany({ TypeName: typeName }, updateRoomPriceDto).exec();
        return { matchedCount: result.matchedCount, modifiedCount: result.modifiedCount };
    }
    async removeRoomPriceByTypeName(typeName) {
        const result = await this.roomPriceModel.deleteMany({ TypeName: typeName }).exec();
        return { deletedCount: result.deletedCount };
    }
    async findAllBookingTypes() {
        return this.bookingTypeModel.find().exec();
    }
    async findBookingTypeById(id) {
        return this.bookingTypeModel.findById(id).exec();
    }
    async createBookingType(createBookingTypeDto) {
        const createdBookingType = new this.bookingTypeModel(createBookingTypeDto);
        return createdBookingType.save();
    }
    async updateBookingType(id, updateBookingTypeDto) {
        return this.bookingTypeModel.findByIdAndUpdate(id, updateBookingTypeDto).exec();
    }
    async removeBookingType(id) {
        return this.bookingTypeModel.findByIdAndDelete(id).exec();
    }
    async updateRoomPriceByBookingTypeName(bookingTypeName, updateRoomPriceDto) {
        const result = await this.roomPriceModel.updateMany({ BookingTypeName: bookingTypeName }, updateRoomPriceDto).exec();
        console.log('update by BookingTypeName', result);
        return { matchedCount: result.matchedCount, modifiedCount: result.modifiedCount };
    }
    async removeRoomPriceByBookingTypeName(bookingTypeName) {
        const result = await this.roomPriceModel.deleteMany({ BookingTypeName: bookingTypeName }).exec();
        return { deletedCount: result.deletedCount };
    }
    async findAllRoomPrices() {
        return this.roomPriceModel.find().exec();
    }
    async findRoomPriceById(id) {
        return this.roomPriceModel.findById(id).exec();
    }
    async createRoomPrice(createRoomPriceDto) {
        const createdRoomPrice = new this.roomPriceModel(createRoomPriceDto);
        return createdRoomPrice.save();
    }
    async updateRoomPrice(id, updateRoomPriceDto) {
        return this.roomPriceModel.findByIdAndUpdate(id, updateRoomPriceDto).exec();
    }
    async removeRoomPrice(id) {
        return this.roomPriceModel.findByIdAndDelete(id).exec();
    }
    async findAllRoomBookTimes() {
        return this.roomBookTimeModel.find().exec();
    }
    async findAllRoomBookTimeNotDelete() {
        return this.roomBookTimeModel.find({ Status: { $ne: 'deleted' } }).exec();
    }
    async findRoomBookTimeById(id) {
        return this.roomBookTimeModel.findById(id).exec();
    }
    async createRoomBookTime(createRoomBookTimeDto) {
        const createdRoomBookTime = new this.roomBookTimeModel(createRoomBookTimeDto);
        return createdRoomBookTime.save();
    }
    async updateRoomBookTime(id, updateRoomBookTimeDto) {
        return this.roomBookTimeModel.findByIdAndUpdate(id, updateRoomBookTimeDto, { new: true }).exec();
    }
    async deleteRoomBookTime(id) {
        return this.roomBookTimeModel.findByIdAndDelete(id).exec();
    }
    async deleteRoomBookTimeByStatus(id, updateRoomBookTimeDto) {
        updateRoomBookTimeDto.Status = 'deleted';
        return this.roomBookTimeModel.findByIdAndUpdate(id, updateRoomBookTimeDto, { new: true }).exec();
    }
};
exports.RoomService = RoomService;
exports.RoomService = RoomService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(room_schema_1.RoomBrand.name)),
    __param(1, (0, mongoose_1.InjectModel)(roomBook_schema_1.RoomBook.name)),
    __param(2, (0, mongoose_1.InjectModel)(roomType_schema_1.RoomType.name)),
    __param(3, (0, mongoose_1.InjectModel)(bookingType_schema_1.BookingType.name)),
    __param(4, (0, mongoose_1.InjectModel)(roomPrice_schema_1.RoomPrice.name)),
    __param(5, (0, mongoose_1.InjectModel)(roomBookTime_schema_1.RoomBookTime.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], RoomService);
//# sourceMappingURL=room.service.js.map