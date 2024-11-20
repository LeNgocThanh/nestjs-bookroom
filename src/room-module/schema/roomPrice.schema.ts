// nest-api-bookroom/src/room-module/roomBook.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'RoomPrice' })
export class RoomPrice extends Document {
  @Prop({ required: true })
  TypeName: string;

  @Prop({ required: true })
  BookingTypeName: string;

  @Prop({ required: true })
  RoomPrice: string;  
}

export const RoomPriceSchema = SchemaFactory.createForClass(RoomPrice);