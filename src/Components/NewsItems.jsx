import React from "react";

export default function NewsItems({ item, index }) {
  return (
    <div className="item flex flex-wrap mb-4" key={index}>
      {" "}
      <div className="relative w-full px-[15px] flex-[0_0_41.666666667%] max-w-[41.666666667%]">
        <a href="!#">
          <div className="img-news">
            <img src={require(`../Assets/Images/${item.img}`)} alt="" />
          </div>
        </a>
      </div>
      <div className="relative w-full px-[15px] flex-[0_0_58.333333333%] max-width-[58.333333333%]">
        <div className="news-content">
          <div className="label float-left w-full mb-4">
            <div className="brand bg-black w-fit text-white float-left mr-[15px] py-[5px] px-[12px] flex items-center justify-center gap-1 text-[13pt] font-light">
              <span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.02374 14C5.59169 14 5.19288 13.8337 4.89377 13.5344L0.473591 9.11161C-0.157864 8.47978 -0.157864 7.48216 0.473591 6.85033L6.38932 0.931082C6.92107 0.399015 7.88487 -3.05176e-05 8.61602 -3.05176e-05H12.4047C13.2688 -3.05176e-05 14 0.731557 14 1.59616V5.38715C14 6.11874 13.6012 7.0831 13.0694 7.61517L7.15371 13.5344C6.8546 13.8337 6.45579 14 6.02374 14ZM8.61602 0.997594C8.15074 0.997594 7.41958 1.29688 7.08724 1.62942L1.17151 7.54867C0.938872 7.78145 0.938872 8.14724 1.17151 8.38002L5.59169 12.8028C5.82433 13.0356 6.22314 13.0356 6.42255 12.8028L12.3383 6.88358C12.6706 6.55104 12.9697 5.8527 12.9697 5.35389V1.56292C12.9697 1.23038 12.7039 0.964338 12.3715 0.964338H8.61602V0.997594Z"
                    fill="white"
                  />
                  <path
                    d="M10.0116 5.95243C8.94811 5.95243 8.05078 5.08782 8.05078 3.99044C8.05078 2.9263 8.91488 2.02844 10.0116 2.02844C11.0751 2.02844 11.9724 2.89305 11.9724 3.99044C11.9724 5.05457 11.1083 5.95243 10.0116 5.95243ZM10.0116 2.95955C9.44663 2.95955 8.98135 3.42511 8.98135 3.99044C8.98135 4.55576 9.44663 5.02132 10.0116 5.02132C10.5766 5.02132 11.0419 4.55576 11.0419 3.99044C11.0419 3.42511 10.5766 2.95955 10.0116 2.95955Z"
                    fill="white"
                  />
                </svg>
              </span>
              {item.tag}
            </div>
          </div>
          <div className="News-list">
            <div className="title">
              <p className="text-[#0e0e10] mt-4 font-medium ">{item.title}</p>
            </div>
            <div className="desc min-h-[75px] mt-3">{item.description}</div>
            <div className="uudai-viewmore flex justify-start items-center gap-2 italic font-thin cursor-pointer hover:text-[#e84a1b] hover:fill-[#e84a1b]">
              Xem chi tiết{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M2 9.94438C1.72386 9.94438 1.5 10.1682 1.5 10.4444C1.5 10.7205 1.72386 10.9444 2 10.9444V9.94438ZM18 10.4444L18.3536 10.7979C18.4473 10.7042 18.5 10.577 18.5 10.4444C18.5 10.3118 18.4473 10.1846 18.3536 10.0908L18 10.4444ZM13.9091 5.64639C13.7138 5.45112 13.3973 5.45112 13.202 5.64639C13.0067 5.84165 13.0067 6.15823 13.202 6.35349L13.9091 5.64639ZM13.202 14.5353C13.0067 14.7305 13.0067 15.0471 13.202 15.2424C13.3973 15.4376 13.7138 15.4376 13.9091 15.2424L13.202 14.5353ZM2 10.9444H18V9.94438H2V10.9444ZM18.3536 10.0908L13.9091 5.64639L13.202 6.35349L17.6464 10.7979L18.3536 10.0908ZM17.6464 10.0908L13.202 14.5353L13.9091 15.2424L18.3536 10.7979L17.6464 10.0908Z"
                    fill="#0E0E10"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
