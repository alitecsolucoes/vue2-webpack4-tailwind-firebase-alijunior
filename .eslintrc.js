// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    // 'plugin:vue/essential', 
    // // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'eslint:recommended',
    'plugin:vue/recommended',
    //'standard'
    //'@vue/standard'
  ],
  
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  "rules": {
    "no-multiple-empty-lines": ["error", { "max": 1, "maxBOF": 1, "maxEOF": 1}],
    "key-spacing": [2, {
      "singleLine": {
          "beforeColon": false,
          "afterColon": true
      },
      "multiLine": {
          "beforeColon": false,
          "afterColon": true,
          "align": "colon"
      }
    }],
    "space-before-blocks": ["error", { "functions": "always", "keywords": "always", "classes": "never" }],
    "space-in-parens": ["error", "never"],
    "no-multi-spaces": "error",
    "comma-spacing": ["error", { "before": false, "after": true }],
    "array-bracket-spacing": ["error", "never"],
    "space-before-function-paren": ["error", "never"],
    "no-whitespace-before-property": "error",
    "brace-style": "error",
    "object-curly-spacing": ["error", "always"],
    "no-unused-vars": "off",
    "no-console": "off",
    "no-undef": "off",




    "vue/require-prop-types": "off",
    "vue/no-unused-vars": "off",
    "vue/script-indent": ["error", 2, { "baseIndent": 0 }],
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "never"
    }],
    "vue/multiline-html-element-content-newline": ["error", {
      "ignoreWhenEmpty": true,
      "ignores": ["pre", "textarea"],
      "allowEmptyLines": false
    }],
    "vue/max-attributes-per-line": ["error", {
      "singleline": 3,
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }]
  },
  "overrides": [
    {
      "files": ["*.vue"],
      "rules": {
        "indent": "off"
      }
    }
  ]

  //rules: {
    // allow async-await
    //'generator-star-spacing': 'off',
    // allow debugger during development
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'camelcase': 'off',
    // 'no-unused-vars' : 'off',
    // 'eqeqeq': 'off',
    // 'vue/order-in-components': 'error',
    // 'no-constant-condition': 'off',
    // 'vue/no-unused-vars': 'error',
    // 'vue/require-prop-types': 'off',
    // //"vue/padding-line-between-blocks": ["error", "always"],
    // "vue/array-bracket-spacing": ["error", "always"],
    // "vue/max-attributes-per-line": ["error", {
    //   "singleline": 3,
    //   "multiline": {
    //     "max": 1,
    //     "allowFirstLine": false
    //   }
    // }],
    // "vue/script-indent": ["error", TYPE, {
    //   "baseIndent": 0,
    //   "switchCase": 0,
    //   "ignores": []
    // }]
    // "vue/max-len": ["error", {
    //   "code": 80,
    //   "template": 80,
    //   "tabWidth": 2,
    //   "comments": 80,
    //   "ignorePattern": "",
    //   "ignoreComments": false,
    //   "ignoreTrailingComments": false,
    //   "ignoreUrls": false,
    //   "ignoreStrings": false,
    //   "ignoreTemplateLiterals": false,
    //   "ignoreRegExpLiterals": false,
    //   "ignoreHTMLAttributeValues": false,
    //   "ignoreHTMLTextContents": false,
    // }],
    // "vue/operator-linebreak": ["error", "before"]
  //}
}
