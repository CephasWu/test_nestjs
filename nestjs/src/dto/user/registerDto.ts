import { ApiProperty } from '@nestjs/swagger';
import { UserBaseDto  } from './userDto .dto';
import { Length, MaxLength, MinLength } from 'class-validator';

export class RegisterDto extends UserBaseDto {
    @ApiProperty({
        description: '身分證號碼',
        example: 'A123456789',
        minLength: 10,
        maxLength: 10,
        required: true
    })
    @Length(10, 10, { message: '身分證號碼必須為10個字元' })
    declare identification: string;

    @ApiProperty({
        description: '使用者名稱',
        example: '吳俊賢',
        minLength: 2,
        maxLength: 20,
        required: true
    })
    @MinLength(6, { message: '使用者名稱長度不得少於2個字元' })
    @MaxLength(20, { message: '使用者名稱長度不得超過20個字元' })
    declare userName: string;

    @ApiProperty({
        description: '密碼',
        example: 'password123',
        minLength: 6,
        maxLength: 20,
        required: true
    })
    @MinLength(6, { message: '密碼長度不得少於6個字元' })
    @MaxLength(20, { message: '密碼長度不得超過20個字元' })
    declare password: string;
}