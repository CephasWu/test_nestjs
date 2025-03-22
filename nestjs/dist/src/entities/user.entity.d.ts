export declare class User {
    id: number;
    identification: string;
    userName: string;
    password: string;
    hashPassWord(): Promise<void>;
    validatePassword(password: string): Promise<boolean>;
}
