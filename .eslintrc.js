module.exports = {
  "root": true,
  "env": {
    "node": true
  },
  "extends": [
    "plugin:vue/essential",
    "@vue/airbnb",
    "@vue/typescript"
  ],
  "rules": {
    "comma-dangle": 0,
    "max-len": [2, 12000, 4, {"ignoreUrls": true}],
    "class-methods-use-this": 0,
    "no-invalid-this": 0,
    "babel/no-invalid-this": 0,
    "camelcase": 0,
    "no-plusplus": 0,
    "semi": 0,
    "no-underscore-dangle": 0,
    "no-param-reassign" : 0,
    "import/prefer-default-export": 0,
    "import/extensions": 0,
    "prefer-destructuring" : 0,
    "import/no-cycle" : 0,
    "no-trailing-spaces" : 0,
    "no-unused-vars" : 0,
    "qoutes" : 0,
    "key-spacing" : 0,
    "global-require": 0
  },
  "parserOptions": {
    "parser": "@typescript-eslint/parser"
  }
}
