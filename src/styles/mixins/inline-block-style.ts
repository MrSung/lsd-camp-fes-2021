import { css } from 'styled-components'

import { Style } from '@/styles'

export const inlineBlockStyle = css`
  display: inline-block;

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    display: block;
  }
`
