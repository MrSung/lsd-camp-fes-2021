import { css } from 'styled-components'

import { Style } from '@/const/style'

export const containerStyle = css`
  margin-right: auto;
  margin-left: auto;
  padding-right: 16px;
  padding-left: 16px;

  @media (min-width: ${Style.BREAKPOINT.MD}) {
    max-width: 1170px;
    padding-right: 0;
    padding-left: 0;
  }
`
