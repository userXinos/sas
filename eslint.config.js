import antfu from '@antfu/eslint-config';
import pluginVue from 'eslint-plugin-vue';

// noinspection JSUnusedGlobalSymbols
export default antfu(
  /** @type {import('antfu').OptionsConfig} */
  {
    stylistic: {
      semi: true,
      jsx: false,
    },
    typescript: true,
    formatters: true,
    jsonc: false,
    yaml: false,
    toml: false,
  },
  [
    ...pluginVue.configs['flat/essential'],
    {
      name: 'vue pages',
      files: ['**/pages/**/*.vue'],
      rules: {
        'vue/multi-word-component-names': 0,
      },
    },
    {
      name: 'vue',
      files: ['**/*.vue'],
      rules: {
        'vue/max-attributes-per-line': ['error', {
          singleline: { max: 2 },
          multiline: { max: 1 },
        }],
      },
    },
  ],
);
