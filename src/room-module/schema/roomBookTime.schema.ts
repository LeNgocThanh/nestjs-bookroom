
// nest-api-bookroom/src/room-module/roomBook.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ collection: 'RoomBookTime', timestamps: true})
export class RoomBookTime extends Document {
  @Prop({ type: Date, required: true })
  StartBookTime: string;

  @Prop({ type: Date, required: true })
  EndBookTime: string;

  @Prop()
  Detail: string;

  @Prop({ type: Types.ObjectId, ref: 'RoomBook', required: true })
  RoomBook: Types.ObjectId;

  @Prop()
  User: string;

  @Prop()
  Customer: string;

  @Prop()
  Phone: string;

  @Prop()
  Payment: string;

  @Prop()
  Status: string;

@Prop({ type: Date, default: Date.now })
createdAt: Date;

@Prop({ type: Date, default: Date.now })
updatedAt: Date;
}

export const RoomBookTimeSchema = SchemaFactory.createForClass(RoomBookTime);