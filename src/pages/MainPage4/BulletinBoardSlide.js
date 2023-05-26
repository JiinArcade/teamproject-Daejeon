// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const BulletinBoardSlide = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      //   scrollbar={{ draggable: true }}
    >
      <div>
        <div className="BulletinBoard-box11">
          <div className="BulletinBoard-mini-box">
            <SwiperSlide>
              <div className="BulletinBoard-box12">
                <div className="BulletinBoard-box12-inner">
                  <p className="BulletinBoard-span">조회수 높은 글</p>
                  <span>
                    <img src="/icon/moresee-arrow.png" alt="arrow" />
                  </span>
                  <p>칭찬합니다</p>
                  <p>제목 : DW503 이예진 선생님 최고!</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="BulletinBoard-box12">
                <div className="BulletinBoard-box12-inner">
                  <p className="BulletinBoard-span">조회수 높은 글</p>
                  <span>
                    <img src="/icon/moresee-arrow.png" alt="arrow" />
                  </span>
                  <p>제안합니다</p>
                  <p>제목 : DW503 이예진 선생님 최고!</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="BulletinBoard-box12">
                <div className="BulletinBoard-box12-inner">
                  <p className="BulletinBoard-span">조회수 높은 글</p>
                  <span>
                    <img src="/icon/moresee-arrow.png" alt="arrow" />
                  </span>
                  <p>신고합니다</p>
                  <p>제목 : DW503 이예진 선생님 최고!</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="BulletinBoard-box12">
                <div className="BulletinBoard-box12-inner">
                  <p className="/icon/BulletinBoard-span">조회수 높은 글</p>
                  <span>
                    <img src="/icon/moresee-arrow.png" alt="arrow" />
                  </span>
                  <p>칭찬합니다</p>
                  <p>제목 : DW503 이예진 선생님 최고!</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="BulletinBoard-box12">
                <div className="BulletinBoard-box12-inner">
                  <p className="BulletinBoard-span">조회수 높은 글</p>
                  <span>
                    <img src="/icon/moresee-arrow.png" alt="arrow" />
                  </span>
                  <p>칭찬합니다</p>
                  <p>제목 : DW503 이예진 선생님 최고!</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="BulletinBoard-box12">
                <div className="BulletinBoard-box12-inner">
                  <p className="BulletinBoard-span">조회수 높은 글</p>
                  <span>
                    <img src="/icon/moresee-arrow.png" alt="arrow" />
                  </span>
                  <p>칭찬합니다</p>
                  <p>제목 : DW503 이예진 선생님 최고!</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="BulletinBoard-box12">
                <div className="BulletinBoard-box12-inner">
                  <p className="/icon/BulletinBoard-span">조회수 높은 글</p>
                  <span>
                    <img src="/icon/moresee-arrow.png" alt="arrow" />
                  </span>
                  <p>칭찬합니다</p>
                  <p>제목 : DW503 이예진 선생님 최고!</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="BulletinBoard-box12">
                <div className="BulletinBoard-box12-inner">
                  <p className="BulletinBoard-span">조회수 높은 글</p>
                  <span>
                    <img src="/icon/moresee-arrow.png" alt="arrow" />
                  </span>
                  <p>칭찬합니다</p>
                  <p>제목 : DW503 이예진 선생님 최고!</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="BulletinBoard-box12">
                <div className="BulletinBoard-box12-inner">
                  <p className="BulletinBoard-span">조회수 높은 글</p>
                  <span>
                    <img src="/icon/moresee-arrow.png" alt="arrow" />
                  </span>
                  <p>칭찬합니다</p>
                  <p>제목 : DW503 이예진 선생님 최고!</p>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </div>
      </div>
    </Swiper>
  );
};

export default BulletinBoardSlide;
