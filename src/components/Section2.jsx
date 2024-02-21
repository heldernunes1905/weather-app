import React, { useState } from "react";
import Placeholder from "../assets/partner_b.svg";
import styled from "styled-components";

const Doing = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(.25turn, #00DAE2,70% ,#0097E4 );
    z-index: 10;
    background-size: cover;
    background-position: 0;
  }
`;

const ServiceContainer = styled.div`
  position: relative;

  &.selected-service {
    img {
      opacity: 0.2; /* Adjust values as needed */
    }
  }
`;

function Services({ img, name, description, onClick, selected }) {
  return (
    <ServiceContainer
      className={`flex flex-col items-center justify-center basis-1/7 md:basis-1/6 ${
        selected ? "selected-service" : ""
      }`}
      onClick={onClick}
    >
      <div className="relative">
        <img
          className="h-32 object-contain hidden md:block"
          src={img}
          alt={name}
        />
        <h5 className="absolute inset-0 text-white text-center bg-opacity-50 p-2 flex items-center justify-center font-bold">
          {name}
        </h5>
      </div>
    </ServiceContainer>
  );
}

function Section2() {
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (index) => {
    setSelectedService(index);
  };

  const servicesData = [
    {
      img: Placeholder,
      name: "Art-Driven Research & Consultancy",
      description:
        "We design and execute projects that integrate best practices in addressing social and economic challenges, aligning with the digital transformation. Through our projects we focus on solutions that combine artistic practices and technology to create processes and solutions that give a unique perspective, shape your vision, and create a more technological and sustainable future. We also have extensive experience with launching and executing residency programmes that invite artists, technologists and researchers to collaborate on innovative projects that explore the intersection of art, science and technology."
    },
    {
      img: Placeholder,
      name: "Creative & Digital Strategy",
      description: "We provide services to enhance creativity and innovation by exploring technology as an instrument for sustainable, aesthetic and impactful solutions. We work with the latest digital innovation technologies, such as Artificial Intelligence, Virtual and Augmented Reality, in a creative and multidisciplinary environment. We offer creative and digital strategy services to artists, organisations and businesses seeking to incorporate immersive, digital and AI experiences into their projects or marketing campaigns.",
    },
    {
      img: Placeholder,
      name: "Education",
      description: "We believe in the power of art and technology to inspire and educate. Our team works with schools, universities and other institutions to provide educational and skills-enhancing workshops and programmes for project-based learning that are engaging and thought-provoking.",
    },
    {
      img: Placeholder,
      name: "Communication & Promotion",
      description:
        "Our strong background in communication and promotion is more than an expertise. We are specialists in Communication consultancy and strategies and Cultural and Art Mediation. Our valuable skills allow us to excel in mediating and promoting innovation and art within society. Our 'tailor-made' approach to communication strategies makes us well-equipped to drive impactful and innovative curated communication not only for the ecosystem but also audience experience oriented.",
    },
    {
      img: Placeholder,
      name: "Events & Exhibitions",
      description:
        "Future Innovation Labs excels in curating and executing impactful events and exhibitions that transcend traditional boundaries. Our team, composed of seasoned creatives and event specialists, brings a wealth of experience in organising immersive and memorable experiences. From carefully planned exhibitions that showcase cutting-edge ideas to dynamic events that foster networking and knowledge exchange, we ensure every project aligns with our commitment to innovation and positive societal impact. Whether it's a thought-provoking symposium, an art exhibition pushing creative boundaries, or an international promotional event, we pride ourselves on delivering excellence in every aspect of event planning and execution.",
    },
  ];

  return (
    <div className="hidden lg:block max-w-[1440px] mx-auto  pt-10 md:flex flex-col gap-20 z-20 relative font-[SpaceGroteskt]" id="whatwedo">
      <Doing className="px-4 py-5">
        <div className="gap-10 z-20 relative">
          <h2 className="text-[#fff] text-3xl md:text-5xl uppercase text-center font-bold">
            What we do
          </h2>

          <div className="flex flex-row flex-wrap md:flex-nowrap mt-10 md:mt-10 w-full gap-10 lg:gap-0 justify-center md:flex ">
          {servicesData.map((service, index) => (
            <Services
              key={index}
              img={service.img}
              name={service.name}
              onClick={() => handleServiceClick(index)}
              selected={selectedService === index}
            />
            ))}
          </div>
        </div>
      </Doing>

      <div className="flex flex-col-reverse md:flex-row pb-10 max-w-[1440px] px-7 md:px-10 md:pt-10  gap-10 mx-auto items-center">
        <div>
          {selectedService !== null && (
            <>
              <h5 className="text-[#333333] text-lg font-bold pb-5 font-[SpaceGroteskt]">
                {servicesData[selectedService].name}
              </h5>
              <h5 className="text-[#333333] text-lg font-[SpaceGroteskt]">
                {servicesData[selectedService].description}
              </h5>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Section2;
