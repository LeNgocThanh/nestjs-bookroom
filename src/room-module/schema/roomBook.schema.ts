// nest-api-bookroom/src/room-module/roomBook.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { RoomBookTime } from './roomBookTime.schema';

@Schema({ collection: 'RoomBook' })
export class RoomBook extends Document {
  @Prop({ required: true })
  BrandName: string;

  @Prop({ required: true })
  RoomNumber: string;

  @Prop({ required: true })
  RoomType: string;

  @Prop()
  RoomAmenities: string;

  @Prop()
  RoomDetail: string;

  @Prop()
  RoomImages: string;
}

export const RoomBookSchema = SchemaFactory.createForClass(RoomBook);
