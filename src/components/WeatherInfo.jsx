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
import { Icon, SvgIcon } from "@mui/material";

function WeatherInfo() {
  const descriptions = [
    {
      imgSrc: "cloudysun.svg",
      currentTemp: "18",
      city: "Funchal",
      time: "14:18",
      weather: "Clouds",
      feelsLike: "19",
      minTemp: "12",
      maxTemp: "25",
    },
  ];

  return (
    <div className="flex flex-col text-white gap-2 basis-1/3">
      <form>
        <div className="flex flex-row gap-2 basis-1/2 ">
          <input
            required
            placeholder="Search"
            id="name"
            name="name"
            type="text"
            className=" w-full bg-[#202B3B] py-2 px-4 text-neutral-300 placeholder-neutral-300 rounded-lg"
          />
        </div>
      </form>
      <div className="">Weather (C)</div>
      <div className="flex flex-row justify-center items-center text-center">
        <div className="flex ">
          <img
            className="object-contain max-h-60"
            src={descriptions[0].imgSrc}
            alt="Weather Image"
          />
        </div>
        <span className="text-5xl pt-2 ">{descriptions[0].currentTemp}°C</span>
      </div>
      <div className="grid grid-cols-2">
        <div className="">
          <div className="flex flex-col  gap-5 z-40 relative h-full">
            <div className="flex flex-col md:flex-col gap-5 mb-2 ">
              <div className="flex flex-col gap-2 basis-1/3">
                <div className=" items-center pr-2 border-r-2">
                  <div>{descriptions[0].city}</div>
                  <div>{descriptions[0].time}</div>
                  <div>{descriptions[0].weather}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col  gap-5 z-40 relative h-full">
            <div className="flex flex-col md:flex-col gap-5 mb-2 ">
              <div className="flex flex-col gap-2 basis-1/3">
                <div className=" items-center text-right pr-2">
                  <div>feels like: {descriptions[0].feelsLike}°C</div>
                  <div>min: {descriptions[0].minTemp}°C</div>
                  <div>max: {descriptions[0].maxTemp}°C</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherInfo;
