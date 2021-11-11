import { useEffect, useRef, useState } from "react";
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
    loading: boolean;
}

export const CityWeather = ({city}:CityWeatherProps) => {
    const [weatherResult, setWeatherResult] = useState<CityWeatherState | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const resultsRef = useRef();

    const focusResults = () => {
    // Place focus on weather search results
    resultsRef.current.focus();
  };

    useEffect(() => {
        const fetchData = async ({city}: {city:string}) => {
            setError(null);
            setLoading(true);
            focusResults();
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
            const result = await fetch(url);
            const data = await result.json();
            console.log('Weather Data',data);
            setWeatherResult(data);
            setLoading(false);
        };
        fetchData({city});
    }, [city]);

    // todo: match the design from the design.png file
    // todo: improve accessibility
        // 1. Ensure that clicking on the label "Weather Search" puts focus into the text-input.
        // 2. Make sure any loading states are correctly announced to a screen reader

    return (
        <section title={`Current forecast`} ref={resultsRef}>
            {loading && <div className='w-full h-auto'>Loading...</div>}
            {error && <div className='w-full h-auto'>{error}</div>}
            {weatherResult && !loading && !error && (
            <>
            <h2 className="text-2xl font-bold text-darkGray uppercase">{weatherResult.name}</h2>
            <Image
            src={`http://openweathermap.org/img/wn/${weatherResult?.weather[0].icon}@4x.png`}
            alt={weatherResult?.weather[0].description}
            width={100}
            height={100}
            ></Image>
            <div className="text-xl font-semibold text-lightGray capitalize" aria-hidden='true'>{weatherResult?.weather[0].description}</div>
            <div className="flex flex-row my-2">
                        <h3 className="text-l font-semibold text-lightGray capitalize mr-3 ">
                Temperature:</h3>
                <span className="text-4xl font-semibold text-gray-800 capitalize">{KtoF(weatherResult?.main.temp).toFixed(0)} &#8457;
                </span>
            </div>
            </>
        )}
        </section>
    );
}
// todo: create better tests for the component

function KtoF(tempKevlin: number) {
    return ((tempKevlin - 273.15) * 9) / 5 + 32;
}