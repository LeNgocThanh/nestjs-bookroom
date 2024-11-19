import { Document } from 'mongoose';
export declare class RoomBook extends Document {
    BrandName: string;
    RoomNumber: string;
    RoomType: string;
    RoomAmenities: string;
    RoomDetail: string;
    RoomImages: string;
}
export declare const RoomBookSchema: import("mongoose").Schema<RoomBook, import("mongoose").Model<RoomBook, any, any, any, Document<unknown, any, RoomBook> & RoomBook & Required<{
    _id: unknown;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, RoomBook, Document<unknown, {}, import("mongoose").FlatRecord<RoomBook>> & import("mongoose").FlatRecord<RoomBook> & Required<{
    _id: unknown;
}>>;
