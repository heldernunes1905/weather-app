import Placeholder from "../assets/partner_s.svg";
import VipaConnect from "../assets/vipa_connect.png";
import b_real from "../assets/b_real.png";
import manuel_levi from "../assets/manuel_levi.png";
import portugal_manual from "../assets/portugal_manual.png";
import the_inventors from "../assets/the_inventors.png";
import giga_lab from "../assets/giga_lab.png";
import mimic_productions from "../assets/mimic_productions.png";

function Partners({ img, name, link }) {
  return (
    <div className="flex flex-col gap-5 items-center basis-1/4 md:basis-1/6">
      <a href={link} target="_blank" rel="noopener noreferrer" className="flex flex-col gap-5 items-center basis-1/4 md:basis-1/6">

      <img
        className="h-32 object-contain md:block hover:scale-125 transition duration-500 cursor-pointer"
        src={img}
        alt={name}
      />
      </a>
    </div>
  );
}

function Section6() {
  return (
    <div
      id="partners"
      className="max-w-[1440px] mx-auto  px-5 md:px-10 lg:px-40 flex flex-col pb-14 gap-20 z-20 relative font-[SpaceGroteskt] pt-10"
    >
      <div className="gap-10 z-20 relative">
        <h2 className="text-[#333333] text-3xl md:text-4xl font-bold uppercase text-center">
          Partners we work with
        </h2>
        <div className="flex flex-row flex-wrap md:hidden md:flex-nowrap mt-10 md:mt-20 w-full justify-between gap-5">

          <Partners link={"https://b-real.uno/"} img={b_real} name={"b.real"}/>
          <Partners link={"https://giga-lab.framer.ai/"} img={Placeholder} name={"Giga Lab"}/>
          <Partners link={"https://manuellevi.art/work/"} img={manuel_levi} name={"Manuel Levi"}/>
          <Partners link={"https://www.mimicproductions.com/"} img={mimic_productions} name={"Mimic Productions"}/>
          <Partners link={"https://www.portugalmanual.com/"} img={portugal_manual} name={"Portugal Manual"}/>
          <Partners link={"https://theinventors.io/"} img={the_inventors} name={"The Inventors"}/>
          <Partners link={"https://www.vipaconnect.com/"} img={VipaConnect} name={"Vipa Connect"}/>


        </div>

        <div className="flex flex-row  flex-wrap md:flex-nowrap mt-10 md:mt-20 w-full justify-between gap-5 hidden md:flex">
          <Partners link={"https://b-real.uno/"} img={b_real} name={"b.real"}/>
          <Partners link={"https://giga-lab.framer.ai/"} img={Placeholder} name={"Giga Lab"}/>
          <Partners link={"https://manuellevi.art/work/"} img={manuel_levi} name={"Manuel Levi"}/>
          <Partners link={"https://www.mimicproductions.com/"} img={mimic_productions} name={"Mimic Productions"}/>
          <Partners link={"https://www.portugalmanual.com/"} img={portugal_manual} name={"Portugal Manual"}/>
          <Partners link={"https://theinventors.io/"} img={the_inventors} name={"The Inventors"}/>
          <Partners link={"https://www.vipaconnect.com/"} img={VipaConnect} name={"Vipa Connect"}/>

        </div>
      </div>
    </div>
  );
}

export default Section6;
