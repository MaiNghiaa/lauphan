import React, { useContext } from "react";
import "../Assets/Css/Footer.css";
import { GlobalContext } from "../Context/GlobalContext";
export default function Footer() {
  const { navClick } = useContext(GlobalContext);

  return (
    <footer
      id={
        navClick !== "/dat-ban" && navClick !== "/dia-chi"
          ? "footer"
          : "footerExpress"
      }
      className="bg-[#df5800] text-white py-[60px]"
    >
      <div className="footer-wrapper container">
        <div className="main-footer flex flex-wrap mx-[-15px]">
          <div className="flex flex-[0_0_50%] px-[15px] max-w-[50%]">
            <div className="info-bot">
              <div className="nameCtybot text-[16px] uppercase">
                Công ty Cổ phần CAM
              </div>
              <div>
                Địa chỉ: Số 9 Đào Duy Anh, Phường Phương Mai, Quận Đống Đa,
                Thành phố Hà Nội
              </div>
              <div>Giấy phép kinh doanh (MST): 0108796725</div>
              {/* <!-- <div>Người ĐDPL: Phan Thanh Tùng</div> --> */}
              <div>Ngày hoạt động: 25/06/2019</div>
              <div>Liên hệ: marketing@lauphan.com</div>
            </div>
          </div>
          <div className="flex-[0_0_50%] px-[15px] max-w-[50%]">
            <div className="float-right">
              <div className="float-left pr-[30px]">
                <a href="https://www.facebook.com/Lauphanbuffet">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="none"
                    viewBox="0 0 40 40"
                  >
                    <path
                      fill="#fff"
                      d="M34.61 0H5.39C2.413 0 0 2.413 0 5.39v29.22C0 37.587 2.413 40 5.39 40h14.411l.025-14.294h-3.714c-.482 0-.874-.39-.876-.873l-.018-4.607c-.002-.485.391-.88.876-.88h3.707v-4.452c0-5.166 3.156-7.98 7.765-7.98h3.781c.484 0 .877.393.877.877v3.885c0 .484-.392.876-.876.876l-2.321.001c-2.507 0-2.992 1.191-2.992 2.939v3.854h5.508c.525 0 .932.459.87.98l-.546 4.607c-.053.441-.426.773-.87.773H26.06L26.035 40h8.575c2.977 0 5.39-2.413 5.39-5.39V5.39C40 2.413 37.587 0 34.61 0z"
                    />
                  </svg>
                </a>
              </div>
              <div className="float-left pr-[30px]">
                <a href="https://www.instagram.com/lau.phan/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="none"
                    viewBox="0 0 40 40"
                  >
                    <path
                      fill="#fff"
                      d="M34.14 0H5.86C2.628 0 0 2.629 0 5.86v28.28C0 37.372 2.629 40 5.86 40h28.28c3.231 0 5.86-2.629 5.86-5.86V5.86C40 2.628 37.371 0 34.14 0zM20.079 30.469c-5.816 0-10.547-4.731-10.547-10.547 0-5.816 4.731-10.547 10.547-10.547 5.816 0 10.547 4.731 10.547 10.547 0 5.816-4.731 10.547-10.547 10.547zm11.719-18.75c-1.939 0-3.516-1.577-3.516-3.516 0-1.938 1.577-3.515 3.516-3.515 1.938 0 3.515 1.577 3.515 3.515 0 1.939-1.577 3.516-3.515 3.516z"
                    />
                    <path
                      fill="#fff"
                      d="M31.797 7.031c-.647 0-1.172.525-1.172 1.172 0 .647.525 1.172 1.172 1.172.646 0 1.172-.525 1.172-1.172 0-.647-.526-1.172-1.172-1.172zM20.078 11.719c-4.523 0-8.203 3.68-8.203 8.203s3.68 8.203 8.203 8.203 8.203-3.68 8.203-8.203-3.68-8.203-8.203-8.203z"
                    />
                  </svg>
                </a>
              </div>
              <div className="float-left pr-[30px]">
                <a href="https://www.tiktok.com/@lau.phan">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="none"
                    viewBox="0 0 40 40"
                  >
                    <g clipPath="url(#clip0)">
                      <path
                        fill="#fff"
                        d="M37.115 0H2.885C1.29 0 0 1.291 0 2.885v34.23C0 38.708 1.291 40 2.885 40h34.23C38.708 40 40 38.709 40 37.115V2.885C40 1.29 38.709 0 37.115 0zM30.02 15.31v2.703c-1.275 0-2.514-.249-3.682-.742-.752-.317-1.452-.726-2.092-1.22l.02 8.324c-.009 1.874-.75 3.635-2.092 4.962-1.092 1.08-2.476 1.766-3.976 1.988-.353.052-.712.08-1.074.08-1.606 0-3.13-.521-4.378-1.48-.234-.182-.459-.377-.672-.588-1.455-1.438-2.205-3.386-2.079-5.436.097-1.56.722-3.048 1.763-4.214 1.377-1.544 3.305-2.4 5.366-2.4.362 0 .721.027 1.074.08V21.146c-.334-.11-.691-.17-1.063-.17-1.883 0-3.406 1.535-3.378 3.42.018 1.205.676 2.259 1.648 2.84.456.273.981.442 1.542.473.439.024.86-.037 1.25-.166 1.346-.445 2.316-1.708 2.316-3.198l.005-5.574V8.596h3.724c.003.369.04.729.11 1.078.281 1.412 1.077 2.637 2.185 3.472.966.729 2.169 1.16 3.473 1.16h.01v1.003z"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <path fill="#fff" d="M0 0H40V40H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
