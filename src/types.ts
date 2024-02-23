export interface Temperature {
  celsius: string | null;
  fahrenheit: string | null;
}

export interface Image {
  url: string;
  title: string;
}

export interface Forecast {
  date: string;
  dateLabel: string;
  telop: string;
  temperature: {
    min: Temperature;
    max: Temperature;
  };
  image: Image;
}

export interface WeatherData {
  forecasts: Forecast[];
}