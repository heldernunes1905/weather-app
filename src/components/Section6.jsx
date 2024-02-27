import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";
import { Divider } from "@mui/material";

function Section6() {
  const [isClicked, setIsClicked] = useState(false);

  const handleDivClick = () => {
    // Toggle the state back to false
    setIsClicked(!isClicked);
  };
  const { t } = useTranslation();
  return (
    <div className="bg-neutral-100 font-[SpaceGroteskt] pb-10">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 flex flex-col z-20 relative font-[SpaceGroteskt] ">
        <Divider sx={{ borderBottomWidth: 2, background: "#000000" }} />
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h5 className="text-[#333333] underline decoration-orange-400  uppercase font-bold text-xl pt-10 md:pb-4">
              {t("education.title")}
            </h5>
            <div className="flex flex-col border-l-2 gap-5 z-40 pb-6 md:pb-10 relative">
              <div className="flex flex-col md:flex-col gap-5 mb-2">
                <div className="flex flex-col text-[#353232] gap-2 basis-1/3 border-b-2 pb-2">
                  <div className="flex gap-6  text-sm">
                    <span className="pl-3">2019-2023</span>
                    <span className="text-[#5e5a5a] italic">
                      De Montfort University
                    </span>
                  </div>
                  <label
                    className="font-semibold px-5 text-xl"
                    htmlFor="name"
                  >
                    {t("education.firstcourse")}
                  </label>
                  <span className="px-5">{t("education.firstdesc")}</span>
                </div>
                <div className="flex flex-col text-[#353232] gap-2 basis-1/3">
                  <div className="flex gap-6  text-sm">
                    <span className="pl-3">2016-2019</span>
                    <span className="text-[#5e5a5a] italic">
                      Escola Profissional Cristovao Colombo
                    </span>
                  </div>
                  <label
                    className=" font-semibold px-5 text-xl"
                    htmlFor="name"
                  >
                    {t("education.secondcourse")}
                  </label>
                  <span className="px-5">{t("education.seconddesc")}</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h5 className="text-[#333333] underline decoration-orange-400  uppercase font-bold text-xl pt-10 md:pb-4">
              {t("experience.title")}
            </h5>
            <div className="flex flex-col border-l-2 gap-5 z-40 relative">
              <div className="flex flex-col md:flex-col gap-5 mb-2">
                <div className="flex flex-col text-[#353232] gap-2 basis-1/3 border-b-2 pb-2">
                  <div className="flex gap-6  text-sm">
                    <span className="pl-3">Nov. 2023-Present</span>
                    <span className="text-[#5e5a5a] italic ">
                      Vipa Connect
                    </span>
                  </div>
                  <label
                    className=" font-semibold px-5 text-xl"
                    htmlFor="name"
                  >
                    Full Stack Developer
                  </label>
                  <span className="px-5">{t("experience.descfirst")}</span>
                </div>
                <div className="flex flex-col text-[#353232] gap-2 basis-1/3 border-b-2 pb-2">
                  <div className="flex gap-6  text-sm">
                    <span className="pl-3">Jan. 2019-Mar. 2019</span>
                    <span className="text-[#5e5a5a] italic">Press Power</span>
                  </div>
                  <label
                    className=" font-semibold px-5 text-xl"
                    htmlFor="name"
                  >
                    {t("experience.titlesecond")}
                  </label>
                  <span className="px-5">{t("experience.descsecond")}</span>
                </div>
                <div className="flex flex-col gap-2 basis-1/3 text-[#353232] pb-2">
                  <div className="flex gap-6  text-sm">
                    <span className="pl-3">Jun. 2018-Jul. 2018</span>
                    <span className="text-[#5e5a5a] italic">Press Power</span>
                  </div>
                  <label
                    className=" font-semibold px-5 text-xl"
                    htmlFor="name"
                  >
                    {t("experience.titlethird")}
                  </label>
                  <span className="px-5">{t("experience.descthird")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section6;
