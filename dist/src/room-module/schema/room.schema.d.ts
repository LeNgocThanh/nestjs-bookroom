import { Document } from 'mongoose';
export declare class RoomBrand extends Document {
    BrandName: string;
    Address: string;
    GoogleMapUrl: string;
    imageDetail: string;
}
export declare const RoomSchema: import("mongoose").Schema<RoomBrand, import("mongoose").Model<RoomBrand, any, any, any, Document<unknown, any, RoomBrand> & RoomBrand & Required<{
    _id: unknown;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, RoomBrand, Document<unknown, {}, import("mongoose").FlatRecord<RoomBrand>> & import("mongoose").FlatRecord<RoomBrand> & Required<{
    _id: unknown;
}>>;
