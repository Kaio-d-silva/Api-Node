import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest', // 👉 necessário para TypeScript
  testEnvironment: 'node', // ou jsdom, dependendo do projeto

  // Transforma arquivos TypeScript com ts-jest
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },

  // Para reconhecer arquivos TS como válidos
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  // Localização dos testes (ajuste se necessário)
  testMatch: ['**/tests/**/*.test.ts'],

  // Ignora transformação de node_modules (ok por padrão)
  transformIgnorePatterns: ['/node_modules/'],
};

export default config;
