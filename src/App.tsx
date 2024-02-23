import { useState, useEffect } from "react";
import axios from "axios";
import WeatherCard from "./components/WeatherCard";
import locations from "./locations.json";
import {
  Container,
  Typography,
  FormControl,
  Select,
  MenuItem,
  Box,
  Grid,
} from "@mui/material";
import { WeatherData, Forecast } from "./types";

const App: React.FC = () => {
  const [location, setLocation] = useState<string>(locations[0].id);
  const [WeatherData, setWeatherDate] = useState<WeatherData | null>(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://weather.tsukumijima.net/api/forecast/city/${location}`
        );
        setWeatherDate(response.data);
      } catch  (error) {
        console.error("Weather data fetch error:", error);
      }
    };

    fetchWeatherData();
  }, [location]);

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Box my={4}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ textAlign: "center" }}
        >
          天気予報
        </Typography>
        <FormControl
          fullWidth
          margin="normal"
          variant="outlined"
          sx={{ backgroundColor: "#fff", borderRadius: 1 }}
        >
          <Select
            value={location}
            onChange={(e) => setLocation(e.target.value as string)}
            displayEmpty
          >
            {locations.map((loc) => (
              <MenuItem key={loc.id} value={loc.id}>
                {loc.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Grid container spacing={2}>
          {WeatherData && WeatherData.forecasts ? (
            WeatherData.forecasts
              .slice(0, 3)
              .map((forecast: Forecast, index: number) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <WeatherCard forecast={forecast} />
                </Grid>
              ))
          ) : (
            <Typography>天気データを読み込み中...</Typography>
          )}
        </Grid>
      </Box>
    </Container>
  );
};

export default App;