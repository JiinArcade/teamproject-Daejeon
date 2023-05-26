import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



const FooterBanner = () => {
  return (
    <div>
      <div className='fooerbannerBox'>
        <Swiper
            className='footerbanner-list'
            navigation={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            modules={[Navigation, Pagination, Autoplay]}
        >
            <SwiperSlide className='footerbanner-item'>
                <div className='bannerImg'>
                    <img src="/img/footer-banner (1).jpg" alt="공유누리" />
                    <img src="/img/footer-banner (2).jpg" alt="공직비리 익명제보" />
                    <img src="/img/footer-banner (3).jpg" alt="심폐소생술" />
                    <img src="/img/footer-banner (4).jpg" alt="e혁신" />
                    <img src="/img/footer-banner (5).jpg" alt="폐합성수지 재활용제품" />
                </div>
            </SwiperSlide>
            <SwiperSlide className='footerbanner-item'>
                <div className='bannerImg'>
                    <img src="/img/footer-banner (6).jpg" alt="집에서 먹고 남은 약" />
                    <img src="/img/footer-banner (7).jpg" alt="투명페트병" />
                    <img src="/img/footer-banner (1).png" alt="국방헬프콜" />
                    <img src="/img/footer-banner (2).png" alt="청렴포털" />
                    <img src="/img/footer-banner (3).png" alt="e나라재산" />
                </div>
            </SwiperSlide>
            <SwiperSlide className='footerbanner-item'>
                <div className='bannerImg'>
                    <img src="/img/footer-banner (4).png" alt="찾기쉬운 생활법령정보" />
                    <img src="/img/footer-banner (5).png" alt="안전운전 통합민원" />
                    <img src="/img/footer-banner (6).png" alt="미래기술마당" />
                    <img src="/img/footer-banner (7).png" alt="복지r" />
                    <img src="/img/footer-banner (8).png" alt="정부24" />
                </div>
            </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default FooterBanner
