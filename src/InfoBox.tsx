import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

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
  info: WeatherInfo | null;
};

export default function InfoBox({ info }: Props) {

  const HOT_URL =
    "https://images.unsplash.com/photo-1502082553048-f009c37129b9";

  const COLD_URL =
    "https://images.unsplash.com/photo-1483664852095-d6cc6870702d";

  const RAIN_URL =
    "https://images.unsplash.com/photo-1500375592092-40eb2168fd21";

  const CLOUD_URL =
    "https://images.unsplash.com/photo-1499346030926-9a72daac6c63";

  if (!info) {
    return <h3 className="noData">Search a city to see weather</h3>;
  }

  const getImage = () => {
    if (info.weather === "Rain") return RAIN_URL;
    if (info.weather === "Clouds") return CLOUD_URL;
    if (info.temp > 25) return HOT_URL;
    return COLD_URL;
  };

  return (
    <div className="infoContainer">

      <Card className="weatherCard">

        <CardMedia
          className="weatherImage"
          image={getImage()}
        />

        <CardContent>

          <Typography className="cityTitle">
            {info.city}, {info.country}
          </Typography>

          <Typography className="weatherText">
            🌡 Temperature: {info.temp} °C
          </Typography>

          <Typography className="weatherText">
            🔻 Min Temp: {info.tempMin} °C
          </Typography>

          <Typography className="weatherText">
            🔺 Max Temp: {info.tempMax} °C
          </Typography>

          <Typography className="weatherText">
            💧 Humidity: {info.humidity}%
          </Typography>

          <Typography className="weatherText">
            ☁ Weather: {info.weather}
          </Typography>

        </CardContent>

      </Card>

    </div>
  );
}