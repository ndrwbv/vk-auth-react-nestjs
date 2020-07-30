import { IsString, IsNumber, IsEmail } from "class-validator";

export enum IGrant {
  ADMIN = 0,
  USER = 1,
}

export class UserModel {
  vk_id?: number;

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

export class UserDTO {
  id: number;
  vk_id: number;
  email: string;
  name: string;
  grant: IGrant;
  avatar_url: string;
  token: string;
}
