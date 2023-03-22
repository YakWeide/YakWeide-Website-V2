import React, {useState} from 'react';
import './App.css';
import AppHeader from './components/AppHeader/AppHeader';
import Login from "./components/Login/Login";
import Page1 from "./components/Main/Page1/Page1";
import Page3 from './components/Main/Page3/Page3';
import Discord from './components/SidePanel/Discord';

export default function App() {
    const [isLoginOpen] = useState(false);
    return (
        <div>
            <AppHeader />
            <div id="site">
                <Discord />
                <main>
                    <Page1 />
                    <Page3 />
                </main>
            </div>
            <Login id="Login" open={isLoginOpen}></Login>
        </div>
    )
}