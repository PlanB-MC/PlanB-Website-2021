import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'gatsby'
import { NavContainer, SiteName } from './navigation.styles'

export default (noFloat) => {

    const [float, setFloat] = useState(noFloat ? true : false)

    useEffect(() => {
        const handleScroll = () => {
            if (noFloat) setFloat(true)
            else if (window.scrollY > 0) setFloat(true)
            else if (window.scrollY === 0) setFloat(false)
        }
        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <NavContainer float={float} role="navigation">
            <SiteName href="/">PlanB</SiteName>
        </NavContainer>
    )
}


