import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

function Section6() {
  const [isClicked, setIsClicked] = useState(false);

  const handleDivClick = () => {
    // Toggle the state back to false
    setIsClicked(!isClicked);
  };

  return (
    <div
      className="max-w-[1440px] mx-auto px-5 md:px-10 flex flex-col z-20 relative font-[SpaceGroteskt] "
    >
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h5 className="text-[#333333] uppercase font-bold text-xl pt-10 md:pb-4">
            Education
          </h5>
          <div className="flex flex-col border-l-2 gap-5 z-40 pb-6 md:pb-10 relative">
            {/* Education content */}
            <div className="flex flex-col md:flex-col gap-5 mb-5">
              <div className="flex flex-col gap-2 basis-1/3 border-b-2 pb-2">
                <div className="flex gap-6">
                  <span>2019-2023</span>
                  <span>De Montfort University</span>
                </div>
                <label className="text-black font-semibold px-5" htmlFor="name">
                  Software engineering
                </label>
                <span className="px-5">I studied here</span>
              </div>
              <div className="flex flex-col gap-2 basis-1/3">
                <div className="flex gap-6">
                  <span>2016-2019</span>
                  <span>Escola Profissional Cristovao Colombo</span>
                </div>
                <label className="text-black font-semibold px-5" htmlFor="name">
                  Software engineering
                </label>
                <span className="px-5">I studied here</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h5 className="text-[#333333] uppercase font-bold text-xl pt-10 md:pb-4">
            Experience
          </h5>
          <div className="flex flex-col border-l-2 gap-5 z-40 pb-6 md:pb-10 relative">
            {/* Experience content */}
            <div className="flex flex-col md:flex-col gap-5 mb-5">
              <div className="flex flex-col gap-2 basis-1/3 border-b-2 pb-2">
                <div className="flex gap-6">
                  <span>Nov. 2023-Present</span>
                  <span>Vipa Connect</span>
                </div>
                <label className="text-black font-semibold px-5" htmlFor="name">
                  Full Stack Developer
                </label>
                <span className="px-5">I worked here</span>
              </div>
              <div className="flex flex-col gap-2 basis-1/3 border-b-2 pb-2">
                <div className="flex gap-6">
                  <span>Jan. 2019-Mar. 2019</span>
                  <span>Press Power</span>
                </div>
                <label className="text-black font-semibold px-5" htmlFor="name">
                  Software Developer Intern
                </label>
                <span className="px-5">I interned here here</span>
              </div>
              <div className="flex flex-col gap-2 basis-1/3 pb-2">
                <div className="flex gap-6">
                  <span>Jun. 2018-Jul. 2018</span>
                  <span>Press Power</span>
                </div>
                <label className="text-black font-semibold px-5" htmlFor="name">
                  Software Developer Intern
                </label>
                <span className="px-5">I interned here</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section6;
