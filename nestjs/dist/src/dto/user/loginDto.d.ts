import { RegisterDto } from './registerDto';
declare const LoginDto_base: import("@nestjs/common").Type<Pick<RegisterDto, "identification" | "password">>;
export declare class LoginDto extends LoginDto_base {
}
export {};
