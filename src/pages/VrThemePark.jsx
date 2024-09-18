import React, { useEffect, useState } from "react";
import ReviewPage from "./ReviewPage";
import axios from "axios";
import backicon from "../assets/backicon.png";
import mapicons from "../assets/mapicons.png";
import girls from "../assets/girls.png";
import LineSecond from "../assets/LineSecond.png";
import LineFirst from "../assets/LineFirst.png";

const VrThemePark = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${url}/VRThemePark/user/getSection5?id=1`
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
    <div
      className="relative text-white  "
      style={{
        backgroundImage: `url(${backicon})`,
      }}
    >
      {data.map((item, index) => (
        <div
          key={index}
          className="map"
          style={{
            backgroundImage: `url(${mapicons})`,
          }}
        >
          <div
            className="VR_THEME_PARK_MAIN"
            style={{
              backgroundImage: `url(${girls})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              height: "100%",
              backgroundPosition: "center",
            }}
          >
            <div className="LINE_IMG flex flex-col absolute top-2 ">
              <div className="relative">
                <div>
                  <img src={LineSecond} alt="" />
                </div>
                <div className="absolute top-2  ">
                  <img src={LineFirst} alt="" />
                </div>
              </div>
            </div>
            <div className="container mx-auto">
              <div className="flex pt-12">
                <div className="w-[40%] relative Width ">
                  <img
                    src={item.vrThemeParkImg}
                    alt=""
                    className="object-cover pt-5"
                  />
                  <div
                    className="absolute bottom-28 -right-6 flex justify-center items-center m-4"
                    style={{
                      width: "250px",
                      height: "60px",
                      background: "#ffffff",
                      transform: "skew(-35deg)",
                      OTransform: "skew(-35deg)",
                      MozTransform: "skew(-35deg)",
                      WebkitTransform: "skew(-35deg)",
                    }}
                  >
                    <p
                      className="uppercase font-Poppins tracking-wider text-primary font-bold text-[16px]"
                      style={{
                        transform: "skew(35deg)", // Opposite skew to keep text straight
                        OTransform: "skew(35deg)",
                        MozTransform: "skew(35deg)",
                        WebkitTransform: "skew(35deg)",
                      }}
                    >
                      {item.button}
                    </p>
                  </div>
                </div>

                <div className="w-[60%] flex flex-col">
                  <h2 className="text-[64.26px] font-Poppins font-semibold leading-[52px]">
                    {item.heading}
                  </h2>
                  <p className="text-[20px] font-Poppins font-medium">
                    {item.subHeading}
                  </p>
                  <p className="text-[16px] font-Poppins pt-6">{item.body}</p>
                </div>
              </div>
            </div>

            {/* <ReviewPage /> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default VrThemePark;
