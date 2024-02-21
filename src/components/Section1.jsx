import blue_mountain from "../assets/blue_mountain.png";
import apartment_windows from "../assets/apartment_windows.png";



function Section1() {
  return (
    <div className="flex flex-col z-20 pt-5 pb-10 relative" id="aboutus">
      <div className="max-w-[1440px] pb-10 lg:pr-10 mx-auto flex flex-col-reverse lg:flex-row gap-10 z-20 relative justify-center ">
        <div className="flex flex-col gap-5  basis-2/5">
          <img
            className="object-contain max-h-80 lg:max-h-full"
            src={blue_mountain}
            alt="Blue sand"
          />
        </div>
        <div className="text-[#333333] text-lg px-7 lg:px-0 basis-3/5 flex items-start justify-center flex-col font-[SpaceGroteskt] ">
          <p className="uppercase font-bold ">About Us</p>
          <p>
            Future Innovation Labs specialises in developing innovation strategies as well as 
            communication and awareness building experiences focused on sustainable and impactful 
            technologies tailored to meet social and economic challenges.

          </p>
        </div>
      </div>

      <div className="max-w-[1440px] lg:pb-0 pb-10 mx-auto flex flex-col lg:pl-20 gap-10 lg:flex-row z-20 relative justify-center">
        <div className="text-[#333333] px-7 lg:px-0 text-lg basis-2/5 flex items-start justify-center flex-col font-[SpaceGroteskt]">
          <p className="  font-bold ">
          With years of experience within the team, our goal is to explore and share 
          innovative ideas that envision better futures, fostering debates and 
          knowledge exchange across sectors. 
          </p>
          <p className="font-bold pt-6">
            We provide a wide range of services addressing social, 
            economic and technological development of the 21st century, 
            with extensive background within the cultural and creative sectors.
          </p>
        </div>
        <div className="flex flex-col basis-3/5 ">
          <img
            className="object-contain max-h-60 lg:max-h-full"
            src={apartment_windows}
            alt="apartment windows"
          />
        </div>
      </div>
    </div>
  );
}

export default Section1;
