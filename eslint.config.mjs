
import globals from 'globals';
import pluginJs from '@eslint/js';
import stylisticPlugin from '@stylistic/eslint-plugin'; // Update the import

export default [
    pluginJs.configs.recommended,
    {
        ignores: [
            'dist/',
            '*.json',
            'node_modules/**',
            'path/to/ignore/**',
        ],
    },
    {
        languageOptions: {
            ecmaVersion: 2023,
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.jest,
            },
        },
    },
    {
        rules: {
            indent: [
                'error', 4
            ],
            semi: [
                'error', 'always'
            ],
            'no-unused-vars': 'off',
            'no-console': 'off',
            'no-var': 'error',
        },
    },
    {
        files: [ '*.config.*' ],
        rules: {
            'no-underscore-dangle': [ 'off' ],
            'import/no-extraneous-dependencies': 'off',
        },
    },
    {
        plugins: { '@stylistic': stylisticPlugin }, // Adjust plugin name
        rules: {
            'max-len': [
                'error', { code: 120 }
            ],
            quotes: [
                'error', 'single'
            ],
            'array-bracket-spacing': [
                'error', 'always'
            ],
            'array-bracket-newline': [
                'error', {
                    'multiline': true, 'minItems': 2
                }
            ],
            'object-curly-spacing': [
                'error', 'always'
            ],
            'object-curly-newline': [
                'error', {
                    'ObjectExpression': {
                        'multiline': true, 'minProperties': 2
                    },
                }
            ],
            'no-multi-spaces': [
                'error',
                {
                    exceptions: {
                        'Property': false,
                        'BinaryExpression': true,
                        'VariableDeclarator': true,
                        'ImportDeclaration': true
                    }
                }
            ],
            'key-spacing': [
                'error', { 'mode': 'strict' }
            ],
            'no-trailing-spaces': 'error',
            'no-multiple-empty-lines': [
                'error', {
                    max: 1,
                    maxBOF: 1,
                }
            ],
        },
    },
];
