import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export async function swaggerConfig(app: INestApplication): Promise<void> {
    //Swagger Config
    const config = new DocumentBuilder()
        .setTitle('NestJS API')
        .setDescription('The NestJS API description')
        .setVersion('1.0')
        .addTag('users')
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    // 在終端機顯示 Swagger 路徑
    const port = process.env.PORT || 3000;
}