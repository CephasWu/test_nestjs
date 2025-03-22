"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../config/configuration");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./module/app.module");
const swaggerConfig_1 = require("../config/swaggerConfig");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true, whitelist: true }));
    (0, swaggerConfig_1.swaggerConfig)(app);
    await app.listen(process.env.PORT ?? 3000);
    const port = process.env.PORT || 3000;
    console.log(`應用已啟動: http://localhost:${port}`);
    console.log(`Swagger 文檔: http://localhost:${port}/api`);
}
bootstrap();
//# sourceMappingURL=main.js.map