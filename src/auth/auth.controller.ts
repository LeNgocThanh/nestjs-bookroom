import { Controller, Post, Body, UnauthorizedException, Get, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
  ) {}

  @Post('login')
  async login(@Body() loginDto: { username: string; password: string }) {
    console.log('loginDto',loginDto);
    const user = await this.authService.validateUser(loginDto.username, loginDto.password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }    
    return this.authService.generateToken(user);
  }
  @Get()
  getAllRooms() {
    return 'successFull';
  }
  @Get('verify-token')
  async verifyToken(@Query('token') token: string) {   
    return this.authService.verifyToken(token);
  }
}