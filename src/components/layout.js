import React from 'react'
import { Link } from 'gatsby'

// import '../reset.css'
import './base.css'
import Navigation from './navigation/navigation.component'
import { Fragment } from 'react'
import Footer from './footer/footer.component'

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <Fragment>
        <Navigation />
        {children}
        <Footer />
      </Fragment>
    )
  }
}

export default Template
