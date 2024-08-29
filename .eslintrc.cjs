module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'airbnb',
        // 'eslint:recommended',
        'plugin:react/jsx-runtime',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:prettier/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: { react: { version: '18.2' } },
    plugins: ['react-refresh', 'react', 'import', 'jsx-a11y'],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'alway',
            },
        ],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        'jsx-a11y/no-autofocus': 'off',
        'no-alert': 'off',
        'react/require-default-props': 0,
    },
};
