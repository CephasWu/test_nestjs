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
exports.UpdateDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const userDto__dto_1 = require("./userDto .dto");
const class_validator_1 = require("class-validator");
class UpdateDto extends userDto__dto_1.UserBaseDto {
    userName = '';
    password = '';
}
exports.UpdateDto = UpdateDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '使用者名稱',
        example: '吳俊賢',
        minLength: 2,
        maxLength: 20,
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MinLength)(2, { message: '使用者名稱長度不得少於2個字元' }),
    (0, class_validator_1.MaxLength)(20, { message: '使用者名稱長度不得超過20個字元' }),
    (0, class_validator_1.Matches)(/^[\u4e00-\u9fa5]+$/, {
        message: '使用者名稱只能包含中文字符'
    }),
    __metadata("design:type", String)
], UpdateDto.prototype, "userName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '密碼',
        example: 'password123',
        minLength: 6,
        maxLength: 20,
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MinLength)(6, { message: '密碼長度不得少於6個字元' }),
    (0, class_validator_1.MaxLength)(20, { message: '密碼長度不得超過20個字元' }),
    (0, class_validator_1.Matches)(/^[\x20-\x7E]+$/, {
        message: '密碼只能包含一般使用符號'
    }),
    __metadata("design:type", String)
], UpdateDto.prototype, "password", void 0);
//# sourceMappingURL=updateDto.js.map