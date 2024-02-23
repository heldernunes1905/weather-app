import { ProgressBar } from "react-bootstrap";

function Section3() {
  return (
    <div
      className="max-w-[1440px] mx-auto px-5 md:px-10 flex flex-col z-20 relative font-[SpaceGroteskt]"
      id="ourteam"
    >
      <div className="flex flex-col z-40 pb-14 pt-16 lg:pb-28">
        <div className="">
          <h5 className="text-[#333333] uppercase font-bold text-3xl pb-5 font-[SpaceGroteskt]">
            Skills
          </h5>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="flex flex-col gap-1">
              <p className="text-center">Spoken languages</p>

              <div>
                <p className="">Portuguese</p>

                <ProgressBar className="h-[20px] ">
                  <ProgressBar
                    now={100}
                    className=" colo bg-[#9218e4]"
                  />
                </ProgressBar>
              </div>

              <div>
                <p className="">English</p>

                <ProgressBar className="h-[20px] ">
                  <ProgressBar
                    now={100}
                    className=" colo bg-[#9218e4]"
                  />
                </ProgressBar>
              </div>
              <div>
                <p className="">Spanish</p>

                <ProgressBar className="h-[20px] ">
                  <ProgressBar
                    now={60}
                    className=" colo bg-[#9218e4]"
                  />
                </ProgressBar>
              </div>
              <div className="flex flex-col gap-1 pt-4">
                <p className="text-center">Frontend development</p>

                <div>
                  <p className="">React</p>

                  <ProgressBar className="h-[20px] ">
                    <ProgressBar
                      now={80}
                        className=" colo bg-[#9218e4]"
                    />
                  </ProgressBar>
                </div>

                <div>
                  <p className="">CSS</p>

                  <ProgressBar className="h-[20px] ">
                    <ProgressBar
                      now={60}
                        className=" colo bg-[#9218e4]"
                    />
                  </ProgressBar>
                </div>
                <div>
                  <p className="">TypeScript</p>

                  <ProgressBar className="h-[20px] ">
                    <ProgressBar
                      now={20}
                        className=" colo bg-[#9218e4]"
                    />
                  </ProgressBar>
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-col gap-1 ">
                <p className="text-center">Technology Stack Skills</p>

                <div>
                  <p className="">SQL</p>

                  <ProgressBar className="h-[20px] ">
                    <ProgressBar
                      now={85}
                        className=" colo bg-[#9218e4]"
                    />
                  </ProgressBar>
                </div>

                <div>
                  <p className="">Javasript</p>

                  <ProgressBar className="h-[20px] ">
                    <ProgressBar
                      now={75}
                        className=" colo bg-[#9218e4]"
                    />
                  </ProgressBar>
                </div>
                <div>
                  <p className="">Python</p>

                  <ProgressBar className="h-[20px] ">
                    <ProgressBar
                      now={60}
                        className=" colo bg-[#9218e4]"
                    />
                  </ProgressBar>
                </div>
              </div>
              <div className="flex flex-col gap-1 pt-4">
                <p className="text-center">Backend development</p>

                <div>
                  <p className="">PHP</p>

                  <ProgressBar className="h-[20px] ">
                    <ProgressBar
                      now={82}
                        className=" colo bg-[#9218e4]"
                    />
                  </ProgressBar>
                </div>

                <div>
                  <p className="">Kotlin</p>

                  <ProgressBar className="h-[20px] ">
                    <ProgressBar
                      now={65}
                        className=" colo bg-[#9218e4]"
                    />
                  </ProgressBar>
                </div>
                <div>
                  <p className="">C#</p>

                  <ProgressBar className="h-[20px] ">
                    <ProgressBar
                      now={30}
                        className=" colo bg-[#9218e4]"
                    />
                  </ProgressBar>
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
