import Logo from "../assets/symbol_logo.svg?react";
import Lettering from "../assets/lettering.svg?react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
    <div className="relative max-h-screen" id="home">
      <img
        className="h-[100vh] max-h-[1080px] md:origin-top md:h-100 object-cover w-full"
        src={"/background_header_image.jpg"}
        alt="Imagem de background"
      ></img>

      <div className="absolute text-center rounded-md bg-gray-800/20 bg-opacity-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[50%] shadow-lg backdrop-blur-sm">
        <p className="text-4xl font-bold text-white sm:text-5xl lg:text-7xl">
          I'm me
        </p>
        <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
          {t("hello")}
        </p>
        <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
          And me only
        </p>
        <div className=" px-10 flex flex-row gap-3 justify-center text-stone-200">
          <p className="underline underline-offset-1">Git</p>
          <p className="underline underline-offset-1">Linked</p>
          <p className="underline underline-offset-1">Face</p>
        </div>
        <div className=" px-10 flex flex-row gap-3 justify-center py-3">
          <button
            className="px-3 rounded-lg  border-2 text-[#fff] font-bold text-md hover:scale-110 transition duration-500 cursor-pointer"
            type="submit"
          >
            Resume
          </button>
          <button
            className="px-3 rounded-lg  border-2 text-[#fff] font-bold text-md hover:scale-110 transition duration-500 cursor-pointer"
            type="submit"
          >
            <Link
              className="text-[#fff]  hover:underline font-[SpaceGroteskt]"
              to={"contacts"}
              onClick={() => {
                if (open) setOpen(false);

                document
                  .getElementById("contacts"?.replace("/#", ""))
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              {"Contacts"}
            </Link>
          </button>
        </div>
      </div>

      <div className="absolute left-1/2  bottom-[3%] -translate-x-1/2 -translate-y-1/">
        <Anchor
          open={open}
          setOpen={setOpen}
          anchor={"/#aboutme"}
          text={
            <ArrowDownwardIcon
              style={{ fontSize: "2em", color: "white" }}
              alt="Seta para baixo"
            />
          }
        />
      </div>
    </div>
  );
}

export default Header;
