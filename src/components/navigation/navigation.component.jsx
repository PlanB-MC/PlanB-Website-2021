import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'gatsby'
import { DropdownButton, DropdownLink, DropdownContent, InnerContainer, NavContainer, SiteName, SiteLinks } from './navigation.styles'

import { FaPen, FaUsers, FaGamepad } from 'react-icons/fa';

export default ({ noFloat }) => {

    const [float, setFloat] = useState(noFloat ? true : false)

    useEffect(() => {
        const handleScroll = () => {
            if (noFloat) setFloat(true)
            else if (window.scrollY > 1) setFloat(true)
            else if (window.scrollY === 0) setFloat(false)
        }
        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <NavContainer float={float} role="navigation">
            <InnerContainer>
                <SiteName href="/">PlanB</SiteName>
                <SiteLinks>
                    <DropdownLink>
                        <DropdownButton><FaUsers /> Community</DropdownButton>
                        <DropdownContent>
                            <a href="/#about-planb">About</a>
                            <a href="/#members">Members</a>
                            <a href="/rules">Rules</a>
                            <a href="/donations">Donations</a>
                        </DropdownContent>
                    </DropdownLink>
                    <DropdownLink>
                        <DropdownButton><FaGamepad /> Minecraft</DropdownButton>
                        <DropdownContent>
                            <a href="/minecraft/server/survival">Survival</a>
                            <a href="/minecraft/server/creative">Creative</a>
                            <a href="/minecraft/server/modded">Modded</a>
                            <a href="/minecraft/server/mini-games">Mini Games</a>
                        </DropdownContent>
                    </DropdownLink>

                    <a href="/join-planb"><FaPen /> Join PlanB</a>
                </SiteLinks>



            </InnerContainer>

        </NavContainer>
    )
}


