import React from 'react';
import './App.css';
import AppHeader from './components/AppHeader/AppHeader';
import Main from "./components/Main/main";

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