// nest-api-bookroom/src/room-module/room.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomService } from './room.service';
import { RoomController } from './room.controller';
import { RoomBrand, RoomSchema } from './schema/room.schema';
import { RoomBook, RoomBookSchema } from './schema/roomBook.schema';
import { RoomType, RoomTypeSchema } from './schema/roomType.schema';
import { BookingType, BookingTypeSchema } from './schema/bookingType.schema';
import { RoomPrice, RoomPriceSchema } from './schema/roomPrice.schema';
import { RoomBookTime, RoomBookTimeSchema } from './schema/roomBookTime.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: RoomBrand.name, schema: RoomSchema }]),
    MongooseModule.forFeature([{ name: RoomBook.name, schema: RoomBookSchema }]),
    MongooseModule.forFeature([{ name: RoomType.name, schema: RoomTypeSchema }]),
    MongooseModule.forFeature([{ name: BookingType.name, schema: BookingTypeSchema }]),
    MongooseModule.forFeature([{ name: RoomPrice.name, schema: RoomPriceSchema }]),
    MongooseModule.forFeature([{ name: RoomBookTime.name, schema: RoomBookTimeSchema }]),
  ],
  controllers: [RoomController],
  providers: [RoomService],
})
export class RoomModule {}