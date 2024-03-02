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

function TodayForecast() {
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
    <div className="flex flex-col text-white gap-2 h-full bg-[#202B3B] rounded-lg">
      <div className="pt-3 gap-2 px-3">
        <span>Today's Forecast</span>
      </div>
      <div className="flex flex-grow px-2 gap-3 py-3 overflow-x-scroll">
        <div className="flex flex-col min-w-1/3">
          <div className="flex flex-col items-center gap-2  flex-grow border-2 px-3">
            <span>Time</span>
            <img
              className="object-contain max-h-60 "
              src="cloudysun.svg"
              alt="Blue sand"
            />
            <span>19 | 32</span>
          </div>
        </div>

        <div className="flex flex-col min-w-1/3">
          <div className="flex flex-col items-center  gap-2 flex-grow border-2 px-3">
            <span>Time</span>
            <img
              className="object-contain max-h-60 "
              src="cloudysun.svg"
              alt="Blue sand"
            />
            <span>19 | 32</span>
          </div>
        </div>

        <div className="flex flex-col min-w-1/3">
          <div className="flex flex-col items-center gap-2 flex-grow border-2 px-3">
            <span>Time</span>
            <img
              className="object-contain max-h-60 "
              src="cloudysun.svg"
              alt="Blue sand"
            />
            <span>19 | 32</span>
          </div>
        </div>

        <div className="flex flex-col min-w-1/3">
          <div className="flex flex-col items-center gap-2 flex-grow border-2 px-3">
            <span>Time</span>
            <img
              className="object-contain max-h-60 "
              src="cloudysun.svg"
              alt="Blue sand"
            />
            <span>19 | 32</span>
          </div>
        </div>

        <div className="flex flex-col min-w-1/3">
          <div className="flex flex-col items-center gap-2 flex-grow border-2 px-3">
            <span>Time</span>
            <img
              className="object-contain max-h-60 "
              src="cloudysun.svg"
              alt="Blue sand"
            />
            <span>19 | 32</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodayForecast;
