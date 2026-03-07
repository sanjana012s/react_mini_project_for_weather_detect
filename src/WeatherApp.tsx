import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

type WeatherInfo = {
  city: string;
  country: string;
  temp: number;
  tempMin: number;
  tempMax: number;
  humidity: number;
  weather: string;
};

export default function WeatherApp() {

  const [weatherInfo, setWeatherInfo] = useState<WeatherInfo | null>(null);

  const updateInfo = (newInfo: WeatherInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div style={{ textAlign: "center" }}>

      <h1>Weather App</h1>

      <SearchBox updateInfo={updateInfo} />

      <InfoBox info={weatherInfo} />

    </div>
  );
}