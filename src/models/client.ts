import { Collection } from 'fireorm';
import {
    IsNumber,
    IsOptional,
    IsString,
    IsDate,
    IsBoolean,
    IsInt,
    Min,
    Max,
  } from 'class-validator';

@Collection('clients')
export class Client {

  @IsString() @IsOptional() id: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsInt()
  @Min(10)
  @Max(90)
  age: number;

  @IsDate()
  dateOfBirth: Date;
}



