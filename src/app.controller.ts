import { Controller, Get, Request, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
  }

  @UseGuards(JwtAuthGuard)
  @Get('books')
  getBook(@Request() req) {
    return req.books;
  }

  @UseGuards(JwtAuthGuard)
  @Get('users')
  getUser(@Request() req) {
    return req.user;
  }
}
