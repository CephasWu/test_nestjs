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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../entities/user.entity");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    userRepository;
    jwtService;
    constructor(userRepository, jwtService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }
    async register(registerDto) {
        const { identification, userName, password } = registerDto;
        const existingUser = await this.userRepository.findOne({
            where: { identification }
        });
        if (existingUser) {
            throw new common_1.HttpException('使用者已存在', common_1.HttpStatus.BAD_REQUEST);
        }
        try {
            const user = this.userRepository.create({ identification, userName, password });
            await this.userRepository.save(user);
            return {
                status: common_1.HttpStatus.OK,
                message: '註冊成功'
            };
        }
        catch (e) {
            throw new common_1.HttpException(e.message || '註冊失敗', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async login(loginDto) {
        const { identification, password } = loginDto;
        const user = await this.userRepository.findOne({
            where: { identification }
        });
        if (!user) {
            throw new common_1.HttpException('用戶不存在', common_1.HttpStatus.BAD_REQUEST);
        }
        const isMatch = await user.validatePassword(password);
        if (!isMatch) {
            throw new common_1.HttpException('密碼錯誤', common_1.HttpStatus.BAD_REQUEST);
        }
        const token = await this.jwtService.signAsync({
            sub: user.id,
            username: user.identification
        });
        return {
            status: common_1.HttpStatus.OK,
            message: '登入成功',
            access_token: token,
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map