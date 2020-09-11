import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAll(): Promise<User[]> {
    return this.usersService.getAll();
  }

  @Get(':username')
  findOneUser(@Param('username') username): Promise<User> {
    return this.usersService.findOneUser(username);
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.createUser(createUserDto);
  }

  @Delete(':id')
  deleteUser(@Param('id') id): Promise<void> {
    return this.usersService.deleteUser(id);
  }

  @Put(':id')
  updateUser(
    @Body() updateUserDto: CreateUserDto,
    @Param('id') id
  ): Promise<void> {
    return this.usersService.updateUser(id, updateUserDto);
  }
}
