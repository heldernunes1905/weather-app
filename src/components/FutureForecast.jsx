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
      className="text-3xl font-bold text-[#333333] uppercase hover:underline font-[SpaceGroteskt] "
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
    <div className="text-white gap-2 h-full bg-[#202B3B] rounded-lg">
      <div className="pt-3 pb-2 flex-col gap-2 px-3">
        <span className="pl-3">Future Forecast</span>
      </div>
      <div className="flex-grow px-2 gap-2 pb-1 flex-col flex justify-center">
        <div className="flex flex-row items-center gap-2 flex-grow border-b px-3 pb-2">
          <div className="w-1/2 flex">
            <div className="pt-3">
              <span className="bg-[#35455e] px-3 rounded-lg">Sunday</span>
            </div>
            <img
              className="object-contain max-h-[3rem] ml-auto"
              src="cloudysun.svg"
              alt="Blue sand"
            />
          </div>
          <div className="w-1/2 flex">
            <span className="hidden sm:flex">Clouds</span>
            <span className="ml-auto">19 | 32</span>
          </div>
        </div>
        <div className="flex flex-row items-center gap-2 flex-grow border-b px-3 pb-2">
          <div className="w-1/2 flex">
            <div className="pt-3">
              <span className="bg-[#35455e] px-3 rounded-lg">Sunday</span>
            </div>
            <img
              className="object-contain max-h-[3rem] ml-auto"
              src="cloudysun.svg"
              alt="Blue sand"
            />
          </div>
          <div className="w-1/2 flex">
          <span className="hidden sm:flex">Clouds</span>
            <span className="ml-auto">19 | 32</span>
          </div>
        </div>
        <div className="flex flex-row items-center gap-2 flex-grow border-b px-3 pb-2">
          <div className="w-1/2 flex">
            <div className="pt-3">
              <span className="bg-[#35455e] px-3 rounded-lg">Sunday</span>
            </div>
            <img
              className="object-contain max-h-[3rem] ml-auto"
              src="cloudysun.svg"
              alt="Blue sand"
            />
          </div>
          <div className="w-1/2 flex">
          <span className="hidden sm:flex">Clouds</span>
            <span className="ml-auto">19 | 32</span>
          </div>
        </div>
        <div className="flex flex-row items-center gap-2 flex-grow border-b px-3 pb-2">
          <div className="w-1/2 flex">
            <div className="pt-3">
              <span className="bg-[#35455e] px-3 rounded-lg">Sunday</span>
            </div>
            <img
              className="object-contain max-h-[3rem] ml-auto"
              src="cloudysun.svg"
              alt="Blue sand"
            />
          </div>
          <div className="w-1/2 flex">
          <span className="hidden sm:flex">Clouds</span>
            <span className="ml-auto">19 | 32</span>
          </div>
        </div>
        <div className="flex flex-row items-center gap-2 flex-grow px-3 pb-2">
          <div className="w-1/2 flex">
            <div className="pt-3">
              <span className="bg-[#35455e] px-3 rounded-lg">Sunday</span>
            </div>
            <img
              className="object-contain max-h-[3rem] ml-auto"
              src="cloudysun.svg"
              alt="Blue sand"
            />
          </div>
          <div className="w-1/2 flex">
          <span className="hidden sm:flex">Clouds</span>
            <span className="ml-auto">19 | 32</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FutureForecast;
