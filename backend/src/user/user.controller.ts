import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  UnprocessableEntityException,
  Put,
  Get,
  Param,
  NotFoundException,
  UseGuards,
  Request,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

import { Roles } from "roles.decorator";
import { RolesGuard } from "roles.guard";

import { UserModel } from "./../models";
import { UserEntity } from "../entities";
import { UserService } from "./user.service";

@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get("/profile")
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Roles("admin", "user")
  async getProfile(@Request() req): Promise<UserEntity[]> {
    return req.user;
  }

  @Get("/:id")
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Roles("admin")
  async getUserById(@Param("id") id: number): Promise<UserEntity> {
    const user = this.userService.findById(id);

    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }

  @Get()
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Roles("admin")
  async getAllUsers(): Promise<UserEntity[]> {
    return await this.userService.findAll();
  }

  @Post()
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Roles("admin")
  async addUser(
    @Body(new ValidationPipe()) userModel: UserModel
  ): Promise<UserEntity> {
    const user = await this.userService.findByEmail(userModel.email);

    if (user) {
      throw new UnprocessableEntityException();
    }

    return await this.userService.create(userModel);
  }

  @Put()
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Roles("admin")
  async updateUser(@Body() user: UserModel): Promise<UserEntity> {
    const userEntity = await this.userService.findByEmail(user.email);

    if (!userEntity) {
      throw new UnprocessableEntityException();
    }

    return await this.userService.update(userEntity, user);
  }
}
