import { Document } from 'mongoose';
export declare class RoomPrice extends Document {
    TypeName: string;
    BookingTypeName: string;
    RoomPrice: string;
}
export declare const RoomPriceSchema: import("mongoose").Schema<RoomPrice, import("mongoose").Model<RoomPrice, any, any, any, Document<unknown, any, RoomPrice> & RoomPrice & Required<{
    _id: unknown;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, RoomPrice, Document<unknown, {}, import("mongoose").FlatRecord<RoomPrice>> & import("mongoose").FlatRecord<RoomPrice> & Required<{
    _id: unknown;
}>>;
