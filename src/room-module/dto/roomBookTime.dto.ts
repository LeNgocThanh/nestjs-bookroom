import { IsDateString, IsNotEmpty, IsMongoId } from 'class-validator';

export class CreateRoomBookTimeDto {
    @IsDateString()
    @IsNotEmpty()
    StartBookTime: Date;
  
    @IsDateString()
    @IsNotEmpty()
    EndBookTime: Date;  
    
    Detail: string;

    User: string;

    Customer: string;

    Payment: string;

    Phone: string;

    Status: string;
  
    @IsMongoId()
    @IsNotEmpty()
    RoomBook: string;
  }

  export class UpdateRoomBookTimeDto {
    @IsDateString()
    @IsNotEmpty()
    StartBookTime: Date;
  
    @IsDateString()
    @IsNotEmpty()
    EndBookTime: Date;  
    
    Detail: string;

    User: string;

    Customer: string;

    Phone : string;

    Payment: string;

    Status : string;
  
    @IsMongoId()
    @IsNotEmpty()
    RoomBook: string;
  }