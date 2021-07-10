import styled from 'styled-components'

import { Style } from '@/const/style'
import { GlobalStyle } from '@/styles'
import { Header } from './header'
import { Footer } from './footer'

interface IDefaultTemplateProps {
  children: React.ReactNode
}

export const DefaultTemplate = ({ children }: IDefaultTemplateProps) => (
  <>
    <GlobalStyle />
    <Header />
    <Main>{children}</Main>
    <Footer />
  </>
)

const Main = styled.main`
  padding-top: ${Style.SIZE.HEADER_HEIGHT}px;
`
