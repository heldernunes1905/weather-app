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
  for (let i = 1; i <= 5; i++) {
    const nextHour = (currentHour + i) % 24;
    nextFiveHours.push(nextHour);
  }

  return nextFiveHours;
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

function TodayForecast() {
  const nextFiveHours = getNextFiveHours();
  const forecastValues = getNextFiveForecastValues();
  const ImageValues = getNextFiveImageValues();

  return (
    <div className="flex flex-col text-white gap-2 h-full bg-[#202B3B] rounded-lg">
      <div className="pt-3 gap-2 px-3">
        <span>Today's Forecast</span>
      </div>
      <div className="flex flex-grow px-2 gap-3 py-3 overflow-x-scroll">
        {nextFiveHours.map((hour, index) => (
          <div key={index} className="flex flex-col min-w-1/3">
            <div className="flex flex-col items-center gap-2 flex-grow border-2 px-3">
              <span>{hour}:00</span>
              <img
                className="object-contain max-h-60"
                src={ImageValues[index].source}
                alt="Weather image"
              />
              <span>
                {" "}
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

export default TodayForecast;
