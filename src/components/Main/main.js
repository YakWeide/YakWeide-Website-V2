import React, {useEffect, useState} from 'react';
import './main.css';
import arrow_left from "../../assets/arrow_right.png"
import arrow_right from "../../assets/arrow_left.png"

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
            <div className="main-section" style={{ backgroundColor: 'lightblue' }}>
                <h1>Hello World!</h1>
                <p>This is a simple example of a colored background in the main section.</p>
            </div>
            <div id="site-panel-control">
                <button className="toggle-btn" onClick={handleSidePanelToggle}>
                    <img
                        src={showSidePanel ? arrow_left : arrow_right}
                        alt={showSidePanel ? '>' : '<'}
                        style={{ width: '20px', height: '20px' }}
                    />
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
