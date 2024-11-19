import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../user/schema/user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userModel.findOne({ username });     
    if (user && await bcrypt.compare(pass, user.password)) {
      const { password, ...result } = user.toObject();     
      return result;
    }
    return null;
  }

  async generateToken(user: any) {
    const payload = { username: user.username, sub: user._id };    
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async verifyToken(token: string) {
    try {
      const decoded = this.jwtService.verify(token);      
      return { valid: true, decoded };
    } catch (error) {      
      return { valid: false, error: error.message };
    }
  }
}