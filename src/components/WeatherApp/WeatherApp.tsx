import {ReactElement, useEffect, useState} from 'react';
import "../../styles/WeatherApp.css";
import {IWeatherData, DS} from "../../types/types.ts";
import GetData from "../../utils/GetData.ts";
import WeatherInfo from "../WeatherInfo/WeatherInfo.tsx";
import CityInput from "../CityInput/CityInput.tsx";

function WeatherApp():ReactElement {
    const [city, setCity]:[string, DS<string>] = useState<string>('');
    const [weather, setWeather]:[IWeatherData|null, DS<IWeatherData|null>] = useState<IWeatherData|null>(null);
    const [error, setError]:[string, DS<string>] = useState<string>('');

    useEffect(() => {
        function handleKeydown(e:KeyboardEvent):void {
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
export default WeatherApp;