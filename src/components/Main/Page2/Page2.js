import React, {useEffect} from 'react'
import "../Main.css"
import "./Page.css"
import axios from "axios";

let DISCORD_CLIENT_ID= '678012931085959194'
let DISCORD_CLIENT_SECRET= 'BMiytTKjA8Wvctf-Ic-5Y8AfoEqngbh1'
let REDIRECT_URI = 'http://localhost:3000/'


let Discord_Access_Token = localStorage.getItem("Discord_Access_Token");
let Connected = (localStorage.getItem("Connected") === "true");

let DiscordUsername = "";
let DiscordDiscriminator = "";
let DiscordID = "";
let DiscordAvatarURL = "";
let DiscordLocale = "";
let YakweideUsername = "";
let YakweideEmail = "";
let YakweidePasswordHash = ";"

function Page2() {

    useEffect(async () => {
        const queryParams = new URLSearchParams(window.location.search);
        const code = queryParams.get('code');
        if ((code !== "" && code != null) && Connected === false) {
            Discord_Access_Token = null;
            let token = await getDiscordAccessToken(code);

            localStorage.setItem("Discord_Access_Token", token['access_token'])
            localStorage.setItem("Connected", "true")
            Connected = true;
            window.location.href = REDIRECT_URI;
        }
    });

  return (
    <section className="Wrapper" id="Page2-Wrapper">
      <div className="Page" id="Page2">
        <h1>Login / Register</h1>
          <br /><br />
        <div>
            {displayUserManagementContent()}
        </div>
      </div>
    </section>
  )
}

function displayUserManagementContent() {
    if (!Connected){
        return displayRegisterContent();
    }else{
        return displayLoggedInContent();
    }
}

function displayRegisterContent() {
    return [
        <h2>Connect Discord</h2>,
        <button id="connect_discord" onClick={ConnectDiscord}>Connect Discord</button>
    ];
}

function displayLoggedInContent() {
    return [
        <p id="Discord_Name">Discord Name: {DiscordUsername}#{DiscordDiscriminator}</p>,
        <button onClick={getDiscordUserData}>Load Discord Data</button>,
        <br />, <br />,
            <form onSubmit={ConnectDiscord}>
                <label>Benutzername: <input type="text" value={YakweideUsername} onChange={ConnectDiscord} /> </label>
                <br />
                <label>Email: <input type="text" value={YakweideEmail} onChange={ConnectDiscord} />@yakweide.de</label>
                <br />
                <label>Passwort: <input type="password" onChange={ConnectDiscord} /></label>
                <br />
                <input type="submit" value="Submit" />
            </form>,
        <br />,
        <button id="disconnect_discord" onClick={DisconnectDiscord}>Disconnect Discord</button>
    ];
}


function ConnectDiscord() {
    window.location.href="https://discord.com/api/oauth2/authorize?client_id=678012931085959194&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&response_type=code&scope=identify";
}

function DisconnectDiscord() {
    localStorage.setItem("Connected", "false");
    localStorage.setItem("Discord_User_Data", null)
    window.location.href=REDIRECT_URI;
}

async function getDiscordAccessToken(code) {
    try {
        const formData = new URLSearchParams({
            client_id: DISCORD_CLIENT_ID,
            client_secret: DISCORD_CLIENT_SECRET,
            grant_type: 'authorization_code',
            code: code.toString(),
            redirect_uri: REDIRECT_URI,
        });

        const response = await axios.post(
            'https://discord.com/api/oauth2/token',
            formData.toString(),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            }
        );
        return response.data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

async function getDiscordUserData() {
    if (!Connected) return null;
    try {
        const response = await axios.get('https://discord.com/api/users/@me', {
            headers: {
                'Authorization': 'Bearer ' + Discord_Access_Token,
            },
        });

        DiscordID = response.data['id'];
        DiscordUsername = response.data['username'];
        DiscordDiscriminator = response.data['discriminator'];
        DiscordLocale = response.data['locale'];
        DiscordAvatarURL = "https://cdn.discordapp.com/avatars/" + DiscordID + "/" + response.data['avatar'];

        console.log("DiscordID: " + DiscordID);
        console.log("DiscordUsername: " + DiscordUsername);
        console.log("DiscordDiscriminator: " + DiscordDiscriminator);
        console.log("DiscordAvatarURL: " + DiscordAvatarURL);
        console.log("DiscordLocale: " + DiscordLocale);

        return response.data;
    } catch (err) {
        console.log(err);
        return null;
    }
}


export default Page2