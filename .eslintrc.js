module.exports = {
    env: {
        commonjs: true,
        es6: true,
    },
    plugins: ['prettier', '@typescript-eslint'],
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
    },
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {
        'guard-for-in': 2,
        'no-prototype-builtins': 0,
        'prettier/prettier': 'error',
        'semi': ['error', 'always'],
    },
};
