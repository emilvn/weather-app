import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import WeatherApp from './components/WeatherApp/WeatherApp';
import Footer from "./components/Footer/Footer";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <WeatherApp />
        <Footer />
    </React.StrictMode>
);