import { useEffect, useState } from "react";
import Image from 'next/image'

// todo: refactor the city-weather component to use function component & react hooks


// to get api key: https://openweathermap.org/appid
const API_KEY = "b233fc3510574b2cec6129d5d30e9ee2";

interface CityWeatherProps {
    city: string;
}

interface CityWeatherState {
    main: {
        temp: number;
    }
    weather: [
        {
        description: string;
        icon: string;
    }]
    name: string;
}

export const CityWeather = ({city}:CityWeatherProps) => {
    const [weatherResult, setWeatherResult] = useState<CityWeatherState | null>(null);

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

    return (
        <div className="shadow-lg bg-offwhite flex flex-col items-center justify-center rounded-xl text-center px-2 py-3 m-7">
            {!weatherResult ? <div className='w-50'>Loading...</div> : ''}
            {weatherResult && (
            <>
            <h1 className="text-2xl font-bold text-gray-500 uppercase">{weatherResult.name}</h1>
            <div className="">
            <Image
            src={`http://openweathermap.org/img/wn/${weatherResult?.weather[0].icon}@4x.png`}
            width={100}
            height={100}
            ></Image>
            </div>
            <div className="text-xl font-semibold text-gray-400 capitalize">{weatherResult?.weather[0].description}</div>
            <div className="my-2">
                <span className="text-l font-semibold text-gray-400 capitalize mr-4 ">
                Temperature:</span>
                <span className="text-4xl font-semibold text-gray-800 capitalize">{KtoF(weatherResult?.main.temp).toFixed(0)} &#8457;
                </span>
            </div>
            </>
        )}
        </div>
    );
}
// todo: create better tests for the component

function KtoF(tempKevlin: number) {
    return ((tempKevlin - 273.15) * 9) / 5 + 32;
}