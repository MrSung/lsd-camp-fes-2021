import { css } from 'styled-components'

import { Style } from '@/const/style'

export const inlineBlockStyle = css`
  display: inline-block;

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    display: block;
  }
`
