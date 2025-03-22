import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty, Matches } from 'class-validator';
import * as bcrypt from 'bcrypt';

@Entity()
export class User {
    @PrimaryGeneratedColumn('identity')
    id: number;

    @Column({ unique: true })
    @IsNotEmpty()
    @Matches(/^[A-Z][12]\d{8}$/, {
        message: '身分證號碼格式不正確'
    })
    identification: string;

    @Column()
    userName: string;

    @Column()
    password: string;

    @BeforeInsert()
    @BeforeUpdate()
    async hashPassWord() {
        if (this.password || this.password.length <= 20) {
            const salt = await bcrypt.genSalt();
            this.password = await bcrypt.hash(this.password, salt);
        }
    }

    async validatePassword(password: string): Promise<boolean> {
        return bcrypt.compare(password, this.password);
    }
}
