//環境設定檔
import '../config/configuration';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './module/app.module';
import { swaggerConfig } from '../config/swaggerConfig';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));
  //sawgger
  swaggerConfig(app);

  await app.listen(process.env.PORT ?? 3000);

  // 啟動應用
  const port = process.env.PORT || 3000;
  console.log(`應用已啟動: http://localhost:${port}`);
  console.log(`Swagger 文檔: http://localhost:${port}/api`);
}
bootstrap();
