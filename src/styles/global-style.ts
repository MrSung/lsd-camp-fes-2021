import { createGlobalStyle } from 'styled-components'

import { Style } from '@/const/style'

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${Style.COLOR.LEMON_CHIFFON};
    color: ${Style.COLOR.RAISIN_BLACK};
    font-family: 'Nunito Sans', 'ヒラギノ角ゴシック', 'Hiragino Sans', 'ＭＳ ゴシック',
      sans-serif;
    line-height: 1.7;
  }

  ul {
    padding-left: 0;
    list-style: none;
  }

  a {
    color: ${Style.COLOR.BLUE_JEANS};
    text-decoration: none;

    &:hover {
      color: ${Style.COLOR.GREEN_BLUE_CRAYOLA};
    }
  }
`
