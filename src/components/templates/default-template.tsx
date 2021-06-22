import React from 'react'
import styled from 'styled-components'

import { Style } from '@/const/style'
import { GlobalStyle, containerStyle } from '@/styles'

const LINKS = [`message`, `about`, `program`, `timetable`]

interface IDefaultTemplateProps {
  children: React.ReactNode
}

export const DefaultTemplate = ({ children }: IDefaultTemplateProps) => (
  <>
    <GlobalStyle />
    <Header>
      <Nav>
        <NavUl>
          {LINKS.map((link) => (
            <NavLi key={link}>
              <NavLink href={`#${link}`}>{link}</NavLink>
            </NavLi>
          ))}
        </NavUl>
      </Nav>
    </Header>
    <main>{children}</main>
  </>
)

const Header = styled.header`
  padding-top: 36px;
  padding-bottom: 36px;

  @media (min-width: ${Style.BREAKPOINT.MD}) {
    margin-bottom: 12px;
    padding-top: 44px;
    padding-bottom: 44px;
  }
`

const Nav = styled.nav`
  ${containerStyle}
`

const NavUl = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0;
`

const NavLi = styled.li``

const NavLink = styled.a`
  display: flex;
  align-items: center;
  height: 50px;
  color: ${Style.COLOR.RAISIN_BLACK};
  font-size: 16px;
  text-transform: capitalize;

  &:hover {
    color: ${Style.COLOR.RAISIN_GRAY};
  }

  @media (min-width: ${Style.BREAKPOINT.MD}) {
    font-size: 20px;
  }
`
