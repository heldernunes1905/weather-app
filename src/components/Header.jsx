import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  DownloadOutlined,
  FileDownloadDoneOutlined,
  FileDownloadOutlined,
} from "@mui/icons-material";
import WeatherInfo from "./WeatherInfo";
import CurrentConditions from "./CurrentConditions";
import TodayForecast from "./TodayForecast";
import FutureForecast from "./FutureForecast";

function currentTime(time) {
  let timezoneOffset = time;

  const currentTimeUTC = new Date();

  const adjustedTimeUTC = new Date(
    currentTimeUTC.getTime() + timezoneOffset * 1000
  );
  return adjustedTimeUTC.toISOString().slice(11, 16);
}

function Header() {
  const [weatherData, setWeatherData] = useState(null);
  const [localTime, setLocalTime] = useState(null);

  const handleWeatherData = (weatherData) => {
    setWeatherData(weatherData);

    setLocalTime(currentTime(weatherData.timezone_offset));

    console.log(weatherData);
  };

  return (
    <div
      className="lg:max-h-screen font-[SpaceGroteskt] bg-[#0B0B1E] lg:h-[100vh]"
      id="home"
    >
      <div className="lg:grid lg:grid-cols-2 gap-10 px-20 ">
        <div className="lg:col-span-1 flex flex-col gap-10">
          <div className="pt-10 flex-1">
            <WeatherInfo
              onWeatherData={handleWeatherData}
              adjustedTime={localTime}
            />
          </div>
          <div className="pt-10 flex-1">
            <TodayForecast onWeatherData={weatherData} />
          </div>
        </div>

        <div className="lg:col-span-1 flex flex-col gap-10">
          <div className="pt-10 flex-1">
            <FutureForecast onWeatherData={weatherData} />
          </div>
          <div className="pt-16 flex-1">
            <CurrentConditions />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
