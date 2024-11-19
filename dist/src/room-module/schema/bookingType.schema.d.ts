import { Document } from 'mongoose';
export declare class BookingType extends Document {
    BookingTypeName: string;
    BookingTypeDetail: string;
}
export declare const BookingTypeSchema: import("mongoose").Schema<BookingType, import("mongoose").Model<BookingType, any, any, any, Document<unknown, any, BookingType> & BookingType & Required<{
    _id: unknown;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, BookingType, Document<unknown, {}, import("mongoose").FlatRecord<BookingType>> & import("mongoose").FlatRecord<BookingType> & Required<{
    _id: unknown;
}>>;
