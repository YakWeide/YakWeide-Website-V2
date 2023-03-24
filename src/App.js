import React from 'react';
import './App.css';
import AppHeader from './components/AppHeader/AppHeader';
import Main from "./components/Main/main";

// This is the main component of the app.
export default function App() {
    return (
        <div>
            <AppHeader />
            <div id="site">
                <Main />
            </div>
        </div>
    )
}