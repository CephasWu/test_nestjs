import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { RegisterDto } from '../dto/user/registerDto';
import { UpdateDto } from '../dto/user/updateDto';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    create(userData: RegisterDto): Promise<string | User>;
    findAll(): Promise<User[]>;
    findOne(index: number): Promise<string | User>;
    update(identification: string, updateDto: UpdateDto): Promise<void>;
    remove(id: number): Promise<{
        success: boolean;
        message: string;
    } | {
        success: boolean;
        message: string;
    }>;
    count(): Promise<number>;
}
