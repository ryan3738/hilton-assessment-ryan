import { useEffect, useRef, useState } from "react";
import { CityWeather } from "../components/city-weather-refactor";
import Head from 'next/head'

export default function IndexPage() {
  const [city, setCity] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  // const inputRef = useRef();
  // const resultsRef = useRef();

  // useEffect(() => {
  //   focusCity();
  // }, []);

  // const focusCity = () => {
  //   // Place focus on weather search input box
  //   inputRef.current.focus();
  // };

  // const focusResults = () => {
  //   // Place focus on weather search results
  //   resultsRef.current.focus();
  // };

  return (
    <main className="w-screen h-screen bg-offWhite shadow  flex flex-col items-center justify-start p-6">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Weather App</title>
        <meta name="description" content="A simple weather app" />
        </Head>
      <form
        className="flex flex-wrap flex-row items-center justify-center m-6"

        onSubmit={(e) => {
          e.preventDefault();
          const formdata = new FormData(e.currentTarget);
          setCity(formdata.get("city").toString());
          // city && focusCity();
          // focusResults();
        }}
      >
        <h1>
        <label  htmlFor="city" className="text-xl font-semibold pr-2 py-2">Weather Search:</label>
        </h1>
        <div className="flex rounded-lg">
        <input
          id="city"
          data-testid="weather-input"
          // ref={inputRef}
          title="Enter a city to search for the current weather"
          className="border border-solid border-primary px-2 py-1 rounded-l-lg h-12 w-48"
          type="text"
          name="city"
        />
          <button className="text-white text-l uppercase font-semibold rounded-r-lg px-3 py-2 bg-primary" type="submit">
          Submit
        </button>
        </div>
      </form>

      {city && (
        <div tabIndex={0} title={`Current forecast`} className="shadow-lg bg-white flex flex-col items-center justify-center rounded-xl text-center px-3 py-3 m-8">

          <CityWeather  city={city} />
        </div>
      )}
    </main>
  );
}
