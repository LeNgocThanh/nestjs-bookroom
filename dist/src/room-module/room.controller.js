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
exports.RoomController = void 0;
const common_1 = require("@nestjs/common");
const room_service_1 = require("./room.service");
const room_dto_1 = require("./dto/room.dto");
const room_book_dto_1 = require("./dto/room-book.dto");
const room_type_dto_1 = require("./dto/room-type.dto");
const booking_type_dto_1 = require("./dto/booking-type.dto");
const roomPrice_dto_1 = require("./dto/roomPrice.dto");
const roomBookTime_dto_1 = require("./dto/roomBookTime.dto");
let RoomController = class RoomController {
    constructor(roomService) {
        this.roomService = roomService;
    }
    getAllRooms() {
        return this.roomService.findAll();
    }
    getRoomById(id) {
        return this.roomService.findOne(id);
    }
    async createRoom(createRoomDto) {
        const result = await this.roomService.create(createRoomDto);
        if (result.exists) {
            return { message: 'BrandName already exists. Action not performed.' };
        }
        return result.room;
    }
    async updateRoom(id, updateRoomDto) {
        const result = await this.roomService.update(id, updateRoomDto);
        if (result.exists) {
            return { message: 'BrandName already exists. Action not performed.' };
        }
        return result.room;
    }
    removeRoom(id) {
        return this.roomService.remove(id);
    }
    getAllRoomBooks() {
        return this.roomService.findAllRoomBooks();
    }
    getRoomBookById(id) {
        return this.roomService.findRoomBookById(id);
    }
    createRoomBook(createRoomBookDto) {
        return this.roomService.createRoomBook(createRoomBookDto);
    }
    updateRoomBook(id, updateRoomBookDto) {
        return this.roomService.updateRoomBook(id, updateRoomBookDto);
    }
    removeRoomBook(id) {
        return this.roomService.removeRoomBook(id);
    }
    updateRoomBooksByBrandName(brandName, updateRoomBookDto) {
        console.log('update by BrandName', updateRoomBookDto);
        return this.roomService.updateRoomBooksByBrandName(brandName, updateRoomBookDto);
    }
    removeRoomBooksByBrandName(brandName) {
        return this.roomService.removeRoomBooksByBrandName(brandName);
    }
    getAllRoomTypes() {
        return this.roomService.findAllRoomTypes();
    }
    getRoomTypeById(id) {
        return this.roomService.findRoomTypeById(id);
    }
    async createRoomType(createRoomTypeDto) {
        const result = await this.roomService.createRoomType(createRoomTypeDto);
        if (result.exists) {
            return { message: 'TypeName already exists. Action not performed.' };
        }
        return result.roomType;
    }
    async updateRoomType(id, updateRoomTypeDto) {
        const result = await this.roomService.updateRoomType(id, updateRoomTypeDto);
        if (result.exists) {
            return { message: 'Type already exists. Action not performed.' };
        }
        return result.roomType;
    }
    removeRoomType(id) {
        return this.roomService.removeRoomType(id);
    }
    updateRoomPriceByTypeName(typeName, updateRoomPriceDto) {
        console.log('update by TypeName', updateRoomPriceDto);
        return this.roomService.updateRoomPriceByTypeName(typeName, updateRoomPriceDto);
    }
    removeRoomPriceByTypeName(typeName) {
        return this.roomService.removeRoomPriceByTypeName(typeName);
    }
    getAllBookingTypes() {
        return this.roomService.findAllBookingTypes();
    }
    getBookingTypeById(id) {
        return this.roomService.findBookingTypeById(id);
    }
    createBookingType(createBookingTypeDto) {
        return this.roomService.createBookingType(createBookingTypeDto);
    }
    updateBookingType(id, updateBookingTypeDto) {
        return this.roomService.updateBookingType(id, updateBookingTypeDto);
    }
    removeBookingType(id) {
        return this.roomService.removeBookingType(id);
    }
    updateRoomPriceByBookingTypeName(bookingTypeName, updateRoomPriceDto) {
        console.log('update by TypeName', updateRoomPriceDto);
        return this.roomService.updateRoomPriceByBookingTypeName(bookingTypeName, updateRoomPriceDto);
    }
    removeRoomPriceByBookingTypeName(bookingTypeName) {
        return this.roomService.removeRoomPriceByBookingTypeName(bookingTypeName);
    }
    getAllRoomPrices() {
        return this.roomService.findAllRoomPrices();
    }
    getRoomPriceById(id) {
        return this.roomService.findRoomPriceById(id);
    }
    createRoomPrice(createRoomPriceDto) {
        return this.roomService.createRoomPrice(createRoomPriceDto);
    }
    updateRoomPrice(id, updateRoomPriceDto) {
        return this.roomService.updateRoomPrice(id, updateRoomPriceDto);
    }
    removeRoomPrice(id) {
        return this.roomService.removeRoomPrice(id);
    }
    async getAllRoomBookTimes() {
        return this.roomService.findAllRoomBookTimes();
    }
    async getAllRoomBookTimeNotDeleted() {
        return this.roomService.findAllRoomBookTimeNotDelete();
    }
    async getRoomBookTimeById(id) {
        return this.roomService.findRoomBookTimeById(id);
    }
    async createRoomBookTime(createRoomBookTimeDto) {
        return this.roomService.createRoomBookTime(createRoomBookTimeDto);
    }
    async updateRoomBookTime(id, updateRoomBookTimeDto) {
        return this.roomService.updateRoomBookTime(id, updateRoomBookTimeDto);
    }
    async updateRoomBookTimeStatusToDelete(id, updateRoomBookTimeDto) {
        return this.roomService.deleteRoomBookTimeByStatus(id, updateRoomBookTimeDto);
    }
    async deleteRoomBookTime(id) {
        return this.roomService.deleteRoomBookTime(id);
    }
};
exports.RoomController = RoomController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RoomController.prototype, "getAllRooms", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RoomController.prototype, "getRoomById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [room_dto_1.CreateRoomDto]),
    __metadata("design:returntype", Promise)
], RoomController.prototype, "createRoom", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, room_dto_1.UpdateRoomDto]),
    __metadata("design:returntype", Promise)
], RoomController.prototype, "updateRoom", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RoomController.prototype, "removeRoom", null);
__decorate([
    (0, common_1.Get)('book/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RoomController.prototype, "getAllRoomBooks", null);
__decorate([
    (0, common_1.Get)('book/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RoomController.prototype, "getRoomBookById", null);
__decorate([
    (0, common_1.Post)('book'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [room_book_dto_1.CreateRoomBookDto]),
    __metadata("design:returntype", void 0)
], RoomController.prototype, "createRoomBook", null);
__decorate([
    (0, common_1.Put)('book/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, room_book_dto_1.UpdateRoomBookDto]),
    __metadata("design:returntype", void 0)
], RoomController.prototype, "updateRoomBook", null);
__decorate([
    (0, common_1.Delete)('book/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RoomController.prototype, "removeRoomBook", null);
__decorate([
    (0, common_1.Put)('book/roomBrand/:brandName'),
    __param(0, (0, common_1.Param)('brandName')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, room_book_dto_1.UpdateRoomBookDto]),
    __metadata("design:returntype", void 0)
], RoomController.prototype, "updateRoomBooksByBrandName", null);
__decorate([
    (0, common_1.Delete)('book/roomBrand/:brandName'),
    __param(0, (0, common_1.Param)('brandName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RoomController.prototype, "removeRoomBooksByBrandName", null);
__decorate([
    (0, common_1.Get)('type/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RoomController.prototype, "getAllRoomTypes", null);
__decorate([
    (0, common_1.Get)('type/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RoomController.prototype, "getRoomTypeById", null);
__decorate([
    (0, common_1.Post)('type'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [room_type_dto_1.CreateRoomTypeDto]),
    __metadata("design:returntype", Promise)
], RoomController.prototype, "createRoomType", null);
__decorate([
    (0, common_1.Put)('type/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, room_type_dto_1.UpdateRoomTypeDto]),
    __metadata("design:returntype", Promise)
], RoomController.prototype, "updateRoomType", null);
__decorate([
    (0, common_1.Delete)('type/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RoomController.prototype, "removeRoomType", null);
__decorate([
    (0, common_1.Put)('type/typeName/:typeName'),
    __param(0, (0, common_1.Param)('typeName')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, roomPrice_dto_1.UpdateRoomPriceDto]),
    __metadata("design:returntype", void 0)
], RoomController.prototype, "updateRoomPriceByTypeName", null);
__decorate([
    (0, common_1.Delete)('type/typeName/:typeName'),
    __param(0, (0, common_1.Param)('typeName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RoomController.prototype, "removeRoomPriceByTypeName", null);
__decorate([
    (0, common_1.Get)('booking-type/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RoomController.prototype, "getAllBookingTypes", null);
__decorate([
    (0, common_1.Get)('booking-type/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RoomController.prototype, "getBookingTypeById", null);
__decorate([
    (0, common_1.Post)('booking-type'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [booking_type_dto_1.CreateBookingTypeDto]),
    __metadata("design:returntype", void 0)
], RoomController.prototype, "createBookingType", null);
__decorate([
    (0, common_1.Put)('booking-type/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, booking_type_dto_1.UpdateBookingTypeDto]),
    __metadata("design:returntype", void 0)
], RoomController.prototype, "updateBookingType", null);
__decorate([
    (0, common_1.Delete)('booking-type/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RoomController.prototype, "removeBookingType", null);
__decorate([
    (0, common_1.Put)('booking-type/bookingTypeName/:bookingTypeName'),
    __param(0, (0, common_1.Param)('bookingTypeName')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, roomPrice_dto_1.UpdateRoomPriceDto]),
    __metadata("design:returntype", void 0)
], RoomController.prototype, "updateRoomPriceByBookingTypeName", null);
__decorate([
    (0, common_1.Delete)('booking-type/bookingTypeName/:bookingTypeName'),
    __param(0, (0, common_1.Param)('bookingTypeName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RoomController.prototype, "removeRoomPriceByBookingTypeName", null);
__decorate([
    (0, common_1.Get)('price/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RoomController.prototype, "getAllRoomPrices", null);
__decorate([
    (0, common_1.Get)('price/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RoomController.prototype, "getRoomPriceById", null);
__decorate([
    (0, common_1.Post)('price'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [roomPrice_dto_1.CreateRoomPriceDto]),
    __metadata("design:returntype", void 0)
], RoomController.prototype, "createRoomPrice", null);
__decorate([
    (0, common_1.Put)('price/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, roomPrice_dto_1.UpdateRoomPriceDto]),
    __metadata("design:returntype", void 0)
], RoomController.prototype, "updateRoomPrice", null);
__decorate([
    (0, common_1.Delete)('price/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RoomController.prototype, "removeRoomPrice", null);
__decorate([
    (0, common_1.Get)('bookRoom-time/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RoomController.prototype, "getAllRoomBookTimes", null);
__decorate([
    (0, common_1.Get)('bookRoom-time/not-deleted'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RoomController.prototype, "getAllRoomBookTimeNotDeleted", null);
__decorate([
    (0, common_1.Get)('bookRoom-time/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RoomController.prototype, "getRoomBookTimeById", null);
__decorate([
    (0, common_1.Post)('bookRoom-time'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [roomBookTime_dto_1.CreateRoomBookTimeDto]),
    __metadata("design:returntype", Promise)
], RoomController.prototype, "createRoomBookTime", null);
__decorate([
    (0, common_1.Put)('bookRoom-time/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, roomBookTime_dto_1.UpdateRoomBookTimeDto]),
    __metadata("design:returntype", Promise)
], RoomController.prototype, "updateRoomBookTime", null);
__decorate([
    (0, common_1.Put)('bookRoom-time/delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, roomBookTime_dto_1.UpdateRoomBookTimeDto]),
    __metadata("design:returntype", Promise)
], RoomController.prototype, "updateRoomBookTimeStatusToDelete", null);
__decorate([
    (0, common_1.Delete)('bookRoom-time/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RoomController.prototype, "deleteRoomBookTime", null);
exports.RoomController = RoomController = __decorate([
    (0, common_1.Controller)('rooms'),
    __metadata("design:paramtypes", [room_service_1.RoomService])
], RoomController);
//# sourceMappingURL=room.controller.js.map