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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const registerDto_1 = require("../dto/user/registerDto");
const user_service_1 = require("../service/user.service");
const updateDto_1 = require("../dto/user/updateDto");
let UserController = class UserController {
    userService;
    constructor(userService) {
        this.userService = userService;
    }
    create(registerDto) {
        return this.userService.create(registerDto);
    }
    async findAll() {
        return await this.userService.findAll();
    }
    findOne(id) {
        return this.userService.findOne(+id);
    }
    update(id, requestBody) {
        return this.userService.update(id, requestBody);
    }
    remove(id) {
        return this.userService.remove(+id);
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: '建立用戶' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: '建立用戶成功' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: '建立用戶失敗' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [registerDto_1.RegisterDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: '獲取所有用戶' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: '獲取用戶成功' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: '獲取用戶失敗' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: '根據 ID 獲取用戶' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: '獲取用戶成功' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: '獲取用戶失敗' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: '更新用戶' }),
    (0, swagger_1.ApiParam)({ name: 'identification', description: '用戶identification' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: '更新成功' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: '更新失敗' }),
    __param(0, (0, common_1.Param)('identification')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, updateDto_1.UpdateDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: '刪除用戶' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: '刪除成功' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: '刪除失敗' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "remove", null);
exports.UserController = UserController = __decorate([
    (0, swagger_1.ApiTags)('users'),
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map