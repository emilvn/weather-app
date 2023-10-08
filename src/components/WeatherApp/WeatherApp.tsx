import React from 'react';
import "./WeatherApp.css";
import WeatherDetails from "../../types/types.ts";
import GetData from "../../utils/GetData/GetData.tsx";
import WeatherInfo from "../WeatherInfo/WeatherInfo";
import CityInput from "../CityInput/CityInput";

export default function WeatherApp():React.ReactElement {
    const [city, setCity] = React.useState<string>('');
    const [weather, setWeather] = React.useState<WeatherDetails|null>(null);
    const [error, setError] = React.useState<string>('');

    React.useEffect(() => {
        function handleKeydown(e:KeyboardEvent) {
            if(e.key === "Enter") {
                GetData(city, setWeather, setError);
            }
        }
        window.addEventListener("keydown", handleKeydown);
        return () => window.removeEventListener("keydown", handleKeydown);
    }, [city]);
    return (
    <div className="WeatherApp">
        <header className="WeatherApp-header">
            <h1>Weather App</h1>
        </header>
        <CityInput city={city} setCity={setCity} setWeather={setWeather} setError={setError}/>
        {error && <p className={"WeatherApp-error"}>{error}</p>}
        {weather && <WeatherInfo weather={weather}/>}
    </div>
    );
}