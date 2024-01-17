import { IsEmail, IsNotEmpty, IsPhoneNumber, Min } from 'class-validator';

export class SignUpDto {
  @IsNotEmpty()
  firstname: string;
  @IsNotEmpty()
  lastname: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  password: string;
  @IsNotEmpty()
  @IsPhoneNumber()
  phoneNumber: string;
  @IsNotEmpty()
  @Min(21)
  age: number;
  @IsNotEmpty()
  city: string;
  @IsNotEmpty()
  bio: string;
  @IsNotEmpty()
  speciality: string;
}
