import React, { useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import emailjs from "emailjs-com";
import { Snackbar } from "@mui/material";

function Section7() {
  const [isClicked, setIsClicked] = useState(false);
  const [nameDefault, setNameDefault] = useState();
  const [emailDefault, setEmailDefault] = useState();
  const [messageDefault, setMessageDefault] = useState();
  const [openSuccessbar, setOpenSuccessbar] = useState(false);
  const [openFailurebar, setopenFailurebar] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_42rocir",
        "template_l48i8oi",
        form.current,
        "w5jFYcyHUBCqmk6Q8"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setNameDefault("");
          setEmailDefault("");
          setMessageDefault("");
          setOpenSuccessbar(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setopenFailurebar(true);
        }
      );
  };
  const handleDivClick = () => {
    // Toggle the state back to false
    setIsClicked(!isClicked);
  };

  return (
    <div className="max-w-[1440px] mx-auto px-5 md:px-10 flex flex-col z-20 relative font-[SpaceGroteskt]">
      <h5 className="text-[#333333] uppercase font-bold text-xl  pt-10 md:pb-4">
        Contact me
      </h5>
      <div className="grid md:grid-cols-2 gap-10 ">
        <div className="flex flex-col gap-5 z-40 pb-6  md:pb-10 relative">
          <div className="flex flex-col md:flex-col gap-5 mb-5">
            <form ref={form} onSubmit={sendEmail}>
              <div className="flex flex-col gap-2 basis-1/3">
                <label className="text-white font-semibold" htmlFor="name">
                  Name
                </label>
                <input
                  required
                  placeholder="name"
                  id="name"
                  name="name"
                  type="text"
                  value={nameDefault}
                  onChange={(e) => setNameDefault(e.target.value)}
                  className="bg-[#ebebeb] py-2 px-4 text-[#333333] placeholder-black rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2 basis-1/3">
                <label className="text-white font-semibold" htmlFor="email">
                  e-mail
                </label>
                <input
                  required
                  placeholder="e-mail"
                  id="email"
                  type="email"
                  name="email"
                  value={emailDefault}
                  onChange={(e) => setEmailDefault(e.target.value)}
                  className="bg-[#ebebeb] py-2 px-4 text-[#333333] placeholder-black rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2 basis-1/3">
                <label className="text-white font-semibold" htmlFor="name">
                  Message
                </label>
                <textarea
                  required
                  placeholder="message"
                  id="message"
                  name="message"
                  value={messageDefault}
                  onChange={(e) => setMessageDefault(e.target.value)}
                  className="bg-[#ebebeb] py-2 px-4 text-[#333333] placeholder-black rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2 basis-1/4 mt-auto pt-3">
                <button
                  className="w-full min-h-[45px] border-2 text-[#333333] font-bold text-xl hover:scale-110 transition duration-500 cursor-pointer"
                  type="submit"
                  value="Send"
                >
                  SUBSCRIBE
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex flex-col gap-5 z-40 pb-6  md:pb-10 relative">
          <div className="flex flex-col md:flex-col gap-5 mb-5">
            <div className="flex flex-col gap-2 basis-1/3 pt-8">
              <span>
                Have a project for me? Any questions about something I've built?
                I'd love to hear from you, give me a shout by email or by using
                the form if you'd like to get in contact with me.
              </span>
            </div>
          </div>
        </div>
      </div>
      <Snackbar
        open={openSuccessbar}
        autoHideDuration={2000}
        onClose={() => setOpenSuccessbar(false)}
        message="Email sent successfully!"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        sx={{
          "& .MuiSnackbarContent-root": {
            backgroundColor: "#4CAF50",
            color: "white",
          },
        }}
      />

      <Snackbar
        open={openFailurebar}
        autoHideDuration={2000}
        onClose={() => setopenFailurebar(false)}
        message="Error sending email!"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        sx={{
          "& .MuiSnackbarContent-root": {
            backgroundColor: "#e01616",
            color: "white",
          },
        }}
      />
    </div>
  );
}

export default Section7;
