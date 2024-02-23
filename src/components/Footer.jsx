import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div id="contacts" className="w-full ">
      <div className=" px-10 flex flex-row gap-3 justify-center pt-3 pb-5">
        <p className="underline underline-offset-1">Git</p>
        <p className="underline underline-offset-1">Linked</p>
        <p className="underline underline-offset-1">Face</p>
      </div>
      <div className=" px-10 flex flex-row gap-3 justify-center ">
        <p>© Copyright {currentYear} Helder Nunes</p>
      </div>
    </div>
  );
}

export default Footer;
