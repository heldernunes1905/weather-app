import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

function Section7() {
  const [isClicked, setIsClicked] = useState(false);

  const handleDivClick = () => {
    // Toggle the state back to false
    setIsClicked(!isClicked);
  };

  return (
    <div className="max-w-[1440px] mx-auto px-5 md:px-10 flex flex-col gap-20 z-20 relative font-[SpaceGroteskt]">
      <div className="flex flex-col gap-5 z-40 border-2 pb-6 px-6 md:pb-10 relative">
        <div>
          <h5 className="text-[#333333] uppercase font-bold text-xl text-center pt-10 md:pb-4">
            subscribe to our newsletter
          </h5>
          <div className="z-20 relative flex-grow md:pl-5 flex flex-col">
            <div className="flex flex-col md:flex-row gap-5 mb-5">
            <div className="flex flex-col gap-2 basis-1/3">
                <label className="text-white font-semibold" htmlFor="name">
                  Name
                </label>
                <input
                  placeholder="name"
                  id="name"
                  type="text"
                  className=" bg-[#ebebeb]  py-2 px-4 text-[#333333] placeholder-black"
                />
              </div>
              <div className="flex flex-col gap-2 basis-1/3">
                <label className="text-white font-semibold" htmlFor="email">
                  e-mail
                </label>
                <input
                  placeholder="e-mail"
                  id="email"
                  type="email"
                  className=" bg-[#ebebeb]  py-2 px-4 text-[#333333] placeholder-black"
                />
              </div>
              <div className="flex flex-col gap-2 basis-1/4 mt-auto">
                <button
                  className="w-full min-h-[45px] border-2 text-[#333333] font-bold text-xl hover:scale-110 transition duration-500 cursor-pointer"
                  type="submit"
                  onClick={() => setIsClicked(!isClicked)}
                >
                  SUBSCRIBE
                </button>
              </div>
            </div>
            
          </div>
          {isClicked && (
              <div className="absolute inset-0 bg-[#333] text-white flex flex-col items-center justify-center z-50" >
                <CloseIcon onClick={handleDivClick} className="absolute top-4 right-4 cursor-pointer"/>
                <h1 className=" text-3xl">Thank you for subscribing!</h1>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}

export default Section7;
