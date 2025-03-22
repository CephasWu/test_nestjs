"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const path_1 = require("path");
const user_module_1 = require("../module/user.module");
const user_service_1 = require("../service/user.service");
const auth_module_1 = require("../module/auth.module");
const user_controller_1 = require("../controller/user.controller");
const auth_controller_1 = require("../controller/auth.controller");
const user_entity_1 = require("../entities/user.entity");
let AppModule = class AppModule {
    userService;
    constructor(userService) {
        this.userService = userService;
    }
    async onApplicationBootstrap() {
        if (process.env.NODE_ENV === 'dev') {
            await this.seedDatabase();
        }
    }
    async seedDatabase() {
        const usersCount = await this.userService.count();
        if (usersCount === 0) {
            const users = [
                {
                    identification: 'A123456789',
                    userName: 'Administrator',
                    password: 'admin123',
                },
                {
                    identification: 'B223456789',
                    userName: 'Regular User',
                    password: 'user123',
                },
            ];
            for (const userData of users) {
                await this.userService.create(userData);
            }
            console.log('Database seeded with initial data');
        }
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'sqlite',
                database: (0, path_1.join)(__dirname, '..', 'database.sqlite'),
                entities: [user_entity_1.User],
                synchronize: process.env.NODE_ENV !== 'production',
            }),
            auth_module_1.AuthModule,
            user_module_1.UserModule,
        ],
        controllers: [user_controller_1.UserController, auth_controller_1.AuthController],
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], AppModule);
//# sourceMappingURL=app.module.js.map