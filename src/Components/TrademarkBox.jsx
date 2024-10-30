import React from "react";

export default function TrademarkBox() {
  return (
    <div className=" trademark-box-wrap mb-[30px] flex-[0_0_50%] max-w-[50%] relative w-full px-[15px]">
      <div
        className="trademark-box h-full mb-[30px]"
        style={{ backgroundColor: "#f15a29" }}
      >
        <div className="img-trademark text-center h-[130px] pt-[10px]">
          <a href="https://chaoxian.com.vn/">
            <img
              src="https://cdn.lauphan.com:9998/api/file/img?PathFile=/brand/logoImage_202410202229050.svg"
              className="brand-img absolute left-0 right-0 top-0 m-auto max-h-[120px]"
              alt=""
            />
          </a>
        </div>
        <div className="text-content-trademark max-w-[555px] m-auto text-center text-white text-[15px] p-5 mb-[80px]">
          <p className="mb-[1rem]">
            Chao Xian - concept lẩu bò tươi lấy cảm hứng từ vùng đất lẩu ngon
            nức tiếng Triều Châu hứa hẹn mang đến cho thực khách những trải
            nghiệm chất lượng nhất về thịt bò tươi hảo hạng nhúng lẩu.
            <br />
            Với giống bò được tuyển chọn theo tiêu chí riêng của nhà hàng, chăn
            nuôi theo phương pháp đặc biệt và hơn hết những phần thịt bò ngon
            nhất sẽ được mang trực tiếp từ trang trại đến bàn ăn không quá 4h
            đồng hồ giúp nâng tầm hương vị bò tươi mỗi ngày.
          </p>
        </div>
        <div className="act-porlet">
          <div className="flex justify-center absolute left-0 right-0 bottom-[30px]">
            <a href=" " className="boxShadow">
              <button className="border-[1px] border-white text-[#e84a1b] h-[33px] rounded-[45px] flex items-center justify-center bg-white text-[14px] w-[133px]">
                Xem thực đơn
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
