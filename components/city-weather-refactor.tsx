import { useEffect, useState } from 'react';
import Image from 'next/image';

// todo: refactor the city-weather component to use function component & react hooks

// to get api key: https://openweathermap.org/appid
const API_KEY = 'b233fc3510574b2cec6129d5d30e9ee2';

interface CityWeatherProps {
    city: string;
}
interface CityWeatherState {
    main: {
        temp: number;
    };
    weather: [
        {
            description: string;
            icon: string;
        }
    ];
    name: string;
    loading: boolean;
}

function KtoF(tempKevlin: number): number {
    return ((tempKevlin - 273.15) * 9) / 5 + 32;
}

export const CityWeather = ({ city }: CityWeatherProps) => {
    const [weatherResult, setWeatherResult] = useState<CityWeatherState | null>(
        null
    );
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async ({ city }: { city: string }) => {
            try {
                setError(null);
                setWeatherResult(null);
                setLoading(true);
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
                const response = await fetch(url);
                if (response.ok) {
                    const data = await response.json();
                    console.log('Weather Data', data);
                    setWeatherResult(data);
                } else {
                    setError(response.statusText);
                }
            } finally {
                setLoading(false);
            }
        };
        fetchData({ city });
    }, [city]);

    // todo: match the design from the design.png file
    // todo: improve accessibility

    return (
        <>
            {loading && <div className="w-full h-auto">Loading...</div>}
            {error && (
                <div className="w-full h-auto text-red-600">Error: {error}</div>
            )}
            {weatherResult && !loading && !error && (
                <>
                    <h2 className="text-2xl font-extrabold  text-darkGray uppercase">
                        {weatherResult.name}
                    </h2>
                    <Image
                        src={`http://openweathermap.org/img/wn/${weatherResult?.weather[0].icon}@4x.png`}
                        alt={weatherResult?.weather[0].description}
                        width={100}
                        height={100}
                    />
                    <div
                        className="text-lg font-medium text-lightGray capitalize"
                        aria-hidden="true"
                    >
                        {weatherResult?.weather[0].description}
                    </div>
                    <div className="flex flex-row flex-nowrap justify-center items-end my-2">
                        <h3 className="text-sm font-medium text-lightGray capitalize mr-3">
                            Temperature:
                        </h3>
                        <span className="font-sans text-4xl font-semibold text-gray-800 capitalize">
                            {KtoF(weatherResult?.main.temp).toFixed(0)}&#8457;
                        </span>
                    </div>
                </>
            )}
        </>
    );
};
// todo: create better tests for the component
