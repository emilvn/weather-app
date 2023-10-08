import React from "react";
import "./CityInput.css";
import GetData from "../../utils/GetData/GetData.tsx";
import WeatherDetails from "../../types/types.ts";

export default function CityInput(
    {city, setCity, setWeather, setError}
        :{city: string,
        setCity:React.Dispatch<React.SetStateAction<string>>,
        setWeather:React.Dispatch<React.SetStateAction<WeatherDetails | null>>,
        setError:React.Dispatch<React.SetStateAction<string>>}
    ):React.ReactElement{
        return (
                <div className={"CityInput"}>
                    <input
                        type="text"
                        placeholder="City"
                        value={city}
                        onChange={(event:React.ChangeEvent<HTMLInputElement>) => setCity(event.target.value)} />
                    <button
                        type="button"
                        onClick={() => GetData(city, setWeather, setError)}>
                        Search
                    </button>
                </div>
        );
}