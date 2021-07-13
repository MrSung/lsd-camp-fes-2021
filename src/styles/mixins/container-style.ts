import { css } from 'styled-components'

import { Style } from '@/styles'

export const containerStyle = css`
  margin-right: auto;
  margin-left: auto;
  padding-right: 16px;
  padding-left: 16px;

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    min-width: ${Style.SIZE.CONTAINER_WIDTH}px;
    max-width: ${Style.SIZE.CONTAINER_WIDTH}px;
    padding-right: 24px;
    padding-left: 24px;
  }
`
