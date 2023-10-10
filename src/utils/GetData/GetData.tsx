import {IWeatherData, DS} from "../../types/types.ts";

async function GetData(city:string,
       setWeather:DS<IWeatherData | null>,
       setError:DS<string>
    ):Promise<void> {
        const API_KEY:string = import.meta.env.VITE_API_KEY || "";
        try{
            const res:Response = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+API_KEY);
            if(res.ok) {
                const data = await res.json();
                setWeather(data);
                setError("");
            }
            else if(res.status === 404){
                setWeather(null);
                setError("Location not found");
            }
        }
        catch (err){
            setError(`Error: ${err}`);
        }
}
export default GetData;