import React from 'react'
import Layout from '../components/layout'
import { FourZeroFourPageContainer, Title } from '../page-style/404.styles'

class FourZeroFour extends React.Component {
    render() {

        return (
            <Layout location={this.props.location}>
                <FourZeroFourPageContainer>
                    <Title>404 - #BlameChix</Title>
                </FourZeroFourPageContainer>
            </Layout>
        )
    }
}

export default FourZeroFour

