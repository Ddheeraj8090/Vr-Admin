import React, { useEffect, useState } from "react";
import apiCall from "../utils/ApiHandler";

const Header = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiCall(
          "get",
          "/VRThemePark/user/getSection1?id=1"
        );
        setData([response.data]);
      } catch (error) {
        console.log(
          "Error fetching data:",
          error.response ? error.response.data : error.message
        );
      }
    };

    fetchData();
  }, []);
  return (
    <div className=" text-white">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-center mx-4 pt-2"
        >
          <div className="flex justify-center items-center   gap-2">
            <img
              src={item.logoImage1}
              alt=""
              className="w-[120px] object-cover"
            />
          </div>
          <div className="flex justify-center items-center gap-7">
            <ul className="flex justify-center items-center gap-4">
              <li className="font-Poppins font-bold text-[13px] uppercase">
                {item.navlink1}
              </li>
              <li className="font-Poppins font-bold text-[13px] uppercase">
                |
              </li>
              <li className="font-Poppins font-bold text-[13px] uppercase">
                {item.navlink2}
              </li>
              <li className="font-Poppins font-bold text-[13px] uppercase">
                |
              </li>
              <li className="font-Poppins font-bold text-[13px] uppercase">
                {item.navlink3}
              </li>
              <li className="font-Poppins font-bold text-[13px] uppercase">
                |
              </li>
              <li className="font-Poppins font-bold text-[13px] uppercase">
                {item.navlink4}
              </li>
            </ul>
            <div className="flex justify-center items-center gap-3">
              <div className="nav_btn ">
                <span className="uppercase font-Poppins tracking-wider font-bold text-[13px]">
                  {item.buttonText1}
                </span>
              </div>
              <div className="nav_btn  ">
                <span className="uppercase font-Poppins tracking-wider font-bold text-[13px]">
                  {item.buttonText2}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Header;
