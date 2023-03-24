import React, {useEffect, useState} from 'react';
import './main.css';
import arrow_left from "../../assets/arrow_right.png"
import arrow_right from "../../assets/arrow_left.png"
import Page1 from "./Pages/Page1/Page1";
import Page2 from "./Pages/Page2/Page2";

// This is the main component of the app. It renders the Main Pages component and the SidePanel component.
const Main = () => {
    const [showSidePanel, setShowSidePanel] = useState(() => {
        return window.innerWidth >= 1000;
    });

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1000) {
                setShowSidePanel(true);
            } else {
                setShowSidePanel(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleSidePanelToggle = () => {
        setShowSidePanel(!showSidePanel);
    };

    return (
        <div className="wrapper">
            <div className="main-section">
                <main>
                    <Page1 />
                    <Page2 />
                </main>
            </div>
            <div id="site-panel-control">
                <button className="toggle-btn" onClick={handleSidePanelToggle}>
                    <img
                        src={showSidePanel ? arrow_right : arrow_left}
                        alt={showSidePanel ? '>' : '<'}
                        style={{ width: '20px', height: '20px' }}
                    />
                </button>
                <div className={`side-panel${showSidePanel ? ' expanded' : ''}`}>
                    <iframe
                        id="iFrame"
                        src="https://discord.com/widget?id=288665487993339904&theme=dark"
                        allowTransparency="true"
                        style={{ border: 'none' }}
                        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                    />
                </div>
            </div>
        </div>
    );
};

export default Main;
