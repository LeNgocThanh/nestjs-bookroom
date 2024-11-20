// nest-api-bookroom/src/room-module/bookingType.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'BookingType' })
export class BookingType extends Document {
  @Prop({ required: true, unique: true })
  BookingTypeName: string;

  @Prop({ required: true })
  BookingTypeDetail: string;
}

export const BookingTypeSchema = SchemaFactory.createForClass(BookingType);