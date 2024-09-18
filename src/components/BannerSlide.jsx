import React, { useEffect, useState } from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Rectangle20 from "../assets/Rectangle 20.png";

// const slides = [
//   {
//     image: "../assets/ban1.png",
//     discount: "30% off",
//     product: "ps5",
//     gameIcon: "../assets/gameic.png",
//   },
//   {
//     image: "../assets/b1.png",
//     discount: "70% off",
//     product: "ps7",
//     gameIcon: "../assets/gameic.png",
//   },
// ];

const BannerSlide = ({ caraousel, slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 3000); // Slide every 3 seconds
    return () => clearInterval(slideInterval); // Clear interval on component unmount
  }, []);

  return (
    <div
      className="relative h-full bg-no-repeat bg-cover transition-all duration-700 ease-in-out"
      style={{
        backgroundImage: `url(${Rectangle20})`,
      }}
    >
      {caraousel.map((item, index) => (
        <div key={index} className="container mx-auto py-8">
          <div className="flex justify-between items-center">
            <div className="textts flex flex-col justify-start items-start transition-all duration-500 ease-in-out">
              <h3 className="font-Poppins font-bold text-[26px]">
                {item.title1}
              </h3>
              <p className="uppercase text-[16px] font-Poppins">
                {item.title2}
              </p>
            </div>
            <div className="w-full flex items-center justify-center">
              <div className="Banner_offer flex justify-center items-center gap-7 transition-all duration-500 ease-in-out">
                <img
                  src={slides[currentSlide].image}
                  alt=""
                  className="transition-all duration-500 ease-in-out"
                />
                <div className="flex flex-col justify-center items-center pt-3">
                  <span className="bg-[#FF0091] uppercase px-10 py-2 rounded-full text-[15px] tracking-wider font-Poppins font-bold text-white transition-all duration-500 ease-in-out">
                    {slides[currentSlide].discount}
                  </span>

                  <p className="font-Poppins font-semibold uppercase w-full text-[16px] tracking-widest text-white border-t border-t-white mt-2 pt-2 transition-all duration-500 ease-in-out">
                    {item.subTitle1}
                  </p>
                  <h3 className="text-[80px] font-Poppins font-semibold text-white uppercase transition-all duration-500 ease-in-out">
                    {slides[currentSlide].product}
                  </h3>
                </div>
                <div className="flex flex-col gap-2">
                  <button className="bg-primary rounded-md text-white p-3 text-[15px] font-Poppins font-semibold uppercase tracking-wider">
                    {item.button1}
                  </button>
                  <button className="bg-white rounded-md text-primary p-3 text-[15px] font-Poppins font-semibold uppercase tracking-wider">
                    {item.button2}
                  </button>
                </div>
                <div>
                  <img
                    src={slides[currentSlide].gameIcon}
                    alt=""
                    className="transition-all duration-500 ease-in-out"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Fixed button for sliding */}
          <button
            onClick={nextSlide}
            className="absolute right-8 2xl:right-52 bottom-28 bg-purple-300 rounded-full py-3 px-6 flex justify-center items-center transition-all duration-500 ease-in-out"
          >
            <MdOutlineArrowForwardIos className="text-primary text-[29px] font-bold" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default BannerSlide;
