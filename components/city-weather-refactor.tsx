// todo: refactor the city-weather component to use function component & react hooks

import { useEffect, useState } from "react";

// to get api key: https://openweathermap.org/appid
const API_KEY = "b233fc3510574b2cec6129d5d30e9ee2";

interface CityWeatherProps {
    city: string;
}

interface CityWeatherState {
    weatherResult: any;
}

export const CityWeather = ({city}:CityWeatherProps) => {
    const [weatherResult, setWeatherResult] = useState<CityWeatherState | null>(null)

    useEffect(() => {
        const fetchData = async ({city}: {city:string}) => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
            const result = await fetch(url);
            const data = await result.json();
            console.log('Weather Data',data);
            setWeatherResult(data);
        };
        fetchData({city});
    }, [city]);

    // todo: match the design from the design.png file
    // todo: improve accessibility
        // 1. Ensure that clicking on the label "Weather Search" puts focus into the text-input.
        // 2. Make sure any loading states are correctly announced to a screen reader
        if (!weatherResult) {
            return <div>Loading...</div>
        }
    return (
        <div>
            <h1>{weatherResult.name}</h1>
            <div>{weatherResult?.weather[0].icon}</div>
            <div>Descripiton: {weatherResult?.weather[0].description}</div>
            <div>
                Temperature: {KtoF(weatherResult?.main.temp).toFixed(0)} &#8457;
            </div>
        </div>
    );
}
// todo: create better tests for the component

function KtoF(tempKevlin: number) {
    return ((tempKevlin - 273.15) * 9) / 5 + 32;
}