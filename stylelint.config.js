const sortOrderSmacss = require('stylelint-config-property-sort-order-smacss/generate')

module.exports = {
  plugins: ['stylelint-order'],
  processors: ['stylelint-processor-styled-components'],
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-styled-components',
  ],
  rules: {
    'order/properties-order': [sortOrderSmacss()],
  },
}
