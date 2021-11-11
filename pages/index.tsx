import { useState } from "react";
import { CityWeather } from "../components/city-weather-refactor";

export default function IndexPage() {
  const [city, setCity] = useState<string | null>(null);
  return (
    <div className="w-screen h-screen bg-offWhite shadow  flex flex-col items-center justify-start p-6">
      <form
        className="flex flex-wrap flex-row items-center justify-center m-6"
        onSubmit={(e) => {
          e.preventDefault();
          const formdata = new FormData(e.currentTarget);
          setCity(formdata.get("city").toString());
        }}
      >
        <span className="text-xl font-semibold pr-2">Weather Search:</span>
        <div className="flex rounded-lg">
        <input
          data-testid="weather-input"
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
          <CityWeather city={city} />
      )}
    </div>
  );
}
