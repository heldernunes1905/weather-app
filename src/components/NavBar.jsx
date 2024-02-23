import { useState } from "react";
import Hamburger from "../assets/hamburguermenu.svg?react";
import { useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

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

  useEffect(() => {
    if (open) {
      window.document.body.style.overflow = "hidden";
    } else {
      window.document.body.style.overflow = "auto";
    }
  }, []);

  return (
    <>
      <div className="fixed w-screen hidden top-0 right-0 bg-gray-500 bg-opacity-50 shadow-lg backdrop-blur-sm z-[400] md:flex flex-col py-3 overflow-hidden">
        <div className="flex flex-row gap-10 flex-grow justify-center pl-10">
          <Anchor
            open={open}
            setOpen={setOpen}
            anchor={"/#aboutus"}
            text={"About Us"}
          />
          <Anchor
            open={open}
            setOpen={setOpen}
            anchor={"/#whatwedo"}
            text={"What we do"}
          />
          <Anchor
            open={open}
            setOpen={setOpen}
            anchor={"/#ourteam"}
            text={"Our Team"}
          />
          <Anchor
            open={open}
            setOpen={setOpen}
            anchor={"/#news"}
            text={"News"}
          />
          <Anchor
            open={open}
            setOpen={setOpen}
            anchor={"/#partners"}
            text={"Partners"}
          />
          <Anchor
            open={open}
            setOpen={setOpen}
            anchor={"/#contacts"}
            text={"Contacts"}
          />
        </div>
      </div>

      <div className="absolute px-3 md:hidden z-[400] w-full  ">
        <div
          className="absolute top-0 right-0 h-[10vh] z-50"
          onClick={() => setOpen(true)}
        >
          <Hamburger />
        </div>
      </div>

      {open && (
        <div className="relative">
          <div className="absolute w-screen md:w-1/3 lg:w-1/5 h-[40vh] top-0 right-0 bg-white z-[400] flex flex-col p-4 overflow-hidden">
            <CloseIcon
              onClick={() => setOpen(false)}
              className="ml-auto text-black"
              sx={{ height: "40px", width: "40px" }}
            />
            <div className="flex flex-col flex-grow justify-center pl-10">
              <Anchor
                open={open}
                setOpen={setOpen}
                anchor={"/#aboutus"}
                text={"About Us"}
              />
              <Anchor
                open={open}
                setOpen={setOpen}
                anchor={"/#whatwedo"}
                text={"What we do"}
              />
              <Anchor
                open={open}
                setOpen={setOpen}
                anchor={"/#ourteam"}
                text={"Our Team"}
              />
              <Anchor
                open={open}
                setOpen={setOpen}
                anchor={"/#news"}
                text={"News"}
              />
              <Anchor
                open={open}
                setOpen={setOpen}
                anchor={"/#partners"}
                text={"Partners"}
              />
              <Anchor
                open={open}
                setOpen={setOpen}
                anchor={"/#contacts"}
                text={"Contacts"}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
