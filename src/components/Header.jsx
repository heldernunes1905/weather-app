import Logo from "../assets/symbol_logo.svg?react";
import Lettering from "../assets/lettering.svg?react";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function Header() {
  return (
    <div className="relative max-h-screen" id="home">
      <video
        className="h-[100vh] max-h-[1080px] md:origin-top md:h-100 object-cover w-full"
        src={"/background_header_video.mp4"}
        autoPlay
        loop
        playsInline
        muted
        alt="Video de background"
      ></video>


      <Lettering
        className="absolute top-0 left-0 h-1/5 z-50"
        alt="Imagem de logo"
      />

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] max-w-[320px] ">
        <Logo className="h-full" alt="Imagem de logo" />
      </div>

      <div className="absolute left-1/2 bottom-[27%] md:bottom-[17%] -translate-x-1/2 -translate-y-1/">
        <ArrowDownwardIcon  style={{ fontSize: '4em', color: 'white' }} alt="Seta para baixo" />
      </div>
      
      <div className="absolute -translate-y-3/4 w-full bg-white ">
        <div className="flex flex-col-reverse md:flex-row pt-10 pb-20 max-w-[1440px] px-10 mx-auto items-center">
              <h1 className="text-[#333333] text-3xl font-[SpaceGroteskt]">
                Empowerment through Innovation: shaping a Future of Sustainability, Impact and Inclusivity.
              </h1>
        </div>
      </div>
      
      
    </div>
    
  );
}

export default Header;
