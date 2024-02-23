import { Forecast, Temperature } from "../types";
import { Card, CardContent, Typography } from "@mui/material";

const WeatherCard: React.FC<{ forecast: Forecast }> = ({ forecast }) => {
  const getTemperature = (temp: Temperature) =>
  temp && temp.celsius !== null ? `${temp.celsius}°C` : "データなし";

  return (
    <Card
      sx={{
        minWidth: 250,
        maxWidth: 400,
        margin: 3,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: "#F0FEF0",
      }}
    >
      <CardContent sx={{ textAlign: "center", padding: 1}}>
        <Typography
          variant="subtitle1"
          component="div"
          sx={{ fontWeight: "bold" }}
        >
          {forecast.dateLabel}  ({forecast.date})
        </Typography>
        <hr
          style={{
            border: "none",
            height: "2px",
            backgroundColor: "#4caf50",
            width: "90%",
            margin: "auto",
          }}
        />
        <img
          src={forecast.image.url}
          alt={forecast.image.title}
          style={{ width: "80%", marginTop: 2 }}
        />
        <Typography variant="body2" color="text.secondary">
          天気: {forecast.telop}
        </Typography>
        <Typography variant="body2">
          最高気温: {getTemperature(forecast.temperature.max)}
        </Typography>
        <Typography variant="body2">
          最低気温: {getTemperature(forecast.temperature.min)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;