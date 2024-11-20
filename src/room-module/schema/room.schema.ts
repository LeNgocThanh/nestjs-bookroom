// nest-api-bookroom/src/room-module/room.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema( {collection: 'BookRoomBrand'} )
export class RoomBrand extends Document {
  @Prop({ required: true, unique: true })
  BrandName: string;

  @Prop({ required: true })
  Address: string;

  @Prop()
  GoogleMapUrl: string;

  @Prop()
  imageDetail: string;
}

export const RoomSchema = SchemaFactory.createForClass(RoomBrand);