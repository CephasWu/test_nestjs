import { AuthService } from '../service/auth.service';
import { LoginDto } from '../dto/user/loginDto';
import { RegisterDto } from '../dto/user/registerDto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginDto: LoginDto): Promise<{
        status: import("@nestjs/common").HttpStatus;
        message: string;
        access_token: string;
    }>;
    register(registerDto: RegisterDto): Promise<{
        status: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
}
