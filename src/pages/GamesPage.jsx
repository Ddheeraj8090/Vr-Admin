import React, { useEffect, useState } from "react";
import axios from "axios";
import GameSlide from "../components/GameSlide";
import BannerSlide from "../components/BannerSlide";

const GamesPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [topList, setTopList] = useState();
  const [bottomList, setBottomList] = useState();
  const [caraousel, setCaraousel] = useState([]);
  const [slides, setSlides] = useState();
  const url = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${url}/VRThemePark/user/getSection4?id=1`
        );
        setData([response.data.data]);
        setTopList(response.data.data.topCardsList);
        setBottomList(response.data.data.bottomCardList);
        setCaraousel([response.data.data.carousel]);
        setSlides(response.data.data.slides);
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
    <div key={index} className="bg-primary Games_to_explore  text-white">
      <div className="Games_to_explore_inner">
        <div className="container mx-auto">
          <div className="flex justify-center items-center py-10">
            <h3 className="font-Poppins font-bold text-[27.78px] tracking-wider">
              {item.title}
            </h3>
          </div>

          <div className="border-t border-t-[#FF0091] relative">
            <div>
              <p className="font-Poppins  text-[14px] pl-40 pt-6">
                {item.bottomBody}
              </p>
              <GameSlide list={topList} />
            </div>
            <div className="flex justify-start items-center gap-5 absolute -top-10 left-0">
              <div
                className="flex justify-center items-center  rounded-md"
                style={{
                  width: "150px",
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
                  {item.topHeading1}
                </p>
              </div>
              <h3 className="text-[27.77px] tracking-widest font-Poppins font-bold uppercase">
                {item.topHeading2}
              </h3>
            </div>
          </div>
        </div>
      </div>

      <BannerSlide caraousel={caraousel} slides={slides} />

      <div className="Games_to_explore_inner Bottom_inner">
        <div className="container mx-auto">
          <div className="border-t border-t-[#FF0091] relative mt-20">
            <div>
              <p className="font-Poppins  text-[14px] pl-40 pt-6">
                {item.topBody}
              </p>
            </div>
            <div className="flex justify-start items-center gap-5 absolute -top-10 left-0">
              <div
                className="flex justify-center items-center  rounded-md"
                style={{
                  width: "150px",
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
                  {item.bottomHeading1}
                </p>
              </div>
              <h3 className="text-[27.77px] tracking-widest font-Poppins font-bold uppercase">
                {item.bottomHeading2}
              </h3>
            </div>
          </div>
          <GameSlide list={bottomList} />
        </div>
      </div>
    </div>
  ));
};

export default GamesPage;
