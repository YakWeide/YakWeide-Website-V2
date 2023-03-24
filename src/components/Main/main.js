import React, { useState } from 'react';
import './main.css';

const Main = () => {
    const [showSidePanel, setShowSidePanel] = useState(false);

    const handleSidePanelToggle = () => {
        setShowSidePanel(!showSidePanel);
    };

    return (
        <div className="wrapper">
            <div className="main-section" style={{ backgroundColor: 'lightblue' }}>
                <h1>Hello World!</h1>
                <p>This is a simple example of a colored background in the main section.</p>
            </div>
            <div id="site-panel-control">
                <button className="toggle-btn" onClick={handleSidePanelToggle}>
                    {showSidePanel ? 'Hide' : 'Show'} Panel
                </button>
                <div className={`side-panel${showSidePanel ? ' expanded' : ''}`}>
                    <iframe
                        id="iFrame"
                        src="https://discord.com/widget?id=288665487993339904&theme=dark"
                        allowTransparency="true"
                        frameBorder="0"
                        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                    />
                </div>
            </div>
        </div>
    );
};

export default Main;
