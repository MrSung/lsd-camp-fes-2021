import { css } from 'styled-components'

import { Style } from '@/const/style'

export const sectionStyle = css`
  margin-bottom: 108px;

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    min-width: ${Style.SIZE.CONTAINER_WIDTH}px;
    margin-bottom: 84px;
  }
`
