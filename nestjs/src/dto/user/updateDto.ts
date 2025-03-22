import { ApiProperty } from '@nestjs/swagger';
import { UserBaseDto } from './userDto .dto';
import { IsOptional, Matches, MaxLength, MinLength, ValidateIf } from 'class-validator';

export class UpdateDto extends UserBaseDto {
    @ApiProperty({
        description: '使用者名稱',
        example: '吳俊賢',
        minLength: 2,
        maxLength: 20,
        required: false
    })
    @IsOptional()
    @MinLength(2, { message: '使用者名稱長度不得少於2個字元' })
    @MaxLength(20, { message: '使用者名稱長度不得超過20個字元' })
    @Matches(/^[\u4e00-\u9fa5]+$/, { 
        message: '使用者名稱只能包含中文字符' 
      })
    userName: string = '';

    @ApiProperty({
        description: '密碼',
        example: 'password123',
        minLength: 6,
        maxLength: 20,
        required: false
    })
    @IsOptional()
    @MinLength(6, { message: '密碼長度不得少於6個字元' })
    @MaxLength(20, { message: '密碼長度不得超過20個字元' })
    @Matches(/^[\x20-\x7E]+$/, { 
        message: '密碼只能包含一般使用符號' 
      })
    password: string = '';
}