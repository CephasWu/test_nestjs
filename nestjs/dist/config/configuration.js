"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = void 0;
const dotenv = require("dotenv");
const environment = hasDebugOrDevFlag();
exports.environment = environment;
dotenv.config({ path: `.env.${environment}` });
function hasDebugOrDevFlag() {
    return process.argv.some(arg => arg.includes('--debug') || arg.includes('--dev')) ? 'dev' : 'production';
}
//# sourceMappingURL=configuration.js.map