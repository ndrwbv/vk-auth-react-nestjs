import { IsString, IsNumber, IsEmail } from "class-validator";

export enum IGrant {
  ADMIN = 0,
  USER = 1,
}

export class UserModel {
  @IsEmail()
  email: string;

  @IsString()
  name: string;

  @IsString()
  password: string;

  @IsNumber()
  grant: IGrant;

  avatar_url?: string;
}
