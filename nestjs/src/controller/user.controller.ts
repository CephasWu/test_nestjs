import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RegisterDto } from '../dto/user/registerDto';
import { UserService } from '../service/user.service';
import { UpdateDto } from '../dto/user/updateDto';

@ApiTags('users')
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) { }

  @Post()
  @ApiOperation({ summary: '建立用戶' })
  @ApiResponse({ status: 200, description: '建立用戶成功' })
  @ApiResponse({ status: 401, description: '建立用戶失敗' })
  create(@Body() registerDto: RegisterDto) {
    return this.userService.create(registerDto);
  }

  @Get()
  @ApiOperation({ summary: '獲取所有用戶' })
  @ApiResponse({ status: 200, description: '獲取用戶成功' })
  @ApiResponse({ status: 401, description: '獲取用戶失敗' })
  async findAll() {
    return await this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: '根據 ID 獲取用戶' })
  @ApiResponse({ status: 200, description: '獲取用戶成功' })
  @ApiResponse({ status: 401, description: '獲取用戶失敗' })
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: '更新用戶' })
  @ApiParam({ name: 'identification', description: '用戶identification' })
  @ApiResponse({ status: 200, description: '更新成功' })
  @ApiResponse({ status: 401, description: '更新失敗' })
  update(@Param('identification') id: string, @Body() requestBody: UpdateDto) {
    return this.userService.update(id, requestBody);
  }

  @Delete(':id')
  @ApiOperation({ summary: '刪除用戶' })
  @ApiResponse({ status: 200, description: '刪除成功' })
  @ApiResponse({ status: 401, description: '刪除失敗' })
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}