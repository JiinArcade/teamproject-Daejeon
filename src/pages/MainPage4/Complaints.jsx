import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "./Complaints.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const MinwonList = () => {
  return (
    <div className="Complaints-wrapper">
      <div className="Complaints-sub-wrapper">
        <div className="Complaints-top">
          <div>
            <div className="Box-Tag2">
              <p>민원안내</p>
            </div>
            <p className="Complaints-title">
              대전광역시 <strong style={{ color: "black" }}>민원 서비스</strong>
            </p>
            <p className="Complaints-sub-title">
              내게 필요한 민원 / 생활 / 해택 정보를 확인하세요
            </p>
          </div>
        </div>

        <div className="Complaints-top-btn">
          <span>서비스 전체보기</span>
          <button>
            <img src="/icon/enlargement-icon.png" alt="big" />
          </button>
        </div>

        <div className="Swiper-wrapper">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={6}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            <SwiperSlide>
              <div className="Complaints-img">
                <img src="/icon/service (4).png" alt="생생뉴스/민원 아이콘" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Complaints-img">
                <img src="/icon/service (5).png" alt="시민참여 아이콘" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Complaints-img">
                <img src="/icon/service (6).png" alt="분야별 민원안내 아이콘" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Complaints-img">
                <img src="/icon/service (7).png" alt="민원신청/조회 아이콘" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Complaints-img">
                <img
                  src="/icon/service (8).png"
                  alt="여권교부 보관 및 반납 아이콘"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Complaints-img">
                <img src="/icon/service (9).png" alt="대전시에 바란다 아이콘" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Complaints-img">
                <img
                  src="/icon/service (10).png"
                  alt="버스전용차로 CCTV현황 아이콘"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Complaints-img">
                <img src="/icon/service (11).png" alt="여권개요 아이콘" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Complaints-img">
                <img src="/icon/service (12).png" alt="민원소개/법령 아이콘" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Complaints-img">
                <img src="/icon/service (13).png" alt="안전신문고 아이콘" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Complaints-img">
                <img src="/icon/service (14).png" alt="부패공익신고 아이콘" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Complaints-img">
                <img
                  src="/icon/service (15).png"
                  alt="복지부조금 부정신고 아이콘"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Complaints-img">
                <img
                  src="/icon/service (16).png"
                  alt="버스전용차로 위반안내 아이콘"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Complaints-img">
                <img
                  src="/icon/service (17).png"
                  alt="과태료 납부안내 아이콘"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Complaints-img">
                <img src="/icon/service (18).png" alt="나의 민원 아이콘" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Complaints-img">
                <img src="/icon/service (19).png" alt="교통민원 아이콘" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Complaints-img">
                <img src="/icon/service (20).png" alt="환경신문고 아이콘" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Complaints-img">
                <img src="/icon/service (21).png" alt="행정예산제정 아이콘" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default MinwonList;
