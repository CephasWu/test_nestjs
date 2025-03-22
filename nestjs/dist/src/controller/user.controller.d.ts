import { RegisterDto } from '../dto/user/registerDto';
import { UserService } from '../service/user.service';
import { UpdateDto } from '../dto/user/updateDto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(registerDto: RegisterDto): Promise<string | import("../entities/user.entity").User>;
    findAll(): Promise<import("../entities/user.entity").User[]>;
    findOne(id: string): Promise<string | import("../entities/user.entity").User>;
    update(id: string, requestBody: UpdateDto): Promise<void>;
    remove(id: string): Promise<{
        success: boolean;
        message: string;
    } | {
        success: boolean;
        message: string;
    }>;
}
