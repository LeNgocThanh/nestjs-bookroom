import { Model } from 'mongoose';
import { RoomBrand } from './schema/room.schema';
import { RoomBook } from './schema/roomBook.schema';
import { RoomType } from './schema/roomType.schema';
import { BookingType } from './schema/bookingType.schema';
import { RoomPrice } from './schema/roomPrice.schema';
import { CreateRoomDto, UpdateRoomDto } from './dto/room.dto';
import { CreateRoomBookDto, UpdateRoomBookDto } from './dto/room-book.dto';
import { CreateRoomTypeDto, UpdateRoomTypeDto } from './dto/room-type.dto';
import { CreateBookingTypeDto, UpdateBookingTypeDto } from './dto/booking-type.dto';
import { CreateRoomPriceDto, UpdateRoomPriceDto } from './dto/roomPrice.dto';
import { RoomBookTime } from './schema/roomBookTime.schema';
import { CreateRoomBookTimeDto, UpdateRoomBookTimeDto } from './dto/roomBookTime.dto';
export declare class RoomService {
    private roomModel;
    private roomBookModel;
    private roomTypeModel;
    private bookingTypeModel;
    private roomPriceModel;
    private readonly roomBookTimeModel;
    constructor(roomModel: Model<RoomBrand>, roomBookModel: Model<RoomBook>, roomTypeModel: Model<RoomType>, bookingTypeModel: Model<BookingType>, roomPriceModel: Model<RoomPrice>, roomBookTimeModel: Model<RoomBookTime>);
    findAll(): Promise<RoomBrand[]>;
    findOne(id: string): Promise<RoomBrand>;
    create(createRoomDto: CreateRoomDto): Promise<{
        exists: boolean;
        room?: RoomBrand;
    }>;
    update(id: string, updateRoomDto: UpdateRoomDto): Promise<{
        exists: boolean;
        room?: RoomBrand;
    }>;
    remove(id: string): Promise<RoomBrand>;
    findAllRoomBooks(): Promise<RoomBook[]>;
    findRoomBookById(id: string): Promise<RoomBook>;
    createRoomBook(createRoomBookDto: CreateRoomBookDto): Promise<RoomBook>;
    updateRoomBook(id: string, updateRoomBookDto: UpdateRoomBookDto): Promise<RoomBook>;
    removeRoomBook(id: string): Promise<RoomBook>;
    updateRoomBooksByBrandName(brandName: string, updateRoomBookDto: UpdateRoomBookDto): Promise<{
        matchedCount: number;
        modifiedCount: number;
    }>;
    removeRoomBooksByBrandName(brandName: string): Promise<{
        deletedCount: number;
    }>;
    findAllRoomTypes(): Promise<RoomType[]>;
    findRoomTypeById(id: string): Promise<RoomType>;
    createRoomType(createRoomTypeDto: CreateRoomTypeDto): Promise<{
        exists: boolean;
        roomType?: RoomType;
    }>;
    updateRoomType(id: string, updateRoomTypeDto: UpdateRoomTypeDto): Promise<{
        exists: boolean;
        roomType?: RoomType;
    }>;
    removeRoomType(id: string): Promise<RoomType>;
    updateRoomPriceByTypeName(typeName: string, updateRoomPriceDto: UpdateRoomPriceDto): Promise<{
        matchedCount: number;
        modifiedCount: number;
    }>;
    removeRoomPriceByTypeName(typeName: string): Promise<{
        deletedCount: number;
    }>;
    findAllBookingTypes(): Promise<BookingType[]>;
    findBookingTypeById(id: string): Promise<BookingType>;
    createBookingType(createBookingTypeDto: CreateBookingTypeDto): Promise<BookingType>;
    updateBookingType(id: string, updateBookingTypeDto: UpdateBookingTypeDto): Promise<BookingType>;
    removeBookingType(id: string): Promise<BookingType>;
    updateRoomPriceByBookingTypeName(bookingTypeName: string, updateRoomPriceDto: UpdateRoomPriceDto): Promise<{
        matchedCount: number;
        modifiedCount: number;
    }>;
    removeRoomPriceByBookingTypeName(bookingTypeName: string): Promise<{
        deletedCount: number;
    }>;
    findAllRoomPrices(): Promise<RoomPrice[]>;
    findRoomPriceById(id: string): Promise<RoomPrice>;
    createRoomPrice(createRoomPriceDto: CreateRoomPriceDto): Promise<RoomPrice>;
    updateRoomPrice(id: string, updateRoomPriceDto: UpdateRoomPriceDto): Promise<RoomPrice>;
    removeRoomPrice(id: string): Promise<RoomPrice>;
    findAllRoomBookTimes(): Promise<RoomBookTime[]>;
    findAllRoomBookTimeNotDelete(): Promise<RoomBookTime[]>;
    findRoomBookTimeById(id: string): Promise<RoomBookTime>;
    createRoomBookTime(createRoomBookTimeDto: CreateRoomBookTimeDto): Promise<RoomBookTime>;
    updateRoomBookTime(id: string, updateRoomBookTimeDto: UpdateRoomBookTimeDto): Promise<RoomBookTime>;
    deleteRoomBookTime(id: string): Promise<RoomBookTime>;
    deleteRoomBookTimeByStatus(id: string, updateRoomBookTimeDto: UpdateRoomBookTimeDto): Promise<RoomBookTime>;
}
