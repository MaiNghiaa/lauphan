import React from "react";

export default function App() {
  return (
    <div className="App banner-trademark">
      <div className="container">
        <div className="flex flex-wrap mx-[-15px] pt-[200px]">
          <div className="text-content-banner-left">
            <div className="title-app-banner text-[20px] font-bold pt-[37px] pb-[33px]">
              ỨNG DỤNG THANH TOÁN &amp; TÍCH ĐIỂM PHANEXPRESS
            </div>
            <div className="text-content-app-banner text-[14px]">
              <div>
                - Tải ứng dụng để tận hưởng ưu đãi từ hệ thống PhanExpress
              </div>
              <div>- Cập nhật thông tin mới nhất</div>
              <div>- Thanh toán &amp; tích điểm trên giá trị hóa đơn</div>
            </div>
            <div className="img-app flex mt-[47px]">
              <div className="pr-[20px]">
                <a href="https://apps.apple.com/vn/app/phan-express/id1506958332">
                  <img
                    src={require("../../../Assets/Images/appstore.png")}
                    alt=" "
                    className="max-w-full h-auto"
                  />
                </a>
              </div>
              <div className="pr-[20px]">
                <a href="https://play.google.com/store/apps/details?id=com.lauphan">
                  <img
                    src={require("../../../Assets/Images/googleplay.png")}
                    alt=" "
                    className="max-w-full h-auto"
                  />
                </a>
              </div>
              <div className="qr_os">
                <img
                  src={require("../../../Assets/Images/qrcode.png")}
                  alt=" "
                  className="max-w-full h-auto w-[80px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
