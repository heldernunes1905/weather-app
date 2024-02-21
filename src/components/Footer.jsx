
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useForm } from "react-hook-form"
import emailjs from '@emailjs/browser';


function Footer() {
  const [showNewDiv, setShowNewDiv] = useState(false);

  const handleEmailClick = () => {
    setShowNewDiv(!showNewDiv);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  
  const onSubmit = (data) => {
    emailjs
      .send(
        'service_h13kkp8',
        'template_mqlpwuc',
        data,
        'zOSDhX5Folu73xVBc'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };


  return (
    <div id="contacts" className="w-full pt-20">
      <div className="max-w-[1440px] bg-[#00cccc] mx-auto px-10 font-[SpaceGroteskt]">
          <div className=" flex items-center justify-center mb-5 md:justify-start">
          </div>
          <div className="flex-grow flex flex-col items-center md:items-start md:pl-8">
            <div>
              <h5 className="text-[#F9F9F9] font-bold  text-2xl">Contacts</h5>
              <a
                href={"/#contactform"}
                className="text-[#F9F9F9] underline underline-offset-1"
                onClick={handleEmailClick}

              >
                fil@futureinnovationlabs.com
                    
              </a>                
            </div>      

            <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-2 w-full mt-4 pt-2">
              <div className="flex flex-col gap-2 items-center md:items-start pb-10">
                <div className="flex items-center">
                  <h5 className="text-[#F9F9F9] font-bold text-xl">Portugal</h5>
                </div>

                <div className=" items-center cursor-pointer" 
                  onClick={() =>
                    window.open("https://maps.app.goo.gl/YQNxTB6qQShPBb9Q8", "_blank")
                  }
                >
                  <p className="text-[#F9F9F9]  text-lg">2825-149 Caparica, Lisbon</p>
                  <p className="text-[#F9F9F9]  text-lg">Edif. YDreams, Madan Parque Sul</p>
                </div>
                <div className="flex items-center">
                  <a
                    href={"tel:(+351) 933 561 680"}
                    className="text-[#F9F9F9]"
                  >
                    +351 933 561 680
                  </a>
                </div>

              </div>
              <div className="flex flex-col gap-2 items-center md:items-start pb-10">
                <div className="flex items-center">
                  <h5 className="text-[#F9F9F9] font-bold text-xl">Bulgaria</h5>
                </div>

                <div className=" items-center cursor-pointer" 
                  onClick={() =>
                    window.open("https://maps.app.goo.gl/hVJ9gwK8yrMxjcAz7", "_blank")
                  }
                >
                  <p className="text-[#F9F9F9]  text-lg">Sofia, 1729</p>
                  <p className="text-[#F9F9F9]  text-lg">Mladost 1A, Andrej Lyapchev blvd.</p>
                </div>
                <div className="flex items-center">
                  <a
                    href={"tel:(+359) 88 8232399"}
                    className="text-[#F9F9F9]"
                  >
                    (+351) 88 8232399
                  </a>
                </div>

              </div>
            </div>
        </div>
        
      </div>
      {showNewDiv && (
        <div id="contactform" className="max-w-[1440px] mx-auto px-5 md:px-10 flex flex-col pt-6 gap-20 z-20 relative font-[SpaceGroteskt] ${showContactForm ? 'visible' : 'invisible'}`}">
        <div className="flex flex-col gap-5 z-40 border-2 pb-6 px-6  md:pb-4 relative">
          <div>
          <div className="flex items-center justify-between pt-4">
            <h5 className="text-[#333333] uppercase font-bold text-xl pl-5  md:pb-4">
              Contact us
            </h5>
            <CloseIcon
              className="cursor-pointer"
              onClick={handleEmailClick}
              sx={{ height: "40px", width: "40px" }}
            />
          </div>
            <div className="z-20 relative flex-grow md:pl-5 flex flex-col pr-10 ">
              <div className="flex flex-col  mb-5 ">
              <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col ">
                  
                  <label className="text-white font-semibold" htmlFor="email">
                    your name
                  </label>
                  <input
                    placeholder="your name"
                    id="name"
                    type="text"
                    className=" text-[#333333] border-b border-black outline-none"
                    {...register("name", { required: true })}
                  />
                    {errors.name && <span>This field is required</span>}

                </div>

                <div className="flex flex-col ">
                  <label className="text-white font-semibold" htmlFor="email">
                    your e-mail address
                  </label>
                  <input
                    placeholder="your e-mail address"
                    id="email"
                    type="email"
                    className=" text-[#333333] border-b border-black outline-none"
                    {...register("email", { required: true })}

                  />
                    {errors.email && <span>This field is required</span>}

                </div>

                <div className="flex flex-col ">
                
                  <label className="text-white font-semibold" htmlFor="email">
                    your message
                  </label>
                  <input
                    placeholder="your message"
                    id="message"
                    type="text"
                    className=" text-[#333333] border-b border-black outline-none"
                    {...register("message", { required: true })}
                  />
                    {errors.message && <span>This field is required</span>}

                </div>
                <div className="flex flex-col border-b border-black outline-none pb-40"></div>
                <div className="flex flex-col pt-4 md:items-end">
                  <button
                    className="min-w-[100px] min-h-[30px] border-2 text-[#333333] font-bold text-xl hover:scale-110 transition duration-500 cursor-pointer"
                    type="submit"
                  >
                    SUBMIT
                  </button>
                </div>
                </form>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
      
      <div className="max-w-[1440px] mx-auto px-10 pt-3 pb-5">
        <div className="flex flex-col md:flex-row  md:justify-between">
          <div className=" flex items-center justify-center mb-5 md:justify-start">
          </div>
          <div className="flex-grow flex flex-col items-center md:items-start">
            <div className="grid  md:grid-cols-6 md:grid-rows- gap-4 w-full mt-3">
              <div className="flex flex-col gap-2 items-center md:items-start">
                <p>Privacy Policy</p>
              </div>
              <div className="flex flex-col gap-2 items-center md:items-start"></div>
              <div className="flex flex-col gap-2 items-center md:items-start"></div>
              
              <div className="flex flex-col gap-2 items-center md:items-start ">
                <div className="flex items-center">
                  <p className="underline underline-offset-1">Facebook</p>
                  
                  
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center md:items-start">
                <div className="flex items-center">
                  <p className="underline underline-offset-1">Instagram</p>

                </div>
              </div>
              <div className="flex flex-col  gap-2 items-center md:items-start">
                <div className="flex items-center">
                  <p className="underline underline-offset-1">LinkedIn</p>
                  
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
