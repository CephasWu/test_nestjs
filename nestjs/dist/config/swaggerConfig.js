"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerConfig = swaggerConfig;
const swagger_1 = require("@nestjs/swagger");
async function swaggerConfig(app) {
    const config = new swagger_1.DocumentBuilder()
        .setTitle('NestJS API')
        .setDescription('The NestJS API description')
        .setVersion('1.0')
        .addTag('users')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    const port = process.env.PORT || 3000;
}
//# sourceMappingURL=swaggerConfig.js.map