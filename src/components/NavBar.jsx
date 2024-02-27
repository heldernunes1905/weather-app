import { useState } from "react";
import Hamburger from "../assets/hamburguermenu.svg?react";
import { useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";
import LanguageSelectorMobile from "./LanguageSelectorMobile";

function Anchor({ anchor, text, open, setOpen }) {
  return (
    <Link
      className="text-md font-semibold text-[#fff] hover:underline font-[SpaceGroteskt] "
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

function NavBar() {
  const [open, setOpen] = useState();
  const { t } = useTranslation();

  useEffect(() => {
    if (open) {
      window.document.body.style.overflow = "hidden";
    } else {
      window.document.body.style.overflow = "auto";
    }
  }, []);

  const setClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="fixed w-screen hidden top-0 right-0 bg-neutral-900/50 bg-opacity-50 shadow-lg backdrop-blur-sm z-[400] md:flex flex-col py-3 font-[SpaceGroteskt]">
        <div className="absolute left-0 pl-10 text-xl z-[400]">
          <Anchor
            open={open}
            setOpen={setOpen}
            anchor={"/#home"}
            text={"Helder Nunes"}
          />
        </div>
        <div className="flex flex-row gap-10  justify-end pr-10">
          <Anchor
            open={open}
            setOpen={setOpen}
            anchor={"/#aboutme"}
            text={t("aboutmetext")}
          />
          <Anchor
            open={open}
            setOpen={setOpen}
            anchor={"/#resume"}
            text={t("navbar.resume")}
          />
          {/*<Anchor
            open={open}
            setOpen={setOpen}
            anchor={"/#projects"}
            text={"projects"}
          />*/}
          <Anchor
            open={open}
            setOpen={setOpen}
            anchor={"/#contacts"}
            text={t("navbar.contacts")}
          />
          <LanguageSelector />
        </div>
      </div>

      <div className="fixed w-screen md:hidden top-0 right-0 bg-neutral-900/50 bg-opacity-50  backdrop-blur-sm z-[400] flex flex-col p-4">
        <div className=" left-0 pl-2 text-xl w-[80%] z-[400]">
          <Anchor
            open={open}
            setOpen={setOpen}
            anchor={"/#home"}
            text={"Helder Nunes"}
          />
        </div>
        <div className="absolute top-4 right-3 z-50">
          {open ? (
            <CloseIcon
              onClick={() => setOpen(false)}
              className="ml-auto text-white"
              sx={{ height: "40px", width: "40px" }}
            />
          ) : (
            <Hamburger onClick={() => setOpen(true)} />
          )}
        </div>
      </div>

      {open && (
        <div className="relative">
          <div className="fixed w-screen md:w-1/3 lg:w-1/5  top-[4.8rem] right-0 bg-neutral-900/50 bg-opacity-50  backdrop-blur-sm z-[400] flex flex-col p-4">
            <div className="flex flex-col flex-grow pl-10">
              <Anchor
                open={open}
                setOpen={setOpen}
                anchor={"/#aboutme"}
                text={t("aboutmetext")}
              />
              <Anchor
                open={open}
                setOpen={setOpen}
                anchor={"/#resume"}
                text={t("navbar.resume")}
              />
              {/*<Anchor
                open={open}
                setOpen={setOpen}
                anchor={"/#projects"}
                text={"projects"}
              />*/}
              <Anchor
                open={open}
                setOpen={setOpen}
                anchor={"/#contacts"}
                text={t("navbar.contacts")}
              />
              <LanguageSelectorMobile setClose={setClose} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
