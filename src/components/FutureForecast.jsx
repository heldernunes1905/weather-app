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

function getNextFiveDays() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date().getDay();

  const nextFiveDays = [];
  for (let i = 1; i <= 5; i++) {
    const nextDayIndex = (today + i) % 7;
    nextFiveDays.push(daysOfWeek[nextDayIndex]);
  }

  return nextFiveDays;
}

function getNextFiveForecastValues() {
  return [
    { temperature: "19", humidity: "32" },
    { temperature: "20", humidity: "30" },
    { temperature: "22", humidity: "35" },
    { temperature: "18", humidity: "28" },
    { temperature: "21", humidity: "33" },
  ];
}

function getNextFiveImageValues() {
  return [
    { source: "cloudysun.svg" },
    { source: "cloudysun.svg" },
    { source: "cloudysun.svg" },
    { source: "cloudysun.svg" },
    { source: "cloudysun.svg" },
  ];
}

function FutureForecast() {
  const nextFiveDays = getNextFiveDays();
  const forecastValues = getNextFiveForecastValues();
  const ImageValues = getNextFiveImageValues();

  return (
    <div className="text-white gap-2 h-full bg-[#202B3B] rounded-lg">
      <div className="pt-3 pb-2 flex-col gap-2 px-3">
        <span className="pl-3">Future Forecast</span>
      </div>
      <div className="flex-grow px-2 gap-2 pb-1 flex-col flex justify-center">
        {nextFiveDays.map((day, index) => (
          <div
            key={index}
            className="flex flex-row items-center gap-2 flex-grow border-b px-3 pb-2"
          >
            <div className="w-1/2 flex">
              <div className="pt-3">
                <span className="bg-[#35455e] px-3 rounded-lg">{day}</span>
              </div>
              <img
                className="object-contain max-h-[3rem] ml-auto"
                src={ImageValues[index].source}
                alt="Weather image"
              />
            </div>
            <div className="w-1/2 flex">
              <span className="hidden sm:flex">Clouds</span>
              <span className="ml-auto">
                {forecastValues[index].temperature} |{" "}
                {forecastValues[index].humidity}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FutureForecast;
