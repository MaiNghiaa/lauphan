import React, { useState } from "react";
import Address from "../../Mookup/dataAddress.json";

export default function AddressPage() {
  const [selectChoose, setSelectChoose] = useState("");

  console.log(selectChoose);
  return (
    <div className="lp-address-page pt-[70.15px] pb-[250px]">
      <div className="container">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="flex-[0_0_100%] max-w-full w-full relative px-[15px]">
            <div className="title-address text-center">ĐỊA CHỈ NHÀ HÀNG</div>
          </div>
        </div>
        <div className="flex flex-wrap mx-[-15px]">
          <div className="flex-[0_0_100%] max-w-full w-full relative px-[15px]">
            <div className="main-content-address w-full  flex flex-col items-center justify-center">
              <div className="chose-thuong-hieu pt-[25px] text-center">
                <div id="btn1" style={{ backgroundColor: "#e84a1b" }}>
                  <img
                    alt=""
                    class="branch-icon"
                    src="https://phanexpress.com/WebLauPhan/order/phan-icon-selected.svg"
                  />
                  <div>Phan</div>
                </div>
              </div>
              <div className="form-chose-coso flex justify-stretch flex-col self-start w-full">
                <label className="max-w-full inline-block mb-[0.5rem]">
                  Chọn cơ sở
                </label>
                <select
                  className="form-control w-full outline-none"
                  id="selectCoso"
                  onChange={(e) => setSelectChoose(e.target.value)}
                >
                  <option value="" disabled selected>
                    Chọn
                  </option>
                  {Address.map((item, index) => (
                    <option
                      key={index}
                      value={item.title}
                      className="cursor-pointer"
                    >
                      {item.title}
                    </option>
                  ))}
                </select>
              </div>
              <div
                id="address"
                className="pl-3 pt-[30px] text-[14px] font-light self-start"
              >
                {Address.find((item) => item.title === selectChoose)
                  ? Address.find((item) => item.title === selectChoose)
                      .addressDetail
                  : "Chọn vị trí"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
