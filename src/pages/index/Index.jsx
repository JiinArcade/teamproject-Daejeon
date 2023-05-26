import React from "react";
import "./Index.css";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="index-wrapper">
      <div className="index-sub-wrapper">
        <div className="index-daejeon">
          <h1>
            <span className="big-red-strong">일류 경제도시</span>대전
          </h1>
          <h1>
            <span className="big-black-strong">
              "지역의 <span className="point-red">힘</span>으로 직접 주도"
            </span>
            하는<span className="last-big-black-strong">대전의 미래</span>
          </h1>
        </div>
        <div className="index-Box">
          <div className="index-BoxList">
            <Link to="/Mainpage">
              <div className="index-Boxtem">
                <div className="index-bottom-imgbox">
                  <img
                    className="index-bottom-img1"
                    src="/img/일류경제도시 슬로건-01.png"
                    alt="일류경제도시 슬로건"
                  />
                </div>
                <h1 className="index-text-1">대전시청</h1>
                <p>대전시 대표포털</p>
              </div>
            </Link>
          </div>
          <div className="index-BoxList">
            <Link to="/GesifanJunche">
              <div className="index-Boxtem">
                <div className="index-bottom-imgbox">
                  <img
                    className="index-bottom-img2"
                    src="/img/위에서 보는 사람들-01.png"
                    alt="민원게시판 일러스트"
                  />
                </div>
                <h1 className="index-text-2">대전시 민원 게시판</h1>
                <p>바로가기</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="triangle-Top-Box">
        <div className="triangle-red"></div>
        <div className="triangle-blue"></div>
      </div>

      <div className="index-footer">
        <img
          className="index-footer-img"
          src="/img/대전 슬로건.png"
          alt="daejeon 슬로건"
        />
        <p className="index-footer-call">
          <span>민원상담콜센터 042-120</span> 평일 08:00~21:00 토·공휴일
          09:00~18:00
        </p>
        <p>(c) DAEJEON METROPOLITAN CITY. ALL RIGHTS RESERVED.</p>
      </div>

      <div className="triangle-Bottom-Box">
        <div className="triangle-red-bottom"></div>
        <div className="triangle-blue-bottom"></div>
      </div>
    </div>
  );
};

export default Index;
