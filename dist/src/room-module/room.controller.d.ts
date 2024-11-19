import { RoomService } from './room.service';
import { CreateRoomDto, UpdateRoomDto } from './dto/room.dto';
import { CreateRoomBookDto, UpdateRoomBookDto } from './dto/room-book.dto';
import { CreateRoomTypeDto, UpdateRoomTypeDto } from './dto/room-type.dto';
import { CreateBookingTypeDto, UpdateBookingTypeDto } from './dto/booking-type.dto';
import { CreateRoomPriceDto, UpdateRoomPriceDto } from './dto/roomPrice.dto';
import { CreateRoomBookTimeDto, UpdateRoomBookTimeDto } from './dto/roomBookTime.dto';
import { RoomBookTime } from './schema/roomBookTime.schema';
export declare class RoomController {
    private readonly roomService;
    constructor(roomService: RoomService);
    getAllRooms(): Promise<import("./schema/room.schema").RoomBrand[]>;
    getRoomById(id: string): Promise<import("./schema/room.schema").RoomBrand>;
    createRoom(createRoomDto: CreateRoomDto): Promise<import("./schema/room.schema").RoomBrand | {
        message: string;
    }>;
    updateRoom(id: string, updateRoomDto: UpdateRoomDto): Promise<import("./schema/room.schema").RoomBrand | {
        message: string;
    }>;
    removeRoom(id: string): Promise<import("./schema/room.schema").RoomBrand>;
    getAllRoomBooks(): Promise<import("./schema/roomBook.schema").RoomBook[]>;
    getRoomBookById(id: string): Promise<import("./schema/roomBook.schema").RoomBook>;
    createRoomBook(createRoomBookDto: CreateRoomBookDto): Promise<import("./schema/roomBook.schema").RoomBook>;
    updateRoomBook(id: string, updateRoomBookDto: UpdateRoomBookDto): Promise<import("./schema/roomBook.schema").RoomBook>;
    removeRoomBook(id: string): Promise<import("./schema/roomBook.schema").RoomBook>;
    updateRoomBooksByBrandName(brandName: string, updateRoomBookDto: UpdateRoomBookDto): Promise<{
        matchedCount: number;
        modifiedCount: number;
    }>;
    removeRoomBooksByBrandName(brandName: string): Promise<{
        deletedCount: number;
    }>;
    getAllRoomTypes(): Promise<import("./schema/roomType.schema").RoomType[]>;
    getRoomTypeById(id: string): Promise<import("./schema/roomType.schema").RoomType>;
    createRoomType(createRoomTypeDto: CreateRoomTypeDto): Promise<import("./schema/roomType.schema").RoomType | {
        message: string;
    }>;
    updateRoomType(id: string, updateRoomTypeDto: UpdateRoomTypeDto): Promise<import("./schema/roomType.schema").RoomType | {
        message: string;
    }>;
    removeRoomType(id: string): Promise<import("./schema/roomType.schema").RoomType>;
    updateRoomPriceByTypeName(typeName: string, updateRoomPriceDto: UpdateRoomPriceDto): Promise<{
        matchedCount: number;
        modifiedCount: number;
    }>;
    removeRoomPriceByTypeName(typeName: string): Promise<{
        deletedCount: number;
    }>;
    getAllBookingTypes(): Promise<import("./schema/bookingType.schema").BookingType[]>;
    getBookingTypeById(id: string): Promise<import("./schema/bookingType.schema").BookingType>;
    createBookingType(createBookingTypeDto: CreateBookingTypeDto): Promise<import("./schema/bookingType.schema").BookingType>;
    updateBookingType(id: string, updateBookingTypeDto: UpdateBookingTypeDto): Promise<import("./schema/bookingType.schema").BookingType>;
    removeBookingType(id: string): Promise<import("./schema/bookingType.schema").BookingType>;
    updateRoomPriceByBookingTypeName(bookingTypeName: string, updateRoomPriceDto: UpdateRoomPriceDto): Promise<{
        matchedCount: number;
        modifiedCount: number;
    }>;
    removeRoomPriceByBookingTypeName(bookingTypeName: string): Promise<{
        deletedCount: number;
    }>;
    getAllRoomPrices(): Promise<import("./schema/roomPrice.schema").RoomPrice[]>;
    getRoomPriceById(id: string): Promise<import("./schema/roomPrice.schema").RoomPrice>;
    createRoomPrice(createRoomPriceDto: CreateRoomPriceDto): Promise<import("./schema/roomPrice.schema").RoomPrice>;
    updateRoomPrice(id: string, updateRoomPriceDto: UpdateRoomPriceDto): Promise<import("./schema/roomPrice.schema").RoomPrice>;
    removeRoomPrice(id: string): Promise<import("./schema/roomPrice.schema").RoomPrice>;
    getAllRoomBookTimes(): Promise<RoomBookTime[]>;
    getAllRoomBookTimeNotDeleted(): Promise<RoomBookTime[]>;
    getRoomBookTimeById(id: string): Promise<RoomBookTime>;
    createRoomBookTime(createRoomBookTimeDto: CreateRoomBookTimeDto): Promise<RoomBookTime>;
    updateRoomBookTime(id: string, updateRoomBookTimeDto: UpdateRoomBookTimeDto): Promise<RoomBookTime>;
    updateRoomBookTimeStatusToDelete(id: string, updateRoomBookTimeDto: UpdateRoomBookTimeDto): Promise<RoomBookTime>;
    deleteRoomBookTime(id: string): Promise<RoomBookTime>;
}
