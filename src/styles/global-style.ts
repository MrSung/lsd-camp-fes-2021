import { createGlobalStyle } from 'styled-components'

import { Style } from '@/const/style'

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${Style.COLOR.LEMON_CHIFFON};
    color: ${Style.COLOR.RAISIN_BLACK};
    font-family: 'Nunito Sans', 'ヒラギノ角ゴシック', 'Hiragino Sans', 'ＭＳ ゴシック',
      sans-serif;
    font-size: 16px;
    line-height: 1.7;
  }

  ul {
    padding-left: 0;
    list-style: none;
  }

  a {
    color: ${Style.COLOR.RAISIN_BLACK};
    text-decoration: none;

    &:hover {
      color: ${Style.COLOR.RAISIN_GRAY};
    }
  }
`
