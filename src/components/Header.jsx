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

function Header() {
  const [open, setOpen] = useState();
  const { t } = useTranslation();

  useEffect(() => {
    if (open) {
      window.document.body.style.overflow = "hidden";
    } else {
      window.document.body.style.overflow = "auto";
    }
  }, []);

  console.info("SECRET KEY", import.meta.env.VITE_SECRET_KEY);
  return (
    <div
      className="lg:max-h-screen font-[SpaceGroteskt] bg-[#0B0B1E] lg:h-[100vh]"
      id="home"
    >
      <div className="lg:grid lg:grid-cols-2 gap-10 px-20 ">
        <div className="lg:col-span-1 flex flex-col gap-10">
          <div className="pt-10 flex-1">
            <WeatherInfo />
          </div>
          <div className="pt-10 flex-1">
            <TodayForecast />
          </div>
        </div>

        <div className="lg:col-span-1 flex flex-col gap-10">
          <div className="pt-10 flex-1">
            <FutureForecast />
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
