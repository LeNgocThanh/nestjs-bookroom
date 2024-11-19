import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { User } from '../user/schema/user.schema';
export declare class AuthService {
    private readonly jwtService;
    private userModel;
    constructor(jwtService: JwtService, userModel: Model<User>);
    validateUser(username: string, pass: string): Promise<any>;
    generateToken(user: any): Promise<{
        access_token: string;
    }>;
    verifyToken(token: string): Promise<{
        valid: boolean;
        decoded: any;
        error?: undefined;
    } | {
        valid: boolean;
        error: any;
        decoded?: undefined;
    }>;
}
