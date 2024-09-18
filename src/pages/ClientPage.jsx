import React, { useEffect, useState } from "react";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import backicon from "../assets/backicon.png";
import top2 from "../assets/top2.png";

const ClientPage = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,

    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true, // Enable autoslide
    autoplaySpeed: 3000,
  };

  const [data, setData] = useState([]);
  const [images, setImages] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${url}/VRThemePark/user/getSection7?id=1`
        );
        setData([response.data.data]);
        setImages(response.data.data.clientSectionImages);
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
      className=" text-white py-10"
      style={{ backgroundImage: `url(${backicon})` }}
    >
      <div
        style={{
          backgroundImage: `url(${top2})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100%",
          backgroundPosition: "center",
        }}
      >
        {data.map((item, index) => (
          <div key={index} className="container mx-auto">
            <div className="flex flex-col justify-center items-center border-t border-t-[#FF00B8]  ">
              <span className="tracking-wider text-[36.82px] leading-5 font-bold uppercase font-Poppins pt-10">
                {item.heading1}
              </span>
              <h2 className="text-[52px] font-semibold font-Poppins capitalize pt-4 ">
                {item.heading2}
              </h2>
            </div>
            <div className=" pt-16">
              <Slider {...settings} className="">
                {images.map((img) => (
                  <div key={img.id}>
                    <img src={img.image} alt="" className="" />
                  </div>
                ))}
              </Slider>
            </div>
            <p className=" text-[14px] font-Poppins  pt-16">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientPage;
