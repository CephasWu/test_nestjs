import * as dotenv from 'dotenv';

const environment: string = hasDebugOrDevFlag();
dotenv.config({ path: `.env.${environment}` });

export {environment} ;

function hasDebugOrDevFlag(): string {
    return process.argv.some(arg => arg.includes('--debug') || arg.includes('--dev')) ? 'dev' : 'production';
}