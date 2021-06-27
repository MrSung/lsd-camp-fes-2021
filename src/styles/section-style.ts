import { css } from 'styled-components'

import { Style } from '@/const/style'

export const sectionStyle = css`
  margin-bottom: 84px;

  @media (min-width: ${Style.BREAKPOINT.MD}) {
    min-width: ${Style.SIZE.CONTAINER_WIDTH}px;
  }
`
