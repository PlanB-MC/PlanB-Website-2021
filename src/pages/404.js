import React from 'react'
import Layout from '../components/layout'
import { FourZeroFourPageContainer, Title, SubTitle } from '../page-style/404.styles'

class FourZeroFour extends React.Component {
    render() {

        return (
            <Layout location={this.props.location}>
                <FourZeroFourPageContainer>
                    <Title>404 - Brain Not Found</Title>
                    <img src={`https://crafatar.com/renders/body/90cd8b99-43a5-4743-b617-a6443e1410fb?size=120&overlay`} />
                    <SubTitle>#BlameChix</SubTitle>
                </FourZeroFourPageContainer>
            </Layout>
        )
    }
}

export default FourZeroFour

