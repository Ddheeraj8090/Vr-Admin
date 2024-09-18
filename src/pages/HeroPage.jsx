import React, { useEffect, useState } from "react";
import { IoIosPeople } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import axios from "axios";
import purpleBtn from "../assets/purple_btn.png";
import outlinepurple from "../assets/outlinepurple_btn.png";
import googleImg from "../assets/google.svg";
import Marquee from "react-fast-marquee";

const HeroPages = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${url}/VRThemePark/user/getSection2?id=1`
        );
        setData([response.data.data]);
      } catch (err) {
        console.error(
          "Error fetching data:",
          err.response ? err.response.data : err.message
        );
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="text-white Hero_banner_inner">
      {data.map((item, index) => (
        <div key={index} className="container mx-auto">
          <div className="flex justify-center items-center gap-4 pt-8 pb-12">
            <button
              style={{
                backgroundImage: `url(${purpleBtn})`,
              }}
              className="btn-purple "
            >
              {item.tab1}
            </button>

            <button
              style={{
                backgroundImage: `url(${outlinepurple})`,
              }}
              className="btn-purple-outline"
            >
              {item.tab2}
            </button>
          </div>

          <div className="flex  gap-20">
            <div className="w-[50%] ml-32">
              <div
                className="relative h-[353px] w-[343px] p-5"
                style={{
                  boxShadow: " 0px 17px 38px #00000036",
                  border: "2px solid #B85CFF",
                  borderRadius: "13px",
                  opacity: 1,
                  background: "#170930 0% 0% no-repeat padding-box",
                }}
              >
                <h1 className="text-[34.64px] font-Poppins font-bold text-left text-[#fff] leading-[38px]">
                  {item.heroSectionCard.cardHeading}
                </h1>
                <p className="text-[13px] font-Poppins text-[#fff] text-left mt-4">
                  {item.heroSectionCard.cardBody}
                </p>
                <div className="bg-[#FF00B8] mt-4 rounded-[6px] uppercase w-full text-center tracking-wider font-Poppins font-bold text-[16px] py-2 px-4">
                  {item.heroSectionCard.cardButton}
                </div>
                <div className="py-2 flex flex-col justify-center items-center gap-2">
                  <div className="flex justify-center items-center gap-1">
                    <IoIosPeople />
                    <p className="text-[12px] font-Poppins uppercase text-[#fff] tracking-wider">
                      {item.heroSectionCard.cardVisitor}
                    </p>
                  </div>
                  <div className="flex justify-center items-center gap-1">
                    <span className="bg-[#E2FF46] p-2  rounded-full flex justify-center items-center">
                      <FaPlay className="text-[10px] text-primary" />
                    </span>
                    <p className="text-[12px] font-Poppins uppercase text-[#E2FF46] tracking-wider">
                      {item.heroSectionCard.cardFooter}
                    </p>
                  </div>
                </div>
                <span className="absolute -top-5 bg-white shadow-md gap-5 font-Poppins flex justify-start items-center text-center font-medium text-[12px] uppercase tracking-widest rounded-md px-[10px] py-[6px] text-primary">
                  <p>{item.heroSectionCard.reviewCounts}</p>{" "}
                  <img
                    src={googleImg}
                    alt=""
                    className="h-[20px] w-[20px] object-cover"
                  />{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 pt-12">
            <div
              className="flex justify-center items-center ml-16 rounded-md"
              style={{
                width: "60px",
                height: "30px",
                background: "#761AC2",
                transform: "skew(-35deg)",
                OTransform: "skew(-35deg)",
                MozTransform: "skew(-35deg)",
                WebkitTransform: "skew(-35deg)",
              }}
            >
              <p
                className="uppercase font-Poppins tracking-wider font-bold text-[13px]"
                style={{
                  transform: "skew(35deg)", // Opposite skew to keep text straight
                  OTransform: "skew(35deg)",
                  MozTransform: "skew(35deg)",
                  WebkitTransform: "skew(35deg)",
                }}
              >
                {item.liveButton}
              </p>
            </div>
            <div className="flex justify-center gap-4 items-end  ">
              <div
                className="flex justify-center items-center  rounded-md"
                style={{
                  width: "300px",
                  height: "50px",
                  background: "#FF0091",
                  transform: "skew(-35deg)",
                  OTransform: "skew(-35deg)",
                  MozTransform: "skew(-35deg)",
                  WebkitTransform: "skew(-35deg)",
                }}
              >
                <p
                  className="uppercase font-Poppins tracking-widest font-semibold text-[18px]"
                  style={{
                    transform: "skew(35deg)", // Opposite skew to keep text straight
                    OTransform: "skew(35deg)",
                    MozTransform: "skew(35deg)",
                    WebkitTransform: "skew(35deg)",
                  }}
                >
                  {item.button1}
                </p>
                <GoDotFill
                  className="text-[#E2FF46]  text-[20px]"
                  style={{
                    transform: "skew(35deg)", // Opposite skew to keep text straight
                    OTransform: "skew(35deg)",
                    MozTransform: "skew(35deg)",
                    WebkitTransform: "skew(35deg)",
                  }}
                />
              </div>
              <div
                className="flex justify-center items-center gap-2  rounded-md"
                style={{
                  width: "300px",
                  height: "50px",
                  background: "#FF0091",
                  transform: "skew(-35deg)",
                  OTransform: "skew(-35deg)",
                  MozTransform: "skew(-35deg)",
                  WebkitTransform: "skew(-35deg)",
                }}
              >
                <FaLocationDot
                  className="text-primary text-[15px]"
                  style={{
                    transform: "skew(35deg)", // Opposite skew to keep text straight
                    OTransform: "skew(35deg)",
                    MozTransform: "skew(35deg)",
                    WebkitTransform: "skew(35deg)",
                  }}
                />
                <p
                  className="uppercase font-Poppins tracking-widest font-semibold text-[18px]"
                  style={{
                    transform: "skew(35deg)", // Opposite skew to keep text straight
                    OTransform: "skew(35deg)",
                    MozTransform: "skew(35deg)",
                    WebkitTransform: "skew(35deg)",
                  }}
                >
                  {item.button2}
                </p>
              </div>

              {/* <div className="nav_btn flex w-full justify-center items-center gap-2 ">
               <span className='uppercase w-full font-Poppins tracking-wider font-bold text-[16px] flex justify-center items-center gap-2'><p>CHECK OFFERS</p> <GoDotFill className='text-[#E2FF46]  text-[20px]'/></span>
             
              </div>
              <div className="nav_btn flex justify-center items-center gap-2 ">
               <span className='uppercase font-Poppins tracking-wider font-bold text-[16px] flex justify-center items-center gap-2'><FaLocationDot className='text-primary text-[20px]'/> <p>get direction </p></span>
            
              </div> */}

              <div
                className="flex justify-center items-center  rounded-md"
                style={{
                  width: "650px",
                  height: "35px",
                  background: "#761AC2",
                  transform: "skew(-35deg)",
                  OTransform: "skew(-35deg)",
                  MozTransform: "skew(-35deg)",
                  WebkitTransform: "skew(-35deg)",
                }}
              >
                <div
                  className="uppercase font-Poppins tracking-wider font-bold text-[10px]"
                  style={{
                    transform: "skew(35deg)", // Opposite skew to keep text straight
                    OTransform: "skew(35deg)",
                    MozTransform: "skew(35deg)",
                    WebkitTransform: "skew(35deg)",
                  }}
                >
                  <Marquee>{item.runningText}</Marquee>
                </div>
              </div>

              <div
                className="flex justify-center items-center  rounded-md"
                style={{
                  width: "170px",
                  height: "40px",
                  background: "#FF0091",
                  transform: "skew(-35deg)",
                  OTransform: "skew(-35deg)",
                  MozTransform: "skew(-35deg)",
                  WebkitTransform: "skew(-35deg)",
                }}
              >
                <p
                  className="uppercase font-Poppins tracking-widest font-semibold text-[16px]"
                  style={{
                    transform: "skew(35deg)", // Opposite skew to keep text straight
                    OTransform: "skew(35deg)",
                    MozTransform: "skew(35deg)",
                    WebkitTransform: "skew(35deg)",
                  }}
                >
                  {item.button3}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroPages;
