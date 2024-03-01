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

function WeatherInfo() {
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
    <div className="flex flex-col text-white gap-2 basis-1/3">
      <form>
        <div className="flex flex-row gap-2 basis-1/2 ">
          <input
            required
            placeholder="Search"
            id="name"
            name="name"
            type="text"
            className=" w-full bg-neutral-700 py-2 px-4 text-neutral-300 placeholder-neutral-300 rounded-md"
          />
          <button
            className=" min-w-[35px] ml-auto border-2 border-orange-600 rounded-3xl bg-stone-900 text-neutral-300 font-bold text-md hover:scale-110 transition duration-500 cursor-pointer"
            type="submit"
            value="Send"
          ></button>
        </div>
      </form>
      <div className="">Weather (C)</div>
      <div className=" items-center text-center">
        <div>Image of weather</div>
        <div>19C</div>
      </div>
      <div className="grid md:grid-cols-2">
        <div className="pt-10">
          <div className="flex flex-col  gap-5 z-40 relative h-full">
            <div className="flex flex-col md:flex-col gap-5 mb-2 ">
              <div className="flex flex-col gap-2 basis-1/3">
                <div className=" items-center pr-2 border-r-2">
                  <div>city</div>
                  <div>time</div>
                  <div>description(clouds)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-10">
          <div className="flex flex-col  gap-5 z-40 relative h-full">
            <div className="flex flex-col md:flex-col gap-5 mb-2 ">
              <div className="flex flex-col gap-2 basis-1/3">
                <div className=" items-center text-right pr-2">
                  <div>feels like: 19</div>
                  <div>min: 19</div>
                  <div>max: 19</div>
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
