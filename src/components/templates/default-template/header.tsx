import { Link } from 'react-scroll'
import styled from 'styled-components'

import { HOME_LINKS } from '@/components/pages/home/const'
import { containerStyle, Style } from '@/styles'

export const Header = () => (
  <Wrapper>
    <Nav>
      <NavUl>
        {HOME_LINKS.map(({ link, offset }) => (
          <NavLi key={link}>
            <NavLink to={link} smooth="easeInOutQuint" offset={offset}>
              {link}
            </NavLink>
          </NavLi>
        ))}
      </NavUl>
    </Nav>
  </Wrapper>
)

const Wrapper = styled.header`
  position: fixed;
  z-index: ${Style.Z_INDEX_10};
  top: 0;
  right: 0;
  left: 0;
  padding-top: 36px;
  padding-bottom: 36px;

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
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

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 50px;
  text-transform: capitalize;
  cursor: pointer;

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    font-size: 20px;
  }
`
