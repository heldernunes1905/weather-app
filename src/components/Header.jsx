import Logo from "../assets/symbol_logo.svg?react";
import Lettering from "../assets/lettering.svg?react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

  useEffect(() => {
    if (open) {
      window.document.body.style.overflow = "hidden";
    } else {
      window.document.body.style.overflow = "auto";
    }
  }, []);
  return (
    <div className="relative max-h-screen" id="home">
      <video
        className="h-[100vh] max-h-[1080px] md:origin-top md:h-100 object-cover w-full"
        src={"/background_header_video.mp4"}
        autoPlay
        loop
        playsInline
        muted
        alt="Video de background"
      ></video>


      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] max-w-[320px] ">
        <Logo className="h-full" alt="Imagem de logo" />
      </div>

      <div className="absolute left-1/2  bottom-[3%] -translate-x-1/2 -translate-y-1/">
        <Anchor
          open={open}
          setOpen={setOpen}
          anchor={"/#aboutus"}
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
