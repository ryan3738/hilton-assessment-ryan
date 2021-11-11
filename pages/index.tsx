import { useState } from "react";
import { CityWeather } from "../components/city-weather-refactor";
import Head from 'next/head'

export default function IndexPage() {
  const [city, setCity] = useState<string | null>(null);

  // 1. Ensure that clicking on the label "Weather Search" puts focus into the text-input.
  // 2. Make sure any loading states are correctly announced to a screen reader
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
        }}
        >

        <h1>
        <label  htmlFor="city" className="text-xl font-semibold pr-2 py-2">Weather Search:</label>
        </h1>
        <div className="flex rounded-lg">
        <input
          id="city"
          data-testid="weather-input"
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
        <section title={`Current forecast`} tabIndex={0} role="status" className=" w-52 h-60 shadow-lg bg-white flex flex-col items-center justify-center rounded-xl text-center  m-8">
          <CityWeather  city={city}  />
        </section>
      )}

    </main>
  );
}
