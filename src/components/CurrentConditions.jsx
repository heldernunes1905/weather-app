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

function CurrentConditions() {
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
    <div className="flex flex-col text-white gap-2">
      <div className="flex flex-row gap-2 px-3">
        <span>Today's weather conditions</span>
      </div>
      <div className="flex">
        <div className="flex flex-col w-1/3">
          <div className="flex flex-col items-center justify-center h-full">
            <div className="border-b-2 border-r-2 p-3 flex flex-col items-center">
              <span>Wind</span>
              <span>Description</span>
            </div>
            <div className=" border-r-2 p-3 flex flex-col items-center">
              <span>Polen</span>
              <span>Description</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-1/3">
        <div className="flex flex-col items-center justify-center h-full">
            <div className="border-b-2 border-r-2 p-3 flex flex-col items-center">
              <span>Humidity</span>
              <span>Description</span>
            </div>
            <div className=" border-r-2 p-3 flex flex-col items-center">
              <span>Sunset</span>
              <span>Description</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-1/3">
        <div className="flex flex-col items-center justify-center h-full">
            <div className="border-b-2  p-3 flex flex-col items-center">
              <span>Pressure</span>
              <span>Description</span>
            </div>
            <div className="  p-3 flex flex-col items-center">
              <span>Sunrise</span>
              <span>Description</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentConditions;
