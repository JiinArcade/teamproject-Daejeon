import React from "react";
import { useState } from "react";
import "./PublicAnnouncement.css";
import { Navigation, Pagination, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Gonggo = () => {
  const gonggolist = ["시정소식", "시험정도", "행사안내", "고시", "공고"];
  const gonggolist1 = useState(gonggolist);

  return (
    <div>
      <div className="PublicAnnouncement-wrapper">
        <div className="PublicAnnouncement-Box">
          <div className="PublicAnnouncement-menuBox">
            <ul className="PublicAnnouncement-menulist">
              {gonggolist1.map((gonggolist2, index) => {
                return <li key={index}><button>{gonggolist2}</button></li>;
              })}
            </ul>
          </div>
          <div className="PublicAnnouncement-menuright">
            <button>
              <img src="/icon/btn-left.png" alt="좌측 버튼" />
            </button>
            <button>
              <img src="/icon/btn-right.png" alt="우측 버튼" />
            </button>
            <div className="PublicAnnouncement-moreBtn">
              <button> + 더보기</button>
            </div>
          </div>
        </div>

        <div className="PublicAnnouncement-Swiper-wrapper">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={15}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
          >
            <SwiperSlide>
              <div className="PublicAnnouncement-box1">
                <div className="PublicAnnouncement-box-inner">
                  <p className="PublicAnnouncement-span">
                    2023 시민정원사 양성 초급과정 <br></br>모집완료
                  </p>
                  <p>2023-03-27</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="PublicAnnouncement-box1">
                <div className="PublicAnnouncement-box-inner">
                  <p className="PublicAnnouncement-span">
                    미세먼지(PM-10) 주의보 발령 해제<br></br>(대전 전지역)
                  </p>
                  <p>2023-03-27</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="PublicAnnouncement-box1">
                <div className="PublicAnnouncement-box-inner">
                  <p className="PublicAnnouncement-span">
                    2023년 청년도전 지원사업<br></br>참여자 모집
                  </p>
                  <p>2023-03-27</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="PublicAnnouncement-box1">
                <div className="PublicAnnouncement-box-inner">
                  <p className="PublicAnnouncement-span">
                    2023년 청년도전 지원사업<br></br>참여자 모집
                  </p>
                  <p>2023-03-27</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="PublicAnnouncement-box1">
                <div className="PublicAnnouncement-box-inner">
                  <p className="PublicAnnouncement-span">
                    2023년 청년도전 지원사업<br></br>참여자 모집
                  </p>
                  <p>2023-03-27</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="PublicAnnouncement-box1">
                <div className="PublicAnnouncement-box-inner">
                  <p className="PublicAnnouncement-span">
                    2023년 청년도전 지원사업<br></br>참여자 모집
                  </p>
                  <p>2023-03-27</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="PublicAnnouncement-box1">
                <div className="PublicAnnouncement-box-inner">
                  <p className="PublicAnnouncement-span">
                    2023년 청년도전 지원사업<br></br>참여자 모집
                  </p>
                  <p>2023-03-27</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="PublicAnnouncement-box1">
                <div className="PublicAnnouncement-box-inner">
                  <p className="PublicAnnouncement-span">
                    2023년 청년도전 지원사업<br></br>참여자 모집
                  </p>
                  <p>2023-03-27</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="PublicAnnouncement-box1">
                <div className="PublicAnnouncement-box-inner">
                  <p className="PublicAnnouncement-span">
                    2023년 청년도전 지원사업<br></br>참여자 모집
                  </p>
                  <p>2023-03-27</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Gonggo;
