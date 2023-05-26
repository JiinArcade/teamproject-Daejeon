import React from "react";
import "./Cctv.css";
import Cctvmap from "./Cctvmap";
import { Link } from "react-router-dom";

const Cctv = () => {

  return (
    <div className="Cctv-wrapper">
      <div className="Cctv-box-wrap">
        <div className="Box-Tag4">
          <p>주요행사안내</p>
        </div>
        <div className="Cctv-inner-wrapper">
          <div className="Cctv-inner-Box">
            <ul className="Cctv-inner-left-top">
              <p>버스전용차로 CCTV</p>
              <p>대중교통수단인 버스의 원활한 통행을 위해</p>
              <p>교통법규를 지키는 모범시민!</p>
            </ul>
            <table className="Cctv-FineBox">
              <ul className="Cctv-FineBox-top">
                <li>승용차</li>
                <li>과태료 5만원</li>
                <li>벌점 10점</li>
              </ul>
              <ul className="Cctv-FineBox-bottom">
                <li>승합차</li>
                <li>과태료 6만원</li>
                <li>벌점 10점</li>
              </ul>
            </table>
            <Link to="/CctvBig">
              <button className="Cctv-FineBox-button">자세히 보기</button>
            </Link>
          </div>
          <div className="Cctv-MapBox">
            <Link to="/CctvBig">
              <div className="Cctv-MapBox-zoonin">
                <p>지도 확대하기</p>
                <img
                  src="/icon/enlargement-icon.png"
                  alt="지도 확대하기 버튼"
                ></img>
              </div>
            </Link>
            <Cctvmap></Cctvmap>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cctv;
