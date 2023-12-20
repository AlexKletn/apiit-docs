const rules = {
  'import/extensions': 'off',
  'import/prefer-default-export': 'off',
  "import-newlines/enforce": [
    "error",
    {
      "items": 2,
      "max-len": 100,
      "semi": false
    }
  ],
  'no-underscore-dangle': [2, {
    allowAfterThis: true
  }],
  "react/jsx-max-props-per-line": ["error", {
    "maximum": 1,
    "when": "always"
  }],
  "react/jsx-closing-bracket-location": ["error", {selfClosing: 'line-aligned'}],
  "react/jsx-closing-tag-location": "error",
  "react/jsx-indent-props": ["error", 2],
  "react/jsx-first-prop-new-line": ["error", "multiprop"],
  "import/order": ["error", {
    groups: ["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"]
  }],
};

module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    'alloy',
    'alloy/react',
    'alloy/typescript',
  ],
  env: {
    browser: true,
    node: true
  },
  plugins: [
    "react",
    "import-newlines",
    "import",
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      "jsx": true
    }
  },
  settings: {
    "react": {
      "version": "detect"
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.ts', '.tsx'],
      },
      typescript: true,
    },
  },
  rules: {
    ...rules
  },

  overrides: [
    {
      files: ['vite.config.ts'],
      rules: {
        ...rules,

        'import/no-extraneous-dependencies': [
          'off',
        ],
      },
    },
  ],
};
