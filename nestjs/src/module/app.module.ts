import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { UserModule } from '../module/user.module';
import { UserService } from '../service/user.service';
import { AuthModule } from '../module/auth.module';
import { UserController } from '../controller/user.controller';
import { AuthController } from '../controller/auth.controller';
import { User } from '../entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: join(__dirname, '..', 'database.sqlite'),
      entities: [User],
      synchronize: process.env.NODE_ENV !== 'production',
    }),
    AuthModule,
    UserModule,
  ],
  controllers: [UserController, AuthController],
})
export class AppModule implements OnApplicationBootstrap {
  constructor(
    private readonly userService: UserService
  ) { }

  async onApplicationBootstrap() {
    if (process.env.NODE_ENV === 'dev') {
      await this.seedDatabase();
    }
  }

  private async seedDatabase() {
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
}