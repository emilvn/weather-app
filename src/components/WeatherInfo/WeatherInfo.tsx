import {ReactElement} from "react";
import "../../styles/WeatherInfo.css";
import {IWeatherData} from "../../types/types.ts";

interface WeatherInfoProps {
    weather: IWeatherData | null;
}

function WeatherInfo({weather}: WeatherInfoProps):ReactElement | null {
    if(!weather) return null;
    document.body.style.backgroundImage = `url(assets/images/${weather.weather[0].icon}.jpg)`;
    return (
        <div className={"WeatherInfo"}>
            <div className={"WeatherInfo-header"}>
                <h2>{weather.name}, {weather.sys.country}</h2>
                <img alt={"weather condition"} src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/>
            </div>
            <p>Weather Conditions: {weather.weather[0].description}</p>
            <p>Temperature: {(weather.main.temp-273.15).toFixed(0)}°C</p>
            <p>Feels Like: {(weather.main.feels_like-273.15).toFixed(0)}°C</p>
            <p>Humidity: {weather.main.humidity}%</p>
        </div>
    );
}
export default WeatherInfo;