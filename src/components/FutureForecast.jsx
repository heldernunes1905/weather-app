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

function FutureForecast() {
  return (
    <div className="flex flex-col text-white gap-2 h-full">
      <div className="flex flex-row gap-2 px-3">
        <span>Future Forecast</span>
      </div>
      <div className="flex flex-grow px-2 gap-3">
        <div className="flex flex-col w-1/5">
          <div className="flex flex-col items-center gap-5 flex-grow border-2 px-3">
            <span>Wind</span>
            <span >Wind</span>
            <span>Description</span>
          </div>
        </div>

        <div className="flex flex-col w-1/5">
        <div className="flex flex-col items-center gap-5 flex-grow border-2 px-3">
            <span>Humidity</span>
            <span>Humidity</span>

            <span>Description</span>
          </div>
        </div>

        <div className="flex flex-col w-1/5">
        <div className="flex flex-col items-center gap-5 flex-grow border-2 px-3">
            <span>Pressure</span>
            <span>Pressure</span>

            <span>Description</span>
          </div>
        </div>

        <div className="flex flex-col w-1/5">
        <div className="flex flex-col items-center gap-5 flex-grow border-2 px-3">
            <span>Pressure</span>
            <span>Pressure</span>

            <span>Description</span>
          </div>
        </div>

        <div className="flex flex-col w-1/5">
        <div className="flex flex-col items-center gap-5 flex-grow border-2 px-3">
            <span>Pressure</span>
            <span>Pressure</span>

            <span>Description</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FutureForecast;
