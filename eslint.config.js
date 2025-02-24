import stylistic from '@stylistic/eslint-plugin'

export default [
    {
        plugins: {
            '@stylistic': stylistic,
        },
        rules: {
            "comma-dangle": ["error", "always-multiline"],
            '@stylistic/indent': ['error', 2],
            '@stylistic/quotes': ['error', 'backtick'],
            "semi": ["error", "always"],
            "linebreak-style": ["error", "unix"],
            "eol-last": ["error", "always"]
        }
    }
]
