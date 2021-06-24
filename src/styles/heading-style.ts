import { css } from 'styled-components'

import { Style } from '@/const/style'

export const headingStyle = css`
  margin-bottom: 36px;
  font-size: 36px;
  font-weight: 600;
  text-transform: capitalize;

  @media (min-width: ${Style.BREAKPOINT.MD}) {
    font-size: 54px;
  }
`
