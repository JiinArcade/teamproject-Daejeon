import React from 'react'
import { useState } from 'react';
import FooterBanner from './FooterBanner'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const MainFooter = () => {

  return (

    <div>
      <FooterBanner></FooterBanner>
      <div className="footerTop">
        <div className='footer-MenuSiteBox'>

          <ul className='MenuList'>
            <li><a href="https://www.daejeon.go.kr/drh/DrhContentsHtmlView.do?menuSeq=3274">이용안내</a></li>
            <li><a className='pointer' href="https://www.daejeon.go.kr/drh/DrhContentsHtmlView.do?menuSeq=2062">개인정보처리방침</a></li>
            <li><a href="https://www.daejeon.go.kr/drh/DrhContentsHtmlView.do?menuSeq=1757">영상정보처리기기 운영<span>관리방침</span></a></li>
            <li><a href="https://www.daejeon.go.kr/drh/board/boardNormalList.do?boardId=homepage_0001&menuSeq=1507">누리집 개선의견</a></li>
            <li><a href="https://www.daejeon.go.kr/drh/DrhContentsHtmlView.do?menuSeq=1643">찾아오시는길</a></li>
          </ul>

          <div className='drawer-container'>
            <input id="dropdown" type="checkbox" />
            <label className="dropdownLabel" for="dropdown">
              <div>실국 홈페이지</div>
              <FontAwesomeIcon icon={faChevronDown} className='fontawesone-down' />
            </label>
            <div className='drawer-menu-content'>
              <ul className='drawer-menu-list'>
                <li className='drawer-menu-item'><a href='https://www.daejeon.go.kr/prmt/index.do?menuSeq=6542' target='_blank'>홍보담당관</a></li>
                <li className='drawer-menu-item'><a href='https://www.daejeon.go.kr/itd/Staff.do?menuSeq=5672' target='_blank'>인사혁신담당관</a></li>
                <li className='drawer-menu-item'><a href='https://www.daejeon.go.kr/pla/index.do?menuSeq=1017' target='_blank'>기획조정실</a></li>
                <li className='drawer-menu-item'><a href='https://www.daejeon.go.kr/csf/index.do?menuSeq=3500' target='_blank'>시민안전실</a></li>
                <li className='drawer-menu-item'><a href='https://www.daejeon.go.kr/sci/index.do?menuSeq=5678' target='_blank'>전략사업추진실</a></li>
                <li className='drawer-menu-item'><a href='https://www.daejeon.go.kr/eco/index.do?menuSeq=2687' target='_blank'>경제과학국</a></li>
                <li className='drawer-menu-item'><a href='https://www.daejeon.go.kr/sel/index.do?menuSeq=990' target='_blank'>행정자치국</a></li>
                <li className='drawer-menu-item'><a href='https://www.daejeon.go.kr/cul/index.do?menuSeq=44' target='_blank'>문화관광국</a></li>
                <li className='drawer-menu-item'><a href='https://www.daejeon.go.kr/citz/index.do' target='_blank'>시민체육건강국</a></li>
                <li className='drawer-menu-item'><a href='https://www.daejeon.go.kr/wel/index.do?menuSeq=177' target='_blank'>복지국</a></li>
                <li className='drawer-menu-item'><a href='https://www.daejeon.go.kr/env/index.do?menuSeq=2673' target='_blank'>환경복지국</a></li>
                <li className='drawer-menu-item'><a href='https://www.daejeon.go.kr/tra/index.do?menuSeq=2699' target='_blank'>교통건설국</a></li>
                <li className='drawer-menu-item'><a href='https://www.daejeon.go.kr/tram/Staff.do?menuSeq=6001' target='_blank'>철도광역교통본부</a></li>
                <li className='drawer-menu-item'><a href='https://www.daejeon.go.kr/cit/index.do?menuSeq=972' target='_blank'>도시주택국</a></li>
                <li className='drawer-menu-item'><a href='https://www.daejeon.go.kr/ins/index.do?menuSeq=1034' target='_blank'>감사위원회</a></li>
                <li className='drawer-menu-item'><a href='https://www.daejeon.go.kr/dj119/index.do' target='_blank'>소방본부</a></li>
                <li className='drawer-menu-item'><a href='https://www.daejeon.go.kr/djpol/index.do' target='_blank'>자치경찰위원회</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='footerBottom'>
        <div className="listLogo">
          <a href="https://www.kogl.or.kr/"><img src="./img/btm_logo01.png" alt="열기버튼" /></a>
          <a href="https://www.daejeon.go.kr/drh/DrhContentsHtmlView.do?menuSeq=3342"><img src="./img/btm_logo02_1.png" alt="과학기술정보통신부" /></a>
          <a href="https://www.mois.go.kr/frt/sub/popup/p_taegugki_banner/screen.do"><img src="./img/btm_logo04.png" alt="열기버튼" /></a>
        </div>
        <div className="adress">
          <p>(35242) 대전광역시 서구 둔산로 100 (둔산동)</p>
          <p>(c) DAEJEON METROPOLITAN CITY. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </div>
   

 


  )
}

export default MainFooter
