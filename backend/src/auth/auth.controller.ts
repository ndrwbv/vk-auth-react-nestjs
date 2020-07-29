import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  UnprocessableEntityException,
} from "@nestjs/common";
import { AuthModel, UserModel, AuthVK, IGrant } from "./../models";
import { AuthService } from "./auth.service";
import { UserService } from "./../user";

@Controller("auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService
  ) {}

  @Post("/login/vk")
  async vk(@Body(new ValidationPipe()) auth: AuthVK): Promise<any> {
    let authData;

    try {
      authData = await this.authService.getVkToken(auth.code);
    } catch (err) {
      throw new UnprocessableEntityException("Wrong VK code");
    }

    if (!authData.data.hasOwnProperty("email")) {
      throw new UnprocessableEntityException("Email should be provided");
    }

    const emailUser = await this.userService.findByEmail(authData.data.email);

    if (emailUser) {
      return this.authService.authenticate(emailUser, true);
    }

    try {
      const { data } = await this.authService.getUserDataFromVk(
        authData.data.user_id,
        authData.data.access_token
      );

      const profile = data.response[0];

      let user: UserModel = {
        email: authData.data.email,
        password: null,
        name: `${profile.first_name} ${profile.last_name}`,
        avatar_url: profile.photo_400,
        grant: IGrant.USER,
      };

      await this.userService.create(user);

      return this.authService.authenticate(user, true);
    } catch (err) {
      throw new UnprocessableEntityException(err);
    }
  }

  @Post("/login")
  async login(@Body(new ValidationPipe()) auth: AuthModel): Promise<string> {
    return this.authService.authenticate(auth);
  }

  @Post("/register")
  async register(
    @Body(new ValidationPipe()) userModel: UserModel
  ): Promise<string> {
    const emailExists = await this.userService.findByEmail(userModel.email);

    if (emailExists) {
      throw new UnprocessableEntityException();
    }

    await this.userService.create(userModel);

    return this.authService.authenticate(userModel);
  }
}
