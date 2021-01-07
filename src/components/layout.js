import React from 'react'
import { Link } from 'gatsby'

// import '../reset.css'
import './base.css'
import Container from './container'
import Navigation from './navigation/navigation.component'
import { Fragment } from 'react'
import Footer from './footer/footer.component'

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
