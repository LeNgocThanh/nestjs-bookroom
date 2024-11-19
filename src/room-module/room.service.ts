import { Body } from '@nestjs/common';
// nest-api-bookroom/src/room-module/room.service.ts
import { Injectable, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
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

@Injectable()
export class RoomService {
  constructor(
    @InjectModel(RoomBrand.name) private roomModel: Model<RoomBrand>,
    @InjectModel(RoomBook.name) private roomBookModel: Model<RoomBook>,
    @InjectModel(RoomType.name) private roomTypeModel: Model<RoomType>,
    @InjectModel(BookingType.name) private bookingTypeModel: Model<BookingType>,
    @InjectModel(RoomPrice.name) private roomPriceModel: Model<RoomPrice>,
    @InjectModel(RoomBookTime.name) private readonly roomBookTimeModel: Model<RoomBookTime>
  ) {}

  async findAll(): Promise<RoomBrand[]> {
    return this.roomModel.find().exec();
  }

  async findOne(id: string): Promise<RoomBrand> {
    return this.roomModel.findById(id).exec();
  }

  async create(createRoomDto: CreateRoomDto): Promise<{ exists: boolean, room?: RoomBrand }> {
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

  async update(id: string, updateRoomDto: UpdateRoomDto): Promise<{ exists: boolean, room?: RoomBrand }> {
    const existingRoom = await this.roomModel.findOne({ BrandName: updateRoomDto.BrandName, _id: { $ne: id } }).exec();
    if (existingRoom) {
      return { exists: true };
    }
    const room = await this.roomModel.findByIdAndUpdate(id, updateRoomDto, { new: true }).exec();
    return { exists: false, room };
  }

  async remove(id: string): Promise<RoomBrand> {    
    return this.roomModel.findByIdAndDelete(id).exec();
  }

  // Methods for RoomBook
  async findAllRoomBooks(): Promise<RoomBook[]> {
    return this.roomBookModel.find().exec();
  }

  async findRoomBookById(id: string): Promise<RoomBook> {
    return this.roomBookModel.findById(id).exec();
  }

  async createRoomBook(createRoomBookDto: CreateRoomBookDto): Promise<RoomBook> {
    const createdRoomBook = new this.roomBookModel(createRoomBookDto);
    return createdRoomBook.save();
  }

  async updateRoomBook(id: string, updateRoomBookDto: UpdateRoomBookDto): Promise<RoomBook> {
    return this.roomBookModel.findByIdAndUpdate(id, updateRoomBookDto).exec(); 
  }
  async removeRoomBook(id: string): Promise<RoomBook> {
    return this.roomBookModel.findByIdAndDelete(id).exec();
  }  

  async updateRoomBooksByBrandName(brandName: string, updateRoomBookDto: UpdateRoomBookDto): Promise<{ matchedCount: number, modifiedCount: number }> {
    const result = await this.roomBookModel.updateMany({ BrandName: brandName }, updateRoomBookDto).exec();
    console.log('update by BrandName', result);
    return { matchedCount: result.matchedCount, modifiedCount: result.modifiedCount };
  }

  async removeRoomBooksByBrandName(brandName: string): Promise<{ deletedCount: number }> {
    const result = await this.roomBookModel.deleteMany({ BrandName: brandName }).exec();
    return { deletedCount: result.deletedCount };
  }

  // Methods for RoomType
  async findAllRoomTypes(): Promise<RoomType[]> {
    return this.roomTypeModel.find().exec();
  }

  async findRoomTypeById(id: string): Promise<RoomType> {
    return this.roomTypeModel.findById(id).exec();
  }

  async createRoomType(createRoomTypeDto: CreateRoomTypeDto): Promise<{ exists: boolean, roomType?: RoomType }> {
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
    
  //   const createdRoomType = new this.roomTypeModel(createRoomTypeDto);
  //   return createdRoomType.save();
   }

  async updateRoomType(id: string, updateRoomTypeDto: UpdateRoomTypeDto): Promise<{ exists: boolean, roomType?: RoomType }> {
    const existingRoom = await this.roomTypeModel.findOne({ TypeName: updateRoomTypeDto.TypeName, _id: { $ne: id } }).exec();
    if (existingRoom) {
      return { exists: true };
    }        
    const roomType = await this.roomTypeModel.findByIdAndUpdate(id, updateRoomTypeDto, { new: true }).exec();
    return { exists: false, roomType };
    //return this.roomTypeModel.findByIdAndUpdate(id).exec(); 
  }

  async removeRoomType(id: string): Promise<RoomType> {
    return this.roomTypeModel.findByIdAndDelete(id).exec();
  } 

  // async updateRoomBooksByBrandName(brandName: string, updateRoomBookDto: UpdateRoomBookDto): Promise<{ matchedCount: number, modifiedCount: number }> {
  //   const result = await this.roomBookModel.updateMany({ BrandName: brandName }, updateRoomBookDto).exec();
  //   console.log('update by BrandName', result);
  //   return { matchedCount: result.matchedCount, modifiedCount: result.modifiedCount };
  // }

   async updateRoomPriceByTypeName(typeName: string, updateRoomPriceDto: UpdateRoomPriceDto): Promise<{ matchedCount: number, modifiedCount: number }> {
     const result = await this.roomPriceModel.updateMany({ TypeName: typeName }, updateRoomPriceDto).exec();
     return { matchedCount: result.matchedCount, modifiedCount: result.modifiedCount };
   }

  async removeRoomPriceByTypeName(typeName: string): Promise<{ deletedCount: number }> {
    const result = await this.roomPriceModel.deleteMany({ TypeName: typeName }).exec();
    return { deletedCount: result.deletedCount };
  }

  // Methods for BookingType
  async findAllBookingTypes(): Promise<BookingType[]> {
    return this.bookingTypeModel.find().exec();
  }

  async findBookingTypeById(id: string): Promise<BookingType> {
    return this.bookingTypeModel.findById(id).exec();
  }

  async createBookingType(createBookingTypeDto: CreateBookingTypeDto): Promise<BookingType> {
    const createdBookingType = new this.bookingTypeModel(createBookingTypeDto);
    return createdBookingType.save();
  }

  async updateBookingType(id: string, updateBookingTypeDto: UpdateBookingTypeDto): Promise<BookingType> {
    return this.bookingTypeModel.findByIdAndUpdate(id, updateBookingTypeDto).exec(); 
  }

  async removeBookingType(id: string): Promise<BookingType> {
    return this.bookingTypeModel.findByIdAndDelete(id).exec();
  } 

  async updateRoomPriceByBookingTypeName(bookingTypeName: string, updateRoomPriceDto: UpdateRoomPriceDto): Promise<{ matchedCount: number, modifiedCount: number }> {
    const result = await this.roomPriceModel.updateMany({ BookingTypeName: bookingTypeName }, updateRoomPriceDto).exec();
    console.log('update by BookingTypeName', result);
    return { matchedCount: result.matchedCount, modifiedCount: result.modifiedCount };
  }

  async removeRoomPriceByBookingTypeName(bookingTypeName: string): Promise<{ deletedCount: number }> {
    const result = await this.roomPriceModel.deleteMany({ BookingTypeName: bookingTypeName }).exec();
    return { deletedCount: result.deletedCount };
  }

  // Methods for RoomPrice
  async findAllRoomPrices(): Promise<RoomPrice[]> {
    return this.roomPriceModel.find().exec();
  }

  async findRoomPriceById(id: string): Promise<RoomPrice> {
    return this.roomPriceModel.findById(id).exec();
  }

  async createRoomPrice(createRoomPriceDto: CreateRoomPriceDto): Promise<RoomPrice> {
    const createdRoomPrice = new this.roomPriceModel(createRoomPriceDto);
    return createdRoomPrice.save();
  }

  async updateRoomPrice(id: string, updateRoomPriceDto: UpdateRoomPriceDto): Promise<RoomPrice> {
    return this.roomPriceModel.findByIdAndUpdate(id, updateRoomPriceDto).exec();
  }

  async removeRoomPrice(id: string): Promise<RoomPrice> {
    return this.roomPriceModel.findByIdAndDelete(id).exec();
  }

  // Methods for RoomBookTime

  async findAllRoomBookTimes(): Promise<RoomBookTime[]> {
    return this.roomBookTimeModel.find().exec();
  }

  async findAllRoomBookTimeNotDelete(): Promise<RoomBookTime[]> {
    return this.roomBookTimeModel.find({ Status: { $ne: 'deleted' } }).exec();
  }

  async findRoomBookTimeById(id: string): Promise<RoomBookTime> {
    return this.roomBookTimeModel.findById(id).exec();
  }

  async createRoomBookTime(createRoomBookTimeDto: CreateRoomBookTimeDto): Promise<RoomBookTime> {
    const createdRoomBookTime = new this.roomBookTimeModel(createRoomBookTimeDto);
    return createdRoomBookTime.save();
  }

  async updateRoomBookTime(id: string, updateRoomBookTimeDto: UpdateRoomBookTimeDto): Promise<RoomBookTime> {
    return this.roomBookTimeModel.findByIdAndUpdate(id, updateRoomBookTimeDto, { new: true }).exec();
  }

  async deleteRoomBookTime(id: string): Promise<RoomBookTime> {
    return this.roomBookTimeModel.findByIdAndDelete(id).exec();
  }

  async deleteRoomBookTimeByStatus(id: string, updateRoomBookTimeDto: UpdateRoomBookTimeDto): Promise<RoomBookTime> {
    updateRoomBookTimeDto.Status = 'deleted';
    return this.roomBookTimeModel.findByIdAndUpdate(id, updateRoomBookTimeDto, { new: true }).exec();
  }
}