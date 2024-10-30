import React from "react";
import data from "../../../Mookup/DataSet.json";
import BoxList from "../../../Components/BoxList";
export default function MainContent() {
  return (
    <div className="MainContent mt-[100px]">
      <div className="mainContent-wrapper container">
        <div className="Box-list flex flex-wrap mx-[-15px]">
          {data.map((item, index) => (
            <BoxList item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
