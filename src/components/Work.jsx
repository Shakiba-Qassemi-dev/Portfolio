"use client"
import React from "react";
import { HiFlag } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";

let data = [
  {
    id: 1,
    span: "This is a demo from food website.Technologies Used - Html , css ,tailwind",
    image1: "/images/screen food.png",
    href: "https://shakiba-qassemi-dev.github.io/Food-website/",
    tags: ["html", "css", "tailwind"],

  },
  {
    id: 2,
    span: "This is a demo from Trip website.Technologies Used - Html , css ,tailwind",
    image1: "/images/tripscr.png",
    href: "https://shakiba-qassemi-dev.github.io/Trip/",
    tags: ["html", "css", "tailwind"],
  },
  {
    id: 3,
    span: "This is a demo from Digikala website.Technologies Used - React js ,tailwind",
    image1: "/images/digiscr.png",
    href: "https://digikala-gold.vercel.app/",
    tags: ["react", "tailwind"],
  },
  {
    id: 4,
    span: "This is a demo from Golestan website.Technologies Used - React js ,tailwind",
    image1: "/images/golestanscr.png",
    href: "https://golestan-tea.vercel.app/",
    tags: ["react", "tailwind"],
  },
  {
    id: 5,
    span: "This is a demo from Car website.Technologies Used - Html, Css ,tailwind",
    image1: "/images/carscr.png",
    href: "https://shakiba-qassemi-dev.github.io/car-website/",
    tags: ["html", "css", "tailwind"],
  },
  {
    id: 6,
    span: "This is a demo from media website.Technologies Used - Html, Css ,Mui, Nextjs",
    image1: "/images/market.png",
    href: "https://mediamarket-shop-6s4c.vercel.app/",
    tags: ["nextjs", "mui", "css"],
  },
  {
    id: 7,
    span: "This is a demo from Alibaba website.Technologies Used - Html, Css ,Tailwind, Nextjs",
    image1: "/images/aliiii.png",
    href: "https://alibaba-ju2g.vercel.app/",
    tags: ["nextjs", "html", "css", "tailwind"],
  },
  {
    id: 8,
    span: "This is a demo from Weather api website.Technologies Used - Html, Css ,Javascript",
    image1: "/images/weather.png",
    href: "https://shakiba-qassemi-dev.github.io/Weather-api/",
    tags: ["javascript", "html", "css"],
  },
];

function Work() {
  const filters = ["all", "css", "javascript", "react", "nextjs", "tailwind"];

  const [activeFilter, setActiveFilter] = React.useState("all");
  const filteredData =
    activeFilter === "all"
      ? data
      : data.filter(item => item.tags.includes(activeFilter));
  return (
    <section id="work" className="bg-black py-12">
      {/* Section Title */}
      <div className="md:w-1/2 w-full flex text-white gap-3 pl-9">
        <HiFlag className="text-3xl text-[#dbf52f]" />
        <h2 className="text-2xl font-semibold text-[#dbf52f]">My work :</h2>
      </div>
      <div className="flex gap-3 flex-wrap justify-center mt-10">
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-4 py-2 border rounded text-white ${activeFilter === f ? "bg-[#dbf52f] text-black" : "border-[#dbf52f]"
              }`}
          >
            {f.toUpperCase()}
          </button>
        ))}
      </div>
      {/* Swiper Slider */}
      <div className="mt-10 px-6">
        <Swiper
          navigation={true}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[Pagination, Navigation]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="pb-14"
        >
          {filteredData.map(item => (
            <SwiperSlide key={item.id}>
              <a href={item.href} target="_blank">
                <div className="w-[350px] group cursor-pointer z-10 relative text-center text-[18px] shadow-xl rounded-[8px] p-3">
                  {/* SVG Frame */}
                  <svg
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    className="absolute inset-0 w-full h-full z-0"
                  >
                    <rect
                      x="1"
                      y="1"
                      width="98"
                      height="98"
                      stroke="#dbf52f"
                      strokeWidth="1"
                      fill="none"
                      className="stroke-box"
                    />
                  </svg>

                  {/* Card Content */}
                  <figure className="w-full h-[200px]">
                    <img
                      src={item.image1}
                      className="w-full h-full object-cover"
                    />
                  </figure>

                  <figcaption className="text-white mt-2 px-2">
                    {item.span}
                  </figcaption>

                  {/* Button */}

                  <button className="font-semibold cursor-pointer py-1 px-3 rounded   mt-6 border-2 border-[#dbf52f] text-white relative overflow-hidden mb-8 w-[80%] mx-auto">
                    See Website
                    <span className="absolute inset-0  z-0"></span>
                  </button>





                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex justify-center items-center mt-16 "><a href="https://github.com/Shakiba-Qassemi-dev?tab=repositories" className="text-white border-2 border-[#dbf52f] px-10 py-4 rounded-[8px] flex gap-3 items-center hover:bg-[#dbf52f] hover:text-black">For more projects, visit my page<FaArrowRight /></a></div>


      <div className=" relative w-full h-screen mt-16">
        <img src="/images/banner.jpg" className="w-full h-full object-cover"/>
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
      </div>
    </section>
  );
}

export default Work;
