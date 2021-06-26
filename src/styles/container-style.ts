import { css } from 'styled-components'

import { Style } from '@/const/style'

export const containerStyle = css`
  margin-right: auto;
  margin-left: auto;
  padding-right: 16px;
  padding-left: 16px;

  @media (min-width: ${Style.BREAKPOINT.MD}) {
    min-width: ${1170 + 24 * 2}px;
    max-width: ${1170 + 24 * 2}px;
    padding-right: 24px;
    padding-left: 24px;
  }
`
