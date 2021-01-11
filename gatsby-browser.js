import React from "react";
import ReactTooltip from "react-tooltip";
import './src/components/base.css'

import { ThemeProvider } from "styled-components"
import { colors } from "./src/theme.styles"

if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]', {
        offset: 100,
    })
}

const App = ({ element }) => {
    return (
        <React.Fragment>
            <ThemeProvider theme={{ colors }}>
                {element}
                <ReactTooltip />
            </ThemeProvider>
        </React.Fragment>
    );
};
export const wrapPageElement = ({ element }) => <App element={element} />;