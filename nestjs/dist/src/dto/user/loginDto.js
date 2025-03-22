"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const registerDto_1 = require("./registerDto");
class LoginDto extends (0, swagger_1.PickType)(registerDto_1.RegisterDto, ['identification', 'password']) {
}
exports.LoginDto = LoginDto;
//# sourceMappingURL=loginDto.js.map