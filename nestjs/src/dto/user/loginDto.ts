import { PickType } from '@nestjs/swagger';
import { RegisterDto } from './registerDto';

export class LoginDto extends PickType(RegisterDto, ['identification', 'password'] as const) { }