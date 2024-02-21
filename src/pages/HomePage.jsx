import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";
import Section6 from "../components/Section6";
import Section7 from "../components/Section7";

function HomePage() {
  const { hash } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      document
        .getElementById(hash.replace("#", ""))
        ?.scrollIntoView({ behavior: "smooth" });
    }, 500);
  }, [hash]);

  return (
    <div className="overflow-x-hidden">
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section5 />
      <Section6 />
      <Section7 /> 
    </div>
  );
}

export default HomePage;
