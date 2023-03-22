import React, {useEffect} from 'react'
import "../Main.css"
import "./Page.css"

function Page1() {

    useEffect(() => {
        // call api or anything
        //console.log("loaded");
        getDiscord();
    });

  return (
    <section className="Wrapper" id="Page1-Wrapper">
      <div className="Page" id="Page1">
        <h1>YakWeide1</h1>
        <div>
            <p>test1</p>

            <div id="info">Hoi!</div>
            <a id="login" href="https://discord.com/api/oauth2/authorize?client_id=678012931085959194&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&response_type=code&scope=identify">Identify Yourself</a>
        </div>
      </div>
    </section>
  )
}


function getDiscord() {

    //console.log("In get Discord");

    const fragment = new URLSearchParams(window.location.hash.slice(1));
    //console.log("fragment: " + window.location.hash.toString());
    const [accessToken, tokenType] = [fragment.get('access_token'), fragment.get('token_type')];

    if (!accessToken) {
        //console.log("!accessToken");
        return (document.getElementById('login').style.display = 'block');
    }

    //console.log("Nach accessToken");

    fetch('https://discord.com/api/users/@me', {
        headers: {
            authorization: `${tokenType} ${accessToken}`,
        },
    })
        .then(result => result.json())
        .then(response => {
            const { username, discriminator } = response;
            document.getElementById('info').innerText += ` ${username}#${discriminator}`;
            //console.log("username " + username + " discriminator" + discriminator);
        })
        .catch(console.error);
}

export default Page1