import React from 'react'
import './LoginFooter.css'
import { useState } from 'react'

const LoginFooter = () => {
  return (
    <div className='footer-box'>
        <div className="footer-top">
            <ul className='text-list'>
                <li className='text-item'>이용안내</li>
                <li className='text-item'>개인정보처리방침</li>
                <li className='text-item'>영상정보처리기기 운영.관리방침</li>
                <li className='text-item'>누리집 개선의견</li>
                <li className='text-item'>찾아오시는 길</li>
            </ul>
        </div>

        <div className="footer-bottom">
            <p>(35242)대전광역시 서구 둔산동 100 (둔산동)</p>
            <p>(c) DAEJEON METROPOLITAN CITY, ALL RIGHTS RESERVED</p>
        </div>
    </div>
  )
}

export default LoginFooter
