import {ReactElement,ChangeEvent} from "react";
import "../../styles/CityInput.css";
import GetWeatherByCity from "../../utils/GetWeatherByCity.ts";
import {IWeatherData, DS} from "../../types/types.ts";

interface CityInputProps {
    city: string,
    setCity:DS<string>,
    setWeather:DS<IWeatherData | null>,
    setError:DS<string>
}

function CityInput({city, setCity, setWeather, setError}:CityInputProps):ReactElement{
        return (
            <div className={"CityInput"}>
                <input
                    type="text"
                    placeholder="City"
                    value={city}
                    onChange={(event:ChangeEvent<HTMLInputElement>) => setCity(event.target.value)} />
                <button
                    type="button"
                    onClick={() => GetWeatherByCity(city, setWeather, setError)}>
                    Search
                </button>
            </div>
        );
}
export default CityInput;