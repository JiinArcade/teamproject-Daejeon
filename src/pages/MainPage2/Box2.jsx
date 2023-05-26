import React from "react";
import "./Box2.css";

const mayorTitle = ["대전시장 이장우", "이장우의 공약사업", "소통하는 이장우"];

const Box2 = () => {
  return (
    <div>
      <div className="Box2-wrapper">
        <div className="Box2-bgImg">
          <div className="Box2-text-wrapper">
            <ul className="Box2-text-list">
              <li>About DAEJEON</li>
              <li>
                <h1>일류경제도시 대전!</h1>
              </li>
              <li className="daejeon-target">
                <span>미래전략 선도</span>
                <span>도시경제력 제고</span>
                <span>시민우선 시정</span>
              </li>
              <li>
                <button>자세히 보기</button>
              </li>
            </ul>
            <ul className="Box2-text-list-2">
              <p>안녕하십니까?</p>
              <p>
                대전시장<span>이장우</span>입니다.
              </p>
            </ul>
          </div>

          <div className="mayor-img-box">
            <img
              style={{ width: 500 }}
              src="/mayorBox/이장우2.png"
              alt="대전시장"
            />
          </div>

          <div className="mayorBox-bigwrapper">
            <div className="mayorBox-wrapper">
              <div className="mayor-box">
                <div className="mayor-list">
                  <p>{mayorTitle[0]}</p>
                  <div className="mayor-arrow">
                    <img
                      src="/mayorBox/mayor-arrow.png"
                      alt="대전시장 이장우 바로가기 화살표"
                    />
                  </div>
                  <div className="mayor-titleimg">
                    <img
                      src="/mayorBox/mayor-1.png"
                      alt="대전시장 이장우 일러스트"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mayorBox-wrapper">
              <div className="mayor-box">
                <div className="mayor-list">
                  <p>{mayorTitle[1]}</p>
                  <div className="mayor-arrow">
                    <img
                      src="/mayorBox/mayor-arrow.png"
                      alt="이장우의 공약사업 바로가기 화살표"
                    />
                  </div>
                  <div className="mayor-titleimg">
                    <img
                      src="/mayorBox/mayor-2.png"
                      alt="이장우의 공약사업 일러스트"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mayorBox-wrapper">
              <div className="mayor-box">
                <div className="mayor-list">
                  <p>{mayorTitle[2]}</p>
                  <div className="mayor-arrow">
                    <img
                      src="/mayorBox/mayor-arrow.png"
                      alt="소통하는 이장우 바로가기 화살표"
                    />
                  </div>
                  <div className="mayor-titleimg">
                    <img
                      src="/mayorBox/mayor-3.png"
                      alt="소통하는 이장우 일러스트"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* -----------900px 사이즈-------  */}
          <div className="mayorBox-md-only">
            <div className="md-mayorBox-wrap">
              <div className="md-mayorBox">
                <p className="md-mayorTitle">대전시장 이장우</p>
                <ul className="md-img-wrap">
                  <span className="md-mayorTitle-arrow">
                    <img
                      src="/mayorBox/mayor-arrow.png"
                      alt="해당 페이지 바로가기"
                    />
                  </span>
                  <span className="md-mayorTitle-icon">
                    <img src="/mayorBox/mayor-1.png" alt="시장 아이콘" />
                  </span>
                </ul>
              </div>

              <div className="md-mayorBox">
                <p className="md-mayorTitle">이장우의 공약사업</p>
                <ul className="md-img-wrap">
                  <span className="md-mayorTitle-icon">
                    <img
                      src="/mayorBox/mayor-arrow.png"
                      alt="해당 페이지 바로가기"
                    />
                  </span>
                  <span className="/mayorBox/mayor-2.png">
                    <img src="/mayorBox/mayor-2.png" alt="공약사업 아이콘" />
                  </span>
                </ul>
              </div>

              <div className="md-mayorBox">
                <p className="md-mayorTitle">소통하는 이장우</p>
                <ul className="md-img-wrap">
                  <span className="md-mayorTitle-arrow">
                    <img
                      src="/mayorBox/mayor-arrow.png"
                      alt="해당 페이지 바로가기"
                    />
                  </span>
                  <span className="md-mayorTitle-icon">
                    <img src="/mayorBox/mayor-3.png" alt="소통 아이콘" />
                  </span>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box2;
