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
import axios from "axios";

function WeatherInfo({ onWeatherData, adjustedTime }) {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [currentCity, setCurrentCity] = useState();

  let timezoneOffset = 0;

  const currentTimeUTC = new Date();

  const adjustedTimeUTC = new Date(
    currentTimeUTC.getTime() + timezoneOffset * 1000
  );
  const time = adjustedTimeUTC.toISOString().slice(11, 16);

  const fetchData = async () => {
    try {
      const geoResponse = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=0b89845a1b21c088f2a1e1647bfbcba1`
      );

      setCurrentCity(city);
      if (geoResponse.data.length === 0) {
        throw new Error("City not found");
      }

      const { lat, lon } = geoResponse.data[0];

      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=0b89845a1b21c088f2a1e1647bfbcba1`
      );

      setWeatherData(weatherResponse.data);
      onWeatherData(weatherResponse.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  const descriptions = [
    {
      imgSrc: "cloudysun.svg",
      currentTemp: Math.round(weatherData?.current.temp ?? 0),
      city: currentCity ?? "No city selected",
      time: adjustedTime ?? time,
      weather:
        weatherData?.current.weather[0].description ?? "No description yet",
      feelsLike: Math.round(weatherData?.current.feels_like ?? 0),
      minTemp: Math.round(weatherData?.daily[0].temp.min ?? 0),
      maxTemp: Math.round(weatherData?.daily[0].temp.max ?? 0),
    },
  ];

  return (
    <div className="flex flex-col text-white gap-2 basis-1/3">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row gap-2 basis-1/2 ">
          <input
            required
            placeholder="Search"
            id="name"
            name="name"
            type="text"
            value={city}
            onChange={handleInputChange}
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
        <span className="text-5xl pt-2 ">
          {Math.round(weatherData?.current.temp ?? 0)}°C
        </span>
      </div>
      <div className="grid grid-cols-2">
        <div className="">
          <div className="flex flex-col  gap-5 z-40 relative h-full">
            <div className="flex flex-col md:flex-col gap-5 mb-2 ">
              <div className="flex flex-col gap-2 basis-1/3">
                <div className=" items-center pr-2 border-r-2">
                  <div>{currentCity ?? "No city selected"}</div>
                  <div>{adjustedTime ?? time}</div>
                  <div>
                    {weatherData?.current.weather[0].description ??
                      "No description yet"}
                  </div>
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
                  <div>
                    feels like:{" "}
                    {Math.round(weatherData?.current.feels_like ?? 0)}°C
                  </div>
                  <div>
                    min: {Math.round(weatherData?.daily[0].temp.min ?? 0)}°C
                  </div>
                  <div>
                    max: {Math.round(weatherData?.daily[0].temp.max ?? 0)}°C
                  </div>
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
