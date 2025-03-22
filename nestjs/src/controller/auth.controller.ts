import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { LoginDto } from '../dto/user/loginDto';
import { RegisterDto } from '../dto/user/registerDto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) {}

  @Post('/login')
  @ApiOperation({ summary: '用户登錄' })
  @ApiResponse({ status: 200, description: '登錄成功' })
  @ApiResponse({ status: 401, description: '登錄失敗' })
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post('/register')
  @ApiOperation({ summary: '用户註冊' })
  @ApiResponse({ status: 200, description: '註冊成功' })
  @ApiResponse({ status: 401, description: '註冊失敗' })
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }
}
