import { IsEmail, IsString } from "class-validator";

export class AuthModel {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}

export class AuthVK {
  code: string;
}
