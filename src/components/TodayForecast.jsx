import Logo from "../assets/symbol_logo.svg?react";
import Lettering from "../assets/lettering.svg?react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  DownloadOutlined,
  FileDownloadDoneOutlined,
  FileDownloadOutlined,
} from "@mui/icons-material";

function Anchor({ anchor, text, open, setOpen }) {
  return (
    <Link
      className="text-3xl font-bold text-[#333333] uppercase hover:underline font-[SpaceGroteskt]"
      to={anchor}
      onClick={() => {
        if (open) setOpen(false);

        document
          .getElementById(anchor?.replace("/#", ""))
          .scrollIntoView({ behavior: "smooth" });
      }}
    >
      {text}
    </Link>
  );
}

function getNextFiveHours() {
  const currentHour = new Date().getHours();

  const nextFiveHours = [];
  for (let i = 1; i <= 10; i++) {
    const nextHour = (currentHour + i) % 24;
    nextFiveHours.push(nextHour);
  }

  return nextFiveHours;
}

function getNextFiveForecastValues(weather) {
  return [
    {
      mintemp: Math.round(weather?.hourly[1].temp ?? 0),
    },
    {
      mintemp: Math.round(weather?.hourly[2].temp ?? 0),
    },
    {
      mintemp: Math.round(weather?.hourly[3].temp ?? 0),
    },
    {
      mintemp: Math.round(weather?.hourly[4].temp ?? 0),
    },
    {
      mintemp: Math.round(weather?.hourly[5].temp ?? 0),
    },
    {
      mintemp: Math.round(weather?.hourly[6].temp ?? 0),
    },
    {
      mintemp: Math.round(weather?.hourly[7].temp ?? 0),
    },
    {
      mintemp: Math.round(weather?.hourly[8].temp ?? 0),
    },
    {
      mintemp: Math.round(weather?.hourly[9].temp ?? 0),
    },
    {
      mintemp: Math.round(weather?.hourly[10].temp ?? 0),
    },
  ];
}
function getNextFiveImageValues(weatherData) {
  return [
    { source: getImageForWeather(weatherData?.hourly[1].weather[0].main) },
    { source: getImageForWeather(weatherData?.hourly[2].weather[0].main) },
    { source: getImageForWeather(weatherData?.hourly[3].weather[0].main) },
    { source: getImageForWeather(weatherData?.hourly[4].weather[0].main) },
    { source: getImageForWeather(weatherData?.hourly[5].weather[0].main) },
    { source: getImageForWeather(weatherData?.hourly[6].weather[0].main) },
    { source: getImageForWeather(weatherData?.hourly[7].weather[0].main) },
    { source: getImageForWeather(weatherData?.hourly[8].weather[0].main) },
    { source: getImageForWeather(weatherData?.hourly[9].weather[0].main) },
    { source: getImageForWeather(weatherData?.hourly[10].weather[0].main) },

  ];
}

function getImageForWeather(weatherData) {
  switch (weatherData) {
    case "Rain":
      return "rain.svg";
      break;
    case "Snow":
      return "hail.svg";
      break;
    case "Clouds":
      return "cloud.svg";
      break;
    case "Sun":
      return "sun.svg";
      break;
    case "Clear":
      return "night.svg";
      break;
    default:
      return "default.svg"; // Return a default image for unknown weather
      break;
  }
}

function TodayForecast({ onWeatherData }) {
  const nextFiveHours = getNextFiveHours();
  const forecastValues = getNextFiveForecastValues(onWeatherData);
  const ImageValues = getNextFiveImageValues(onWeatherData);

  return (
    <div className="flex flex-col text-white gap-2 h-full bg-[#202B3B] rounded-lg">
      <div className="pt-3 gap-2 px-3">
        <span>Today's Forecast</span>
      </div>
      <div className="flex flex-grow px-2 gap-3 py-3 overflow-x-scroll">
        {nextFiveHours.map((hour, index) => (
          <div key={index} className="flex flex-col min-w-1/2">
            <div className="flex flex-col items-center gap-2 justify-center flex-grow border-2 sm:px-3">
              <span>{hour}:00</span>
              <img
                className="object-contain max-h-20"
                src={ImageValues[index].source}
                alt="Weather image"
              />
              <span>
                {" "}
                {forecastValues[index].mintemp}°C
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodayForecast;
