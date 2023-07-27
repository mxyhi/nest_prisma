import { User } from '@prisma/client';
// import { IsNotEmpty, IsNumber, IsString, IsOptional } from 'class-validator';
// import { Type } from 'class-transformer';

export class CreateUserDto implements Omit<User, 'id'> {
  // @IsNotEmpty()
  // @IsString()
  email: string;
  // @IsNotEmpty()
  // @IsString()
  name: string;
}
