import { ProgressBar } from "react-bootstrap";

function Section3() {
  return (
    <div
      className="flex flex-col-reverse md:flex-row  max-w-[1440px] gap-10 mx-auto items-center"
      id="ourteam"
    >
      <div className="flex flex-col px-7 md:px-10 z-40 pb-14 pt-16 lg:pb-28">
        <div className="">
          <h5 className="text-[#333333] uppercase font-bold text-3xl pb-5 font-[SpaceGroteskt]">
            Our team
          </h5>
          {/* Render ProgressBar component here */}
          <ProgressBar now={45} />
          <h5 className="text-[#333333] text-xl font-[SpaceGroteskt] font-bold">
            With years of experience within the team, our goal is to explore and
            share innovative ideas that envision better futures, fostering
            debates and knowledge exchange across sectors. We provide a wide
            range of services addressing social, economic and technological
            development of the 21st century, with extensive background within
            the culture and creative sectors.
          </h5>
          {/*
            <p className="underline underline-offset-1 ">Read more</p>
          */}
        </div>
      </div>
    </div>
  );
}

export default Section3;
