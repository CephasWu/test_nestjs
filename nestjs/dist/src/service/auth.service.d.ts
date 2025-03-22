import { HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from '../dto/user/loginDto';
import { RegisterDto } from '../dto/user/registerDto';
export declare class AuthService {
    private readonly userRepository;
    private readonly jwtService;
    constructor(userRepository: Repository<User>, jwtService: JwtService);
    register(registerDto: RegisterDto): Promise<{
        status: HttpStatus;
        message: string;
    }>;
    login(loginDto: LoginDto): Promise<{
        status: HttpStatus;
        message: string;
        access_token: string;
    }>;
}
