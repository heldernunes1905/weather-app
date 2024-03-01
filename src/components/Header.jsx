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
  return (
    <div
      className="relative max-h-screen font-[SpaceGroteskt] bg-black h-[100vh] "
      id="home"
    >
      <div className="grid md:grid-cols-2 gap-10 px-20 ">
        <div className="pt-10 ">
          <div className="flex flex-col border-2 gap-5 z-40 relative h-full">
            <WeatherInfo />
          </div>
        </div>
        <div className="pt-10">
          <div className="flex flex-col border-2 gap-5 z-40 relative h-full">
            <CurrentConditions />
          </div>
        </div>
        <div className="pt-10">
          <div className="flex flex-col border-2 gap-5 z-40 relative h-full">
            <TodayForecast />
          </div>
        </div>
        <div className="pt-10">
          <div className="flex flex-col border-2 gap-5 z-40  h-full">
            <FutureForecast />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
