import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import WeatherApp from './components/WeatherApp/WeatherApp.tsx';
import Footer from "./components/Footer/Footer.tsx";

const root:ReactDOM.Root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <WeatherApp />
        <Footer />
    </React.StrictMode>
);