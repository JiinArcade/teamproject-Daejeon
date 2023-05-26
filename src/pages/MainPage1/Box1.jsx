import React from 'react'
import Corona from '../../api/Corona/Corona'
import '../../api/Corona/Corona.css'
import './Box1.css'
import 페이스북 from './images/facebook.png'
import 인스타그램 from './images/instagram.png'
import 트위터 from './images/twitter.png'
import 유튜브 from './images/youtube.png'
import 콜센터 from './images/call.png'
import SwiperMenu3 from './SwipeMenu3.jsx'

const Box1 = () => {

    return (
        <div>
            <div className="box1-wrapper">
                
                <Corona></Corona>
                <SwiperMenu3></SwiperMenu3>
                
                <div className='sidevar'>
                {/* <div className='daejeonSns'><span>대전광역시 <br></br> SNS</span></div> */}
                    <ul className='sidevar-list'>
                        <li className='facebook-img'><a href="https://www.facebook.com/daejeonstory/?locale=ko_KR">
                            <img src={페이스북} alt="대전시청 페이스북" /></a></li>
                        <li className='Box1-text facebook-go'>페이스북 바로가기</li>
                        <li className='instargram-img'><a href="https://www.instagram.com/daejeon_official/">
                            <img src={인스타그램} alt="대전시청 인스타그램" /></a></li>
                        <li className='Box1-text instargram-go'>인스타그램 바로가기</li>
                        <li className='twitter-img'><a href="https://twitter.com/DreamDaejeon?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><img src={트위터} alt="대전시청 트위터" /></a></li>
                        <li className='Box1-text twitter-go'>트위터 바로가기</li>
                        <li className='youtube-img'><a href="https://www.youtube.com/channel/UCzIgmDjE0lFDu2IhEF_ewOA"><img src={유튜브} alt="대전시청 유튜브" /></a></li>
                        <li className='Box1-text youtube-go'>유튜브 바로가기</li>
                        <li className='call-img'><a href="tel:042-120"><img src={콜센터} alt="대전시청 콜센터" /></a></li>
                        <li className='Box1-text call-go'>콜센터 전화걸기</li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Box1
