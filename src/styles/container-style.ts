import { css } from 'styled-components'

import { Style } from '@/const/style'

export const containerStyle = css`
  margin-right: auto;
  margin-left: auto;
  padding-right: 16px;
  padding-left: 16px;

  @media (min-width: ${Style.BREAKPOINT.MD}) {
    min-width: ${Style.SIZE.CONTAINER_WIDTH};
    max-width: ${Style.SIZE.CONTAINER_WIDTH};
    padding-right: 24px;
    padding-left: 24px;
  }
`
