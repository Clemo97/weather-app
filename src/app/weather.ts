export interface Weather {
  weather: WeatherInfo[],
  main: {
    temp_min: string|number;
    temp: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  sys: {
    country: string
  };
  name: string;
}

interface WeatherInfo {
  main: string;
  icon: string;
}
