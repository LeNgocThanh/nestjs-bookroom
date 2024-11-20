// nest-api-bookroom/src/room-module/roomType.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'RoomType' })
export class RoomType extends Document {
  @Prop({ required: true, unique: true })
  TypeName: string;

  @Prop({ required: true })
  TypeDetail: string;
}

export const RoomTypeSchema = SchemaFactory.createForClass(RoomType);