const nextJest = require('next/jest'); // eslint-disable-line @typescript-eslint/no-var-requires

const createJestConfig = nextJest({ dir: './' });

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/utils/(.*)$': '<rootDir>/utils/$1',
  },
};

module.exports = createJestConfig(customJestConfig);
