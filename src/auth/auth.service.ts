import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  user: any;
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
    ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      this.user = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: this.user.email, sub: this.user.id };
    return {
      id: this.user.id,
      username: this.user.email,
      token: this.jwtService.sign(payload),
    };
  }
}
