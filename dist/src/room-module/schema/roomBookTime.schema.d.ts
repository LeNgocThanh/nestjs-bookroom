import { Document, Types } from 'mongoose';
export declare class RoomBookTime extends Document {
    StartBookTime: string;
    EndBookTime: string;
    Detail: string;
    RoomBook: Types.ObjectId;
    User: string;
    Customer: string;
    Phone: string;
    Payment: string;
    Status: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare const RoomBookTimeSchema: import("mongoose").Schema<RoomBookTime, import("mongoose").Model<RoomBookTime, any, any, any, Document<unknown, any, RoomBookTime> & RoomBookTime & Required<{
    _id: unknown;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, RoomBookTime, Document<unknown, {}, import("mongoose").FlatRecord<RoomBookTime>> & import("mongoose").FlatRecord<RoomBookTime> & Required<{
    _id: unknown;
}>>;
