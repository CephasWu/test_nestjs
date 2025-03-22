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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../entities/user.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let UserService = class UserService {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async create(userData) {
        let { identification } = userData;
        let flag = await this.userRepository.findOneBy({ identification });
        if (flag) {
            return "此帳號已被註冊";
        }
        const newUser = this.userRepository.create(userData);
        return this.userRepository.save(newUser);
    }
    findAll() {
        return this.userRepository.find();
    }
    findOne(index) {
        return this.userRepository.findOneBy({ id: index })
            .then(user => {
            if (!user) {
                return `User with identification ${index} not found`;
            }
            return user;
        });
    }
    async update(identification, updateDto) {
        try {
            let { userName, password } = updateDto;
            let user = await this.userRepository.findOneBy({ identification });
            if (!user) {
                throw new common_1.NotFoundException(`User with identification ${identification} not found`);
            }
            if (userName?.trim?.()) {
                user.userName = userName;
            }
            if (password?.trim?.()) {
                user.password = password;
            }
            await this.userRepository.save(user);
        }
        catch (e) {
            if (e instanceof SyntaxError) {
                throw new common_1.BadRequestException('Invalid JSON format in request body');
            }
            throw new common_1.InternalServerErrorException(`處理請求時發生錯誤: ${e.message}`);
        }
    }
    remove(id) {
        return this.userRepository.delete(id)
            .then(result => {
            if (result.affected === 0) {
                return { success: false, message: `User with ID ${id} not found` };
            }
            return { success: true, message: `User with ID ${id} deleted successfully` };
        })
            .catch(e => {
            return {
                success: true, message: `Error deleting user with ID ${id}: ${e.message}`
            };
        });
    }
    count() {
        return this.userRepository.count();
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map