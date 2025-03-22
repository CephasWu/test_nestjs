import { Injectable, NotFoundException, InternalServerErrorException, BadRequestException } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterDto } from '../dto/user/registerDto';
import { UpdateDto } from '../dto/user/updateDto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }

  async create(userData: RegisterDto): Promise<string | User> {
    let {identification}=userData;
    let flag = await  this.userRepository.findOneBy({identification});
    if(flag){
      return "此帳號已被註冊";
    }
    const newUser = this.userRepository.create(userData);
    return this.userRepository.save(newUser);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }
  findOne(index: number) {
    return this.userRepository.findOneBy({ id: index })
      .then(user => {
        if (!user) {
          return `User with identification ${index} not found`
        }
        return user;
      })
  }

  async update(identification: string, updateDto: UpdateDto): Promise<void> {
    try {
      let { userName, password } = updateDto;
      let user = await this.userRepository.findOneBy({ identification });

      if (!user) {
        throw new NotFoundException(`User with identification ${identification} not found`);
      }

      if (userName?.trim?.()) {
        user.userName = userName;
      }

      if (password?.trim?.()) {
        user.password = password;
      }
      await this.userRepository.save(user);
    } catch (e) {
      if (e instanceof SyntaxError) {
        throw new BadRequestException('Invalid JSON format in request body');
      }
      throw new InternalServerErrorException(`處理請求時發生錯誤: ${e.message}`);
    }
  }

  remove(id: number) {
    return this.userRepository.delete(id)
      .then(result => {
        if (result.affected === 0) {
          return { success: false, message: `User with ID ${id} not found` }
        }
        return { success: true, message: `User with ID ${id} deleted successfully` }
      })
      .catch(e => {
        return {
          success: true, message: `Error deleting user with ID ${id}: ${e.message}`
        }
      });
  }

  count(): Promise<number> {
    return this.userRepository.count();
  }
}
