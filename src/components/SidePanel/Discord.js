import React from 'react'
import './Panel.css'


function Discord() {
  return (
    <div id="RightPanelWrapper">
      <div id="RightPanel">
        <iframe id="iFrame" src="https://discord.com/widget?id=288665487993339904&theme=dark"
            allowtransparency="true" frameBorder="0"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
      </div>
    </div>
  )
}

export default Discord