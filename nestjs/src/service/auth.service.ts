import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from '../dto/user/loginDto';
import { RegisterDto } from '../dto/user/registerDto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) { }

  async register(registerDto: RegisterDto) {
    const { identification, userName, password } = registerDto;

    const existingUser = await this.userRepository.findOne({
      where: { identification }
    });
    if (existingUser) {
      throw new HttpException('使用者已存在', HttpStatus.BAD_REQUEST);
    }

    try {
      const user = this.userRepository.create({ identification, userName, password });
      await this.userRepository.save(user);

      return {
        status: HttpStatus.OK,
        message: '註冊成功'
      };
    } catch (e) {
      throw new HttpException(e.message || '註冊失敗', HttpStatus.BAD_REQUEST);
    }
  }

  async login(loginDto: LoginDto) {
    const { identification, password } = loginDto;
    const user = await this.userRepository.findOne({
      where: { identification }
    });

    if (!user) {
      throw new HttpException('用戶不存在', HttpStatus.BAD_REQUEST);
    }

    const isMatch = await user.validatePassword(password);
    if (!isMatch) {
      throw new HttpException('密碼錯誤', HttpStatus.BAD_REQUEST);
    }

    const token = await this.jwtService.signAsync({
      sub: user.id,
      username: user.identification
    });

    return {
      status: HttpStatus.OK,
      message: '登入成功',
      access_token: token,
    };
  }
}
