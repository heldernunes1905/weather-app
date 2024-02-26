import { ProgressBar } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function Section3() {
  const { t } = useTranslation();
  return (
    <div className="bg-neutral-100 ">
      <div
        className="max-w-[1440px] mx-auto px-5 md:px-10 flex flex-col z-20 relative font-[SpaceGroteskt]"
        id="resume"
      >
        <div className="flex flex-col z-40 pb-14 pt-16 lg:pb-28">
          <div className="">
            <h5 className="text-[#333333] uppercase font-bold text-3xl pb-5 font-[SpaceGroteskt]">
              {t("header.resume")}
            </h5>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="flex flex-col gap-1">
                <p className="text-center">{t("skills.spoken")}</p>

                <div>
                  <p className="">{t("languages.portuguese")}</p>

                  <ProgressBar className="h-[20px] ">
                    <ProgressBar now={100} className=" colo bg-[#9218e4]" />
                  </ProgressBar>
                </div>

                <div>
                  <p className="">{t("languages.english")}</p>

                  <ProgressBar className="h-[20px] ">
                    <ProgressBar now={100} className=" colo bg-[#9218e4]" />
                  </ProgressBar>
                </div>
                <div>
                  <p className="">{t("languages.spanish")}</p>

                  <ProgressBar className="h-[20px] ">
                    <ProgressBar now={60} className=" colo bg-[#9218e4]" />
                  </ProgressBar>
                </div>
                <div className="flex flex-col gap-1 pt-4">
                  <p className="text-center">{t("skills.frontend")}</p>

                  <div>
                    <p className="">React</p>

                    <ProgressBar className="h-[20px] ">
                      <ProgressBar now={80} className=" colo bg-[#9218e4]" />
                    </ProgressBar>
                  </div>

                  <div>
                    <p className="">CSS</p>

                    <ProgressBar className="h-[20px] ">
                      <ProgressBar now={60} className=" colo bg-[#9218e4]" />
                    </ProgressBar>
                  </div>
                  <div>
                    <p className="">TypeScript</p>

                    <ProgressBar className="h-[20px] ">
                      <ProgressBar now={20} className=" colo bg-[#9218e4]" />
                    </ProgressBar>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex flex-col gap-1 ">
                  <p className="text-center">{t("skills.techstack")}</p>

                  <div>
                    <p className="">SQL</p>

                    <ProgressBar className="h-[20px] ">
                      <ProgressBar now={85} className=" colo bg-[#9218e4]" />
                    </ProgressBar>
                  </div>

                  <div>
                    <p className="">Javasript</p>

                    <ProgressBar className="h-[20px] ">
                      <ProgressBar now={75} className=" colo bg-[#9218e4]" />
                    </ProgressBar>
                  </div>
                  <div>
                    <p className="">Python</p>

                    <ProgressBar className="h-[20px] ">
                      <ProgressBar now={60} className=" colo bg-[#9218e4]" />
                    </ProgressBar>
                  </div>
                </div>
                <div className="flex flex-col gap-1 pt-4">
                  <p className="text-center">{t("skills.backend")}</p>

                  <div>
                    <p className="">PHP</p>

                    <ProgressBar className="h-[20px] ">
                      <ProgressBar now={82} className=" colo bg-[#9218e4]" />
                    </ProgressBar>
                  </div>

                  <div>
                    <p className="">Kotlin</p>

                    <ProgressBar className="h-[20px] ">
                      <ProgressBar now={65} className=" colo bg-[#9218e4]" />
                    </ProgressBar>
                  </div>
                  <div>
                    <p className="">C#</p>

                    <ProgressBar className="h-[20px] ">
                      <ProgressBar now={30} className=" colo bg-[#9218e4]" />
                    </ProgressBar>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
