import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'gatsby'
import { NavContainer, SiteName } from './navigation.styles'

export default () => {

    const [float, setFloat] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) setFloat(true)
            else if (window.scrollY === 0) setFloat(false)
        }
        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <NavContainer float={float} role="navigation">
            <SiteName>PBMC</SiteName>
        </NavContainer>
    )
}


