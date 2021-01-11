import React, { useEffect } from "react";
import ReactTooltip from "react-tooltip";

const App = ({ element }) => {
    return (
        <React.Fragment>
            {element}
            <ReactTooltip />
        </React.Fragment>
    );
};
export const wrapPageElement = ({ element }) => <App element={element} />;