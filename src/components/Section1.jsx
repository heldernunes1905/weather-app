import blue_mountain from "../assets/blue_mountain.png";
import apartment_windows from "../assets/apartment_windows.png";
import {
  AutoAwesomeMosaicOutlined,
  CorporateFareOutlined,
  MapOutlined,
  SchoolOutlined,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";

function Section1() {
  const { t } = useTranslation();
  return (
    <div className="bg-neutral-800  text-neutral-300 font-[SpaceGroteskt]">
      <div className="flex flex-col z-20 pt-5 pb-10 relative" id="aboutme">
        <div className="max-w-[1440px] pb-10 lg:pr-10 mx-auto flex flex-col lg:flex-row gap-10 z-20 relative justify-center ">
          <div className="flex flex-col gap-5  basis-2/5">
            <img
              className="object-contain max-h-80 lg:max-h-full"
              src={blue_mountain}
              alt="Blue sand"
            />
          </div>
          <div className=" text-lg px-7 lg:px-0 basis-3/5 flex items-start justify-center flex-col font-[SpaceGroteskt] ">
            <p className="uppercase font-bold ">{t("aboutmetext")}</p>
            <div>
              {" "}
              {/** This  div is if i decide to separate the title from the content*/}
              <div>
                <p>{t("aboutme.description")}</p>
              </div>
              <div>
                <div>
                  <MapOutlined />
                  <span className="font-bold">{t("aboutme.location")}</span>
                  <span>Portugal</span>
                </div>
                <div>
                  <AutoAwesomeMosaicOutlined />
                  <span className="font-bold">{t("aboutme.interests")} </span>
                  <span>Tv, Puzzles</span>
                </div>
                <div>
                  <SchoolOutlined />
                  <span className="font-bold">{t("aboutme.study")}: </span>
                  <span>De Montfort University</span>
                </div>
                <div>
                  <CorporateFareOutlined />
                  <span className="font-bold">{t("aboutme.employment")}: </span>
                  <span>Vipa connect</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
