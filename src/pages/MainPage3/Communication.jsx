import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Communication.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const JuyoHengSA = () => {
  return (
    <div>
      <div className="Communication-wrapper">
        <div className="Box-Tag">
          <p>주요행사안내</p>
        </div>
        <div className="Communication-wrapper-inner">
          <div className="Communication-text-wrapper">
            <div className="Communication-text-box">
              <p>
                즐거움을 <span>대전과 함께!</span>
              </p>
              <p>대전시민들을 위해 준비한 소소한 행복</p>
              <p>
                매일매일 시민들과 <span>함께하는 대전</span>
              </p>
              <p>
                함께해서 더 따뜻한 <span>지역사회 소통공간, 대전</span>
              </p>
              <button>자세히보기</button>
            </div>
          </div>
          <div className="Communication-Swiper-Box">
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
            >
              <SwiperSlide>
                <img src="/img/북토크.png" alt="북토크 행사 배너" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img/대전시티투어.jpg" alt="대전시티투어 행사 배너" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img/마스크해제.png" alt="마스크해제 배너" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img/식목일 행사.png" alt="식목일 행사 배너" />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/img/자동차 탄소중립포인트.jpg"
                  alt="자동차 탄소중립 포인트 배너"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/img/정부풀연연구기관.jpg"
                  alt="정부풀연 연구기관 배너"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JuyoHengSA;
