import React from "react"

import PageHeader from "../../components/navigation/navigation.component"
import Footer from "../../components/footer/footer.component"

import { ServerPageContainer } from "./server-page.styles"

class ServerPageLayout extends React.Component {
    render() {
        const { children } = this.props
        return (
            <React.Fragment>
                <PageHeader />
                <ServerPageContainer>{children}</ServerPageContainer>
                <Footer />
            </React.Fragment>
        )
    }
}

export default ServerPageLayout
