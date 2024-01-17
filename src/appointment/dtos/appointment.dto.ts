import { Optional } from '@nestjs/common';
import { IsEmail, IsNotEmpty, IsDate, IsString } from 'class-validator';

export class AppointmentDto {
  @Optional()
  id: number; // Assuming the id is of type number for an auto-incremented field in MySQL<

  @IsNotEmpty()
  @IsEmail()
  lawyerEmail: string;

  @IsNotEmpty()
  @IsEmail()
  clientEmail: string;

  @Optional()
  @IsDate()
  date: Date;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  type: string;

  @IsNotEmpty()
  @IsString()
  status: string;

  @Optional()
  todos: string;
}
