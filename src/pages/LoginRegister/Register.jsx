/* eslint-disable */
import React from "react";
import './Register.css'
import Footer from '../../components/LoginFooter'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import checkimg from "./images/동의 아이콘 1.png" // check
import uncheck from "./images/동의 아이콘 2.png" // uncheck
import logo from "./images/동의 아이콘 3.png" // logo
import linkimg from "./images/동의 아이콘 4.png"// link

const Register = (props) => {
  // |이 코드는 약관 동의 체크박스를 구현하는 코드입니다.
  // |
  // |코드 특징:
  // |- 전체 동의 체크박스를 클릭했을 때, 모든 약관 동의 체크박스를 자동으로 체크하거나 해제하는 기능이 구현되어 있습니다.

  const [allCheck, setAllCheck] = useState(false); // 전체 동의 체크 여부를 저장하는 상태값
  const [useCheck, setUseCheck] = useState(false); // 이용약관 동의 체크 여부를 저장하는 상태값
  const [ageCheck, setAgeCheck] = useState(false); // 만 14세 이상 동의 체크 여부를 저장하는 상태값
  const [submit, setSubmit] = useState(false); // 제출 여부를 저장하는 상태값

  const check = (e) => {
    if (!allCheck || !useCheck || !ageCheck) {
      // 모든 약관 동의 여부를 확인하는 조건문
      e.preventDefault(); // 이벤트의 기본 동작을 막음
      alert("동의해주십시오"); // 약관 동의를 유도하는 알림창
      setAllCheck(false); // 전체 동의 체크박스를 해제
      setUseCheck(false); // 이용약관 동의 체크박스를 해제
      setAgeCheck(false); // 만 14세 이상 동의 체크박스를 해제
    }
  };

  const allBtnEvent = () => {
    // 전체 동의 체크박스 클릭 이벤트
    if (!allCheck) {
      // 전체 동의 체크박스가 체크되어 있지 않은 경우
      setAllCheck(true); // 전체 동의 체크박스를 체크
      setUseCheck(true); // 이용약관 동의 체크박스를 체크
      setAgeCheck(true); // 만 14세 이상 동의 체크박스를 체크
    } else {
      // 전체 동의 체크박스가 체크되어 있는 경우
      setAllCheck(false); // 전체 동의 체크박스를 해제
      setUseCheck(false); // 이용약관 동의 체크박스를 해제
      setAgeCheck(false); // 만 14세 이상 동의 체크박스를 해제
    }
  };

  const useBtnEvent = () => {
    // 이용약관 동의 체크박스 클릭 이벤트
    setUseCheck(!useCheck); // 이용약관 동의 체크박스의 체크 여부를 반전
  };

  const ageBtnEvent = () => {
    // 만 14세 이상 동의 체크박스 클릭 이벤트
    setAgeCheck(!ageCheck); // 만 14세 이상 동의 체크박스의 체크 여부를 반전
  };

  useEffect(() => {
    // 이용약관 동의 체크박스와 만 14세 이상 동의 체크박스의 상태 변화를 감지하는 useEffect
    if (useCheck && ageCheck) {
      // 이용약관 동의 체크박스와 만 14세 이상 동의 체크박스가 모두 체크되어 있는 경우
      setAllCheck(true); // 전체 동의 체크박스를 체크
    } else {
      // 이용약관 동의 체크박스와 만 14세 이상 동의 체크박스 중 하나 이상이 체크되어 있지 않은 경우
      setAllCheck(false); // 전체 동의 체크박스를 해제
    }
  }, [useCheck, ageCheck]); // 이용약관 동의 체크박스와 만 14세 이상 동의 체크박스의 상태 변화를 감지하는 useEffect의 의존성 배열

  return (
    <div className="wrapper">
      <div className="logo-box">
        <h1>
          <img src={logo} alt="대전시청 로고" />
        </h1>
      </div>
      <div className="container">
        <div className="all-check">
          {/* <input type="checkbox" onChange={allBtnEvent} checked={allCheck}/> */}
          <div
            className="chk-img"
            htmlFor="all"
            style={
              allCheck == true
                ? { backgroundImage: `url(${checkimg})` }
                : { backgroundImage: `url(${uncheck})` }
            }
            onClick={() => {
              allBtnEvent(!setAllCheck);
            }}
            checked={allCheck}
          ></div>
          <label>
            <span
              onClick={() => {
                allBtnEvent(!setAllCheck);
              }}
            >
              <div className="all-check-text">
                <strong>모두 동의합니다.</strong>
                <br />
                대전광역시 이용약관, 개인수집 및 이용,개인정보처리 업무위탁에 대한
                동의에 모두 동의합니다.
              </div>
            </span>
          </label>
        </div>
        <div className="check">
          <div className="chk">
            {/* <input type="checkbox" checked={useCheck} onChange={useBtnEvent} /> */}
            <div
              className="chk-img"
              htmlFor="chk1"
              style={
                useCheck == true
                  ? { backgroundImage: `url(${checkimg})` }
                  : { backgroundImage: `url(${uncheck})` }
              }
              onClick={() => {
                useBtnEvent(!setUseCheck);
              }}
              checked={useCheck}
            ></div>

            <span
              htmlFor=""
              onClick={() => {
                useBtnEvent(!setUseCheck);
              }}
            >
              <div className="chk-img-text">
                <h3> 홈페이지 이용약관 </h3>
                <p>필수</p>
              </div>
            </span>
          </div>

          <p className="terms">
            대전광역시 홈페이지는 개인정보보호법 등 관련 법령에 따라
            정보주체로부터 개인정보를 수집함에 있어 아래 내용을 안내하고
            있습니다. 정보주체가 되는 이용자께서는 아래 내용을 자세히
            읽어보시고, 모든 내용을 이해하신 후에 동의 여부를 결정하여 주시기
            바랍니다. 대전광역시 홈페이지는 개인정보보호법 등 관련 법령에 따라
            정보주체로부터 개인정보를 수집함에 있어 아래 내용을 안내하고
            있습니다. 정보주체가 되는 이용자께서는 아래 내용을 자세히
            읽어보시고, 모든 내용을 이해하신 후에 동의 여부를 결정하여 주시기
            바랍니다. 대전광역시 홈페이지는 개인정보보호법 등 관련 법령에 따라
            정보주체로부터 개인정보를 수집함에 있어 아래 내용을 안내하고
            있습니다. 정보주체가 되는 이용자께서는 아래 내용을 자세히
            읽어보시고, 모든 내용을 이해하신 후에 동의 여부를 결정하여 주시기
            바랍니다.
          </p>

          <span className="red-text">동의 해야만 회원가입 가능</span>

          <div className="chk">
            {/* <input type="checkbox" checked={ageCheck} onChange={ageBtnEvent}/> */}
            <div
              className="chk-img"
              style={
                ageCheck == true
                  ? { backgroundImage: `url(${checkimg})` }
                  : { backgroundImage: `url(${uncheck})` }
              }
              onClick={() => {
                ageBtnEvent(!setAgeCheck);
              }}
              checked={ageCheck}
            ></div>

            <span
              htmlFor=""
              onClick={() => {
                ageBtnEvent(!setAgeCheck);
              }}
            >
              <h3> 개인정보 수집 및 이용</h3>
              <p>필수</p>
            </span>
          </div>

          <p className="terms">
            대전광역시 홈페이지는 개인정보보호법 등 관련 법령에 따라
            정보주체로부터 개인정보를 수집함에 있어 아래 내용을 안내하고
            있습니다. 정보주체가 되는 이용자께서는 아래 내용을 자세히
            읽어보시고, 모든 내용을 이해하신 후에 동의 여부를 결정하여 주시기
            바랍니다. 대전광역시 홈페이지는 개인정보보호법 등 관련 법령에 따라
            정보주체로부터 개인정보를 수집함에 있어 아래 내용을 안내하고
            있습니다. 정보주체가 되는 이용자께서는 아래 내용을 자세히
            읽어보시고, 모든 내용을 이해하신 후에 동의 여부를 결정하여 주시기
            바랍니다. 대전광역시 홈페이지는 개인정보보호법 등 관련 법령에 따라
            정보주체로부터 개인정보를 수집함에 있어 아래 내용을 안내하고
            있습니다. 정보주체가 되는 이용자께서는 아래 내용을 자세히
            읽어보시고, 모든 내용을 이해하신 후에 동의 여부를 결정하여 주시기
            바랍니다.
          </p>

          <span className="red-text">동의 해야만 회원가입 가능</span>
        </div>
      </div>

      <div className="table-box">
        <strong className="table-box-text">개인정보 업무위탁 안내</strong>
        <div className="table-box-inner">
          <p>
            대전광역시는 대전광역시홈페이지의 유지관리를 위하여 아래와 같이
            개인정보처리 업무를 위탁합니다.
          </p>

          <table>
            <tbody>
              <tr>
                <th>취급을 위탁 받는자(수탁업체)</th>
                <th>업무내용</th>
              </tr>

              <tr>
                <td>디더블유오공삼(주)</td>
                <td>홈페이지 기능개선유지</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="corporation">
        <strong className="corporation-text">법인회원</strong>
        <div className="corporation-box">
          <p>
            대전예술의 전당, 연정국악원에 한하여 법인회원 가입이 가능하며.
            <br />
            이용하려는 기관에 각각 가입하시기 바랍니다.
          </p>
          <div className="agency-box">
            <label htmlFor="" className="agency">
              <span>대전 예술의 전당 가입안내</span>
              <Link
                to={"https://www.daejeon.go.kr/djac/index.do"}
                target={"_blank"}
              >
                <img src={linkimg} alt="예술의 전당 가입하러 가기" />
              </Link>
            </label>
            <label htmlFor="" className="agency">
              <span>연정 국악원 가입안내</span>
              <Link to={"https://www.daejeon.go.kr/kmusic/"} target={"_blank"}>
                <img src={linkimg} alt="연정 국악원 가입하러 가기" />
              </Link>
            </label>
          </div>
        </div>

        <div className="ragister-btn-box">
          <button className="prev-btn" type="button">
            취소
          </button>

          <Link to="/Join">
            <button className="next-btn" type="submit" onClick={check}>
              확인
            </button>
          </Link>
        </div>

        <div className="foreigner">
          <span>
            외국인, 재외국인께서 사용할 ID가 필요하세요?{" "}
            <Link className="foreigner-id">외국인 / 재외국인 회원가입</Link>
          </span>
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Register;
