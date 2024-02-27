import { useTranslation } from "react-i18next";
import DegradeTriangle from "../assets/degrade_triangle.png";

function Section4() {
  const { t } = useTranslation();

  return (
    
    <div className="flex flex-col z-20 relative pt-7 font-[SpaceGroteskt]">
      <div className="max-w-[1440px] bg-[#0099cc] pb-7 md:pb-0  mx-auto flex flex-col-reverse md:flex-row z-20 relative items-center justify-center font-[SpaceGroteskt]">
        <div className="flex flex-col gap-5 basis-1/2">
          <h2 className="text-[#fff] pt-8 text-3xl md:text-3xl text-center uppercase">
            Projects
          </h2>
          <div className="flex flex-col items-center min-h-[30p">
            <button
              className="inline-block min-h-[45px] border-2 text-white text-xl px-10 "
              type="submit"
            >
              coming soon
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-5 basis-1/2">
          <img
            className="object-contain"
            src={DegradeTriangle}
            alt="section 3 tickets"
          />
        </div>
      </div>
    </div>
  );
}

export default Section4;
