import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthController {
    private readonly authService;
    private readonly jwtService;
    constructor(authService: AuthService, jwtService: JwtService);
    login(loginDto: {
        username: string;
        password: string;
    }): Promise<{
        access_token: string;
    }>;
    getAllRooms(): string;
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
