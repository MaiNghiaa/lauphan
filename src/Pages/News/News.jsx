import React, { useEffect, useState } from "react";
import dataNews from "../../Mookup/dataNews.json";
import NewsItems from "../../Components/NewsItems";
import axios from "axios";

export default function News() {
  const [dataNews, setDataNews] = useState();
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("http://localhost:3000/News");
        if (response.status === 200) {
          setDataNews(response.data.news);
          console.log(response.data.news);
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          console.error("Endpoint không tìm thấy.");
        } else {
          console.error("Lỗi khi fetch:", error.message);
        }
      }
    };
    fetchNews();
  }, []);
  return (
    <div className="News pt-[71px]">
      <div className="news-wrapper container">
        <div className="header-news flex flex-wrap mx-[-15px]">
          <div className="my-[60px] flex-[0_0_100%] max-w-full">
            <p className="text-[56px] text-[#d18e00] font-bold">Tin tức</p>
            <p className="text-[56px] text-[#d18e00] font-bold">
              từ nhà hàng Lẩu Phan
            </p>
          </div>
          <div className="List-news mb-10 flex flex-wrap mx-[-15px]">
            {dataNews &&
              dataNews.map((item, index) => (
                <NewsItems item={item} index={index} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
