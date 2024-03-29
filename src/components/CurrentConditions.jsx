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

function CurrentConditions({ onWeatherData }) {
  const sunRise = new Date(
    onWeatherData?.current.sunrise * 1000
  ).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const sunDown = new Date(
    onWeatherData?.current.sunset * 1000
  ).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const descriptions = [
    "Description WInd",
    "Description Polen",
    "Description Humidity",
    "Description Sunset",
    "Description Pressure",
    "Description Sunrise",
  ];

  return (
    <div className="flex flex-col text-white gap-2 bg-[#202B3B] rounded-lg overflow-hidden">
      <div className="flex pt-4 flex-row gap-2 px-3">
        <span>Today's weather conditions</span>
      </div>
      <div className="flex flex-col overflow-x-scroll">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col md:w-1/3 ">
            <div className="md:flex flex sm:flex-row md:flex-col items-center text-center justify-center sm:border-r-2 ">
              <div className="p-4 flex flex-col gap-3 items-center border-t-2 sm:border-none md:flex-grow">
                <span className="bg-[#35455e] px-[1.7rem] rounded-lg">Wind</span>
                <span>{onWeatherData?.current.wind_speed} km/h</span>
              </div>
              <div className="p-4 flex flex-col gap-3 items-center border-t-2 md:flex-grow">
                <span className="bg-[#35455e] px-3 rounded-lg">UV index</span>
                <span>{onWeatherData?.current.uvi}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:w-1/3">
            <div className="md:flex flex sm:flex-row md:flex-col  items-center text-center justify-center sm:border-r-2">
              <div className="p-4 flex flex-col gap-3 items-center border-t-2 sm:border-none">
                <span className="bg-[#35455e] px-3 rounded-lg">Humidity</span>
                <span>{onWeatherData?.current.humidity} %</span>
              </div>
              <div className="p-4 flex flex-col gap-3 items-center border-t-2">
                <span className="bg-[#35455e] px-3 rounded-lg">Sunrise</span>
                <span>{sunRise}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:w-1/3">
            <div className="md:flex flex sm:flex-row md:flex-col  items-center text-center justify-center ">
              <div className="p-4 flex flex-col gap-3 items-center border-t-2 sm:border-none">
                <span className="bg-[#35455e] px-3 rounded-lg">Pressure</span>
                <span>{onWeatherData?.current.pressure} mb</span>
              </div>
              <div className="p-4 flex flex-col gap-3 items-center border-t-2">
                <span className="bg-[#35455e] px-3 rounded-lg">Sunset</span>
                <span>{sunDown}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentConditions;
