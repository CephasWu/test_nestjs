import { OnApplicationBootstrap } from '@nestjs/common';
import { UserService } from '../service/user.service';
export declare class AppModule implements OnApplicationBootstrap {
    private readonly userService;
    constructor(userService: UserService);
    onApplicationBootstrap(): Promise<void>;
    private seedDatabase;
}
