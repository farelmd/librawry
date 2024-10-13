import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async register(@Body() { username, fullname, password }: CreateUserDto) {
    await this.usersService.createUser(username, fullname, password);
    return {
      status: 'success',
      message: 'User registered successfully',
    };
  }
}