import axios from "axios";
import React, { useEffect, useState } from "react";
import LineSecond from "../assets/LineSecond.png";
import LineFirst from "../assets/LineFirst.png";

const WhyChooseUs = () => {
  const [data, setData] = useState([]);
  const [cardData, setCardData] = useState();
  const [chooseUsOptions, setChooseUsOptions] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${url}/VRThemePark/user/getSection3?id=1`
        );
        setData([response.data.data]);
        setCardData(response.data.data.whyChooseUsCard);
        setChooseUsOptions(response.data.data.whyChooseUsOptions);
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

  return data.map((item, index) => (
    <div key={index} className="relative Why_vr text-white mt-10">
      <div className="flex flex-col absolute top-2 ">
        <div className="relative Why_vr_Inner">
          <div>
            <img src={LineSecond} alt="" />
          </div>
          <div className="absolute top-2  ">
            <img src={LineFirst} alt="" />
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="pt-10">
          <h3 className="uppercase text-center text-[27.78px] font-Poppins font-bold tracking-wider text-white">
            {item.heading}
          </h3>
        </div>
        <div className="grid grid-cols-3 gap-5 pt-10 justify-center items-start mx-40">
          {cardData.map((card) => (
            <div
              key={card.cardId}
              className=" flex flex-col justify-center items-center"
            >
              <img
                src={card.cardImgUrl}
                alt=""
                className="w-[140px] h-[100px] object-contain"
              />
              <h2 className="text-[25px] font-bold font-Poppins">
                {card.cardTitle}
              </h2>
              <p className="text-[9px] font-Poppins text-center">
                {card.cardBody}
              </p>
            </div>
          ))}
        </div>

        <div className="relative flex justify-center items-center gap-2 py-3  rounded-lg w-full max-w-lg mx-auto my-6">
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-purple-400"></div>

          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-purple-400"></div>

          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-purple-400"></div>

          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-purple-400"></div>

          <h3 className="font-Poppins font-bold text-[24.66px] text-white">
            {item.subHeading}
          </h3>
          <h3 className="font-Poppins font-bold text-[11.11px] bg-secondary p-4  text-white">
            <span className="text-[15px] inline-block ">{item.address1},</span>
            <span className="inline-block ">{item.address2}</span>
          </h3>
        </div>

        <p className="text-[14px] leading-5 font-Poppins  ">{item.body}</p>
        <div className="flex justify-center items-center">
          <div
            className="bg-secondary flex justify-between items-center py-5 px-20 gap-12 mt-10"
            style={{
              boxShadow: " 0px 12px 10px #0000004D",

              borderRadius: "16px",
              opacity: 1,
            }}
          >
            {chooseUsOptions.map((option) => (
              <div
                key={option.optionId}
                className="flex flex-col justify-center items-center gap-2"
              >
                <img src={option.optionImgUrl} alt="" className="" />
                <h5 className="uppercase font-Poppins font-medium text-[14px]">
                  {option.optionTitle}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ));
};

export default WhyChooseUs;
