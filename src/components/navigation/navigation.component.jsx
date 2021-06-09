import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'gatsby'
import {
  DropdownButton,
  DropdownLink,
  DropdownContent,
  InnerContainer,
  NavContainer,
  SiteName,
  SiteLinks,
  JoinButton,
} from './navigation.styles'

import { FaPen, FaUsers, FaGamepad } from 'react-icons/fa'

export default ({ noFloat }) => {
  const [float, setFloat] = useState(noFloat ? true : false)

  useEffect(() => {
    const handleScroll = () => {
      if (noFloat) setFloat(true)
      else if (window.scrollY > 1) setFloat(true)
      else if (window.scrollY === 0) setFloat(false)
    }
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <NavContainer float={float} role="navigation">
      <InnerContainer>
        <SiteName href="/">PlanB</SiteName>
        <SiteLinks>
          <DropdownLink>
            <DropdownButton>
              <FaUsers /> Community
            </DropdownButton>
            <DropdownContent>
              <Link to="/#about-planb">About</Link>
              <Link to="/#members">Members</Link>
              <Link to="/#rules">Rules</Link>
              <Link to="/#donations">Donations</Link>
            </DropdownContent>
          </DropdownLink>
          <DropdownLink>
            <DropdownButton>
              <FaGamepad /> Minecraft
            </DropdownButton>
            <DropdownContent>
              <Link to="/minecraft/server/survival">Survival</Link>
              <Link to="/minecraft/server/creative">Creative</Link>
              <Link to="/minecraft/server/modded">Modded</Link>
            </DropdownContent>
          </DropdownLink>

          <JoinButton to="/join-planb">
            <FaPen /> Join PlanB
          </JoinButton>
        </SiteLinks>
      </InnerContainer>
    </NavContainer>
  )
}
