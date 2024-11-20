// nest-api-bookroom/src/room-module/room.controller.ts
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { RoomService } from './room.service';
import { CreateRoomDto, UpdateRoomDto } from './dto/room.dto';
import { CreateRoomBookDto, UpdateRoomBookDto } from './dto/room-book.dto';
import { CreateRoomTypeDto, UpdateRoomTypeDto } from './dto/room-type.dto';
import { CreateBookingTypeDto, UpdateBookingTypeDto } from './dto/booking-type.dto';
import { CreateRoomPriceDto, UpdateRoomPriceDto } from './dto/roomPrice.dto';
import { CreateRoomBookTimeDto, UpdateRoomBookTimeDto } from './dto/roomBookTime.dto';
import { RoomBookTime } from './schema/roomBookTime.schema';

@Controller('rooms')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Get()
  getAllRooms() {
    return this.roomService.findAll();
  }

  @Get(':id')
  getRoomById(@Param('id') id: string) {
    return this.roomService.findOne(id);
  }

  @Post()
  async createRoom(@Body() createRoomDto: CreateRoomDto) {
    const result = await this.roomService.create(createRoomDto);
    if (result.exists) {
      return { message: 'BrandName already exists. Action not performed.' };
    }
    return result.room;
  }

  @Put(':id')
  async updateRoom(@Param('id') id: string, @Body() updateRoomDto: UpdateRoomDto) {
    const result = await this.roomService.update(id, updateRoomDto);
    if (result.exists) {
      return { message: 'BrandName already exists. Action not performed.' };
    }
    return result.room;
  }

  @Delete(':id')
  removeRoom(@Param('id') id: string) {
    return this.roomService.remove(id); 
  }
  // Endpoints for RoomBook
  @Get('book/all')
  getAllRoomBooks() {
    return this.roomService.findAllRoomBooks();
  }

  @Get('book/:id')
  getRoomBookById(@Param('id') id: string) {
    return this.roomService.findRoomBookById(id);
  }

  @Post('book')
  createRoomBook(@Body() createRoomBookDto: CreateRoomBookDto) {
    return this.roomService.createRoomBook(createRoomBookDto);
  }
  
  @Put('book/:id')
  updateRoomBook(@Param('id') id: string, @Body() updateRoomBookDto: UpdateRoomBookDto) {
    return this.roomService.updateRoomBook(id, updateRoomBookDto);
  }

  @Delete('book/:id')
  removeRoomBook(@Param('id') id: string) {
    return this.roomService.removeRoomBook(id);
  }
  @Put('book/roomBrand/:brandName')
  updateRoomBooksByBrandName(@Param('brandName') brandName: string, @Body() updateRoomBookDto: UpdateRoomBookDto) {
    console.log('update by BrandName', updateRoomBookDto);
    return this.roomService.updateRoomBooksByBrandName(brandName, updateRoomBookDto);
  }

  @Delete('book/roomBrand/:brandName')
  removeRoomBooksByBrandName(@Param('brandName') brandName: string) {
    return this.roomService.removeRoomBooksByBrandName(brandName);
  }

  // Endpoints for RoomType
  @Get('type/all')
  getAllRoomTypes() {
    return this.roomService.findAllRoomTypes();
  }

  @Get('type/:id')
  getRoomTypeById(@Param('id') id: string) {
    return this.roomService.findRoomTypeById(id);
  }

  @Post('type')  
  async createRoomType(@Body() createRoomTypeDto: CreateRoomTypeDto) {
    const result = await this.roomService.createRoomType(createRoomTypeDto);
    if (result.exists) {
      return { message: 'TypeName already exists. Action not performed.' };
    }
    return result.roomType;
    //return this.roomService.createRoomType(createRoomTypeDto);
  }

  @Put('type/:id')
  async updateRoomType(@Param('id') id: string, @Body() updateRoomTypeDto: UpdateRoomTypeDto) {
    const result = await this.roomService.updateRoomType(id, updateRoomTypeDto);
    if (result.exists) {
      return { message: 'Type already exists. Action not performed.' };
    }
    return result.roomType;
    //return this.roomService.updateRoomType(id, updateRoomTypeDto);
  }

  @Delete('type/:id')
  removeRoomType(@Param('id') id: string) {
    return this.roomService.removeRoomType(id);
  } 

  // @Put('book/roomBrand/:brandName')
  // updateRoomBooksByBrandName(@Param('brandName') brandName: string, @Body() updateRoomBookDto: UpdateRoomBookDto) {
  //   console.log('update by BrandName', updateRoomBookDto);
  //   return this.roomService.updateRoomBooksByBrandName(brandName, updateRoomBookDto);
  // }

  @Put('type/typeName/:typeName')
   updateRoomPriceByTypeName(@Param('typeName') typeName: string, @Body() updateRoomPriceDto: UpdateRoomPriceDto) {
    console.log('update by TypeName', updateRoomPriceDto);
   return this.roomService.updateRoomPriceByTypeName(typeName, updateRoomPriceDto);
   }

  @Delete('type/typeName/:typeName')
  removeRoomPriceByTypeName(@Param('typeName') typeName: string) {
    return this.roomService.removeRoomPriceByTypeName(typeName);
  }

  // Endpoints for BookingType
  @Get('booking-type/all')
  getAllBookingTypes() {
    return this.roomService.findAllBookingTypes();
  }

  @Get('booking-type/:id')
  getBookingTypeById(@Param('id') id: string) {
    return this.roomService.findBookingTypeById(id);
  }

  @Post('booking-type')
  createBookingType(@Body() createBookingTypeDto: CreateBookingTypeDto) {
    return this.roomService.createBookingType(createBookingTypeDto);
  }

  @Put('booking-type/:id')
  updateBookingType(@Param('id') id: string, @Body() updateBookingTypeDto: UpdateBookingTypeDto) {
    return this.roomService.updateBookingType(id, updateBookingTypeDto);
  }

  @Delete('booking-type/:id')
  removeBookingType(@Param('id') id: string) {
    return this.roomService.removeBookingType(id);
  }

  @Put('booking-type/bookingTypeName/:bookingTypeName')
   updateRoomPriceByBookingTypeName(@Param('bookingTypeName') bookingTypeName: string, @Body() updateRoomPriceDto: UpdateRoomPriceDto) {
    console.log('update by TypeName', updateRoomPriceDto);
   return this.roomService.updateRoomPriceByBookingTypeName(bookingTypeName, updateRoomPriceDto);
   }

  @Delete('booking-type/bookingTypeName/:bookingTypeName')
  removeRoomPriceByBookingTypeName(@Param('bookingTypeName') bookingTypeName: string) {
    return this.roomService.removeRoomPriceByBookingTypeName(bookingTypeName);
  }

  // Endpoints for RoomPrice
  @Get('price/all')
  getAllRoomPrices() {
    return this.roomService.findAllRoomPrices();
  }

  @Get('price/:id')
  getRoomPriceById(@Param('id') id: string) {
    return this.roomService.findRoomPriceById(id);
  }

  @Post('price')
  createRoomPrice(@Body() createRoomPriceDto: CreateRoomPriceDto) {
    return this.roomService.createRoomPrice(createRoomPriceDto);
  }

  @Put('price/:id')
  updateRoomPrice(@Param('id') id: string, @Body() updateRoomPriceDto: UpdateRoomPriceDto) {
    return this.roomService.updateRoomPrice(id, updateRoomPriceDto);
  }

  @Delete('price/:id')
  removeRoomPrice(@Param('id') id: string) {
    return this.roomService.removeRoomPrice(id);
  }

  // Endpoints for RoomBookTime
  
  @Get('bookRoom-time/all')
  async getAllRoomBookTimes(): Promise<RoomBookTime[]> {
    return this.roomService.findAllRoomBookTimes();
  }

  @Get('bookRoom-time/not-deleted')
  async getAllRoomBookTimeNotDeleted(): Promise<RoomBookTime[]> {
    return this.roomService.findAllRoomBookTimeNotDelete();
  }

  @Get('bookRoom-time/:id')
  async getRoomBookTimeById(@Param('id') id: string): Promise<RoomBookTime> {
    return this.roomService.findRoomBookTimeById(id);
  }

  @Post('bookRoom-time')
  async createRoomBookTime(@Body() createRoomBookTimeDto: CreateRoomBookTimeDto): Promise<RoomBookTime> {
    return this.roomService.createRoomBookTime(createRoomBookTimeDto);
  }

  @Put('bookRoom-time/:id')
  async updateRoomBookTime(@Param('id') id: string, @Body() updateRoomBookTimeDto: UpdateRoomBookTimeDto): Promise<RoomBookTime> {
    return this.roomService.updateRoomBookTime(id, updateRoomBookTimeDto);
  }

  @Put('bookRoom-time/delete/:id')
  async updateRoomBookTimeStatusToDelete(@Param('id') id: string, @Body() updateRoomBookTimeDto: UpdateRoomBookTimeDto): Promise<RoomBookTime> {
    return this.roomService.deleteRoomBookTimeByStatus(id, updateRoomBookTimeDto);
  }

  @Delete('bookRoom-time/:id')
  async deleteRoomBookTime(@Param('id') id: string): Promise<RoomBookTime> {
    return this.roomService.deleteRoomBookTime(id);
  }
}