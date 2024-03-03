// ParentComponent.jsx
import React from "react";
import App from "./App";

function ParentComponent() {
    const previewText = "This is a preview";

    return <App preview={previewText} />;
}

export default ParentComponent;
