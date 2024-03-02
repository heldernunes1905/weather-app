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
    <div className="flex flex-col text-white gap-2 bg-[#202B3B] rounded-md overflow-hidden">
      <div className="flex pt-4 flex-row gap-2 px-3">
        <span>Today's weather conditions</span>
      </div>
      <div className="flex flex-col overflow-x-scroll">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col md:w-1/3">
            <div className="md:flex flex sm:flex-row md:flex-col  items-center justify-center sm:border-r-2">
              <div className="p-4 flex flex-col gap-3 items-center border-t-2 sm:border-none">
                <span className="bg-[#35455e] px-3 rounded-lg">Wind</span>
                <span>Description</span>
              </div>
              <div className="p-4 flex flex-col gap-3 items-center border-t-2">
                <span className="bg-[#35455e] px-3 rounded-lg">Polen</span>
                <span>Description</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:w-1/3">
            <div className="md:flex flex sm:flex-row md:flex-col  items-center justify-center sm:border-r-2">
              <div className="p-4 flex flex-col gap-3 items-center border-t-2 sm:border-none">
                <span className="bg-[#35455e] px-3 rounded-lg">Humidity</span>
                <span>Description</span>
              </div>
              <div className="p-4 flex flex-col gap-3 items-center border-t-2">
                <span className="bg-[#35455e] px-3 rounded-lg">Sunset</span>
                <span>Description</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:w-1/3">
            <div className="md:flex flex sm:flex-row md:flex-col  items-center justify-center ">
              <div className="p-4 flex flex-col gap-3 items-center border-t-2 sm:border-none">
                <span className="bg-[#35455e] px-3 rounded-lg">Pressure</span>
                <span>Description</span>
              </div>
              <div className="p-4 flex flex-col gap-3 items-center border-t-2">
                <span className="bg-[#35455e] px-3 rounded-lg">Sunrise</span>
                <span>Description</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentConditions;
