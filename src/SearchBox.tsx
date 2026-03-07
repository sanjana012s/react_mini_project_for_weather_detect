import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";

type WeatherInfo = {
  city: string;
  country: string;
  temp: number;
  tempMin: number;
  tempMax: number;
  humidity: number;
  weather: string;
};

type Props = {
  updateInfo: (info: WeatherInfo) => void;
};

export default function SearchBox({ updateInfo }: Props) {

  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const API_KEY = "41247f78f992f7a103f2a7b149e5e4fb";
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";

  const getWeatherInfo = async () => {
    try {

      setError(false);

      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );

      let data = await response.json();

      if (data.cod !== 200) {
        throw new Error("City Not Found");
      }

      const result: WeatherInfo = {
        city: data.name,
        country: data.sys.country,
        temp: data.main.temp,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        humidity: data.main.humidity,
        weather: data.weather[0].main,
      };

      updateInfo(result);

    } catch {
      setError(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    getWeatherInfo();
    setCity("");
  };

  return (
    <div className="SearchBox">
      <h3>Search Weather</h3>

      <form onSubmit={handleSubmit}>

        <TextField
          label="Enter City"
          variant="outlined"
          required
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <br /><br />

        <Button variant="contained" type="submit">
          Search
        </Button>

        {error && (
          <p style={{ color: "red" }}>
            City not found!
          </p>
        )}

      </form>
    </div>
  );
}