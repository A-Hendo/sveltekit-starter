// @ts-check

import eslint from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import eslintPluginSvelte from 'eslint-plugin-svelte';
import svelteParser from "svelte-eslint-parser";
import tseslint from 'typescript-eslint';

export default [
    // add more generic rule sets here, such as:
    // js.configs.recommended,
    ...eslintPluginSvelte.configs['flat/recommended'],
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ["**/*.svelte", "*.svelte"],
        languageOptions: {
            parser: svelteParser,
            parserOptions: {
                parser: tsParser,
            },
        },
    },
    {
        rules: {

            // override/add rules settings here, such as:
            // 'svelte/rule-name': 'error'
        },
    },
    {
        ignores: ["**/.svelte-kit/*", "**/.sst/*"]
    },
];
