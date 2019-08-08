import { Controller, Request, Post, Get, UseGuards, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { UserService } from './user/user.service';

@Controller('api')
export class AppController {

  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('home')
  getProfile(@Request() req) {
    return req.body;
  }

  // @UseInterceptors(ClassSerializerInterceptor)
  @Post('register')
  async registerUser(@Request() req) {
    return this.userService.create(req.body);
  }

}
