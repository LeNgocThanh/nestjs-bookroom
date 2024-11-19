import { Document } from 'mongoose';
export declare class RoomType extends Document {
    TypeName: string;
    TypeDetail: string;
}
export declare const RoomTypeSchema: import("mongoose").Schema<RoomType, import("mongoose").Model<RoomType, any, any, any, Document<unknown, any, RoomType> & RoomType & Required<{
    _id: unknown;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, RoomType, Document<unknown, {}, import("mongoose").FlatRecord<RoomType>> & import("mongoose").FlatRecord<RoomType> & Required<{
    _id: unknown;
}>>;
