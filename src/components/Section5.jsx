import Placeholder from "../assets/partner_s.svg";
import trends2024 from "../assets/trends_2024.png";
import ar_filter_firejpg from "../assets/ar_filter_firejpg.jpg";
import neurorights from "../assets/neurorights.png";
import tourism_banner from "../assets/tourism_banner.png";
import generative_ai from "../assets/generative_ai.jpg";
import art_of_science from "../assets/art_of_science.jpeg";
import { useTranslation } from "react-i18next";

const newsData = [
  {
    image: trends2024,
    link: "https://medium.com/@pragmaticcoders/ai-predictions-top-13-ai-trends-for-2024-4158d23efd78",
    title: "AI predictions: Top 13 AI trends for 2024",
    source: "Medium",
    date: "21 December 2023",
  },
  {
    image: ar_filter_firejpg,
    link: "https://aeon.co/videos/an-augmented-reality-filter-reveals-the-hidden-movements-all-around-us",
    title:
      "An augmented-reality filter reveals the hidden movements all around us",
    source: "aeon",
    date: "8 November 2023",
  },
  {
    image: neurorights,
    link: "https://sciencemediahub.eu/2023/11/08/neurorights-do-our-brains-need-to-be-protected-by-legislation/",
    title: "Neurorights: Do our brains need to be protected by legislation?",
    source: "European Science-Media Hub",
    date: "8 November 2023",
  },
  {
    image: tourism_banner,
    link: "https://pro.europeana.eu/page/discovering-europe",
    title: "DISCOVERING EUROPE",
    source: "europeana",
    date: "8 November 2023",
  },
  {
    image: generative_ai,
    link: "https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier",
    title:
      "The economic potential of generative AI: The next productivity frontier",
    source: "McKinsey digital",
    date: "14 June 2023",
  },
  {
    image: art_of_science,
    link: "https://news.mit.edu/2023/art-science-and-science-art-1005",
    title: "The art of science and the science of art",
    source: "mit news.",
    date: "5 October 2023",
  },
];

function NewsArticles({ image, link, title }) {
  return (
    <div className="relative flex flex-col pb-20 md:pr-10 basis-1/3 justify-center mt-[-1rem]">
      <div className="relative flex flex-col h-full ">
        <img
          className="object-cover w-full h-[200px]"
          src={image}
          alt="Weather image"
        />
        <a
          href={link}
          className="md:block text-2xl font-bold hover:underline break-normal "
        >
          <h3>{title}</h3>
        </a>
      </div>
    </div>
  );
}

function Section5() {
  const { t } = useTranslation();

  return (
    <div
      id="projects"
      className="max-w-[1440px] mx-auto px-5 md:px-10 pt-20 md:py-30 flex flex-col  gap-10 z-20 font-[SpaceGroteskt] "
    >
      <h5 className="text-[#333333] uppercase font-bold text-3xl font-[SpaceGroteskt] ">
        projects
      </h5>
      <div className="gap-10 z-20 relative ">
        <div className="flex flex-col flex-wrap md:hidden md:flex-nowrap mt-10 md:mt-20 w-full justify-around gap-5 border-b-2 border-[#33333]">
          {newsData.map((article, index) => (
            <NewsArticles key={index} {...article} />
          ))}
        </div>

        <div className="flex flex-row flex-wrap t-10 w-full hidden md:flex border-b-2 border-[#33333] ">
          {newsData.map((article, index) => (
            <NewsArticles key={index} {...article} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section5;
