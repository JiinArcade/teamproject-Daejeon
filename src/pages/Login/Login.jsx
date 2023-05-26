/* eslint-disable */
import React from "react";
import { useCookies } from "react-cookie";
import "./Login.css";
import Ragister from "../LoginRegister/Register";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import naver from "./images/로그인 아이콘-02.png"; // naver icon
import apple from "./images/로그인 아이콘-03.png"; // apple icon
import kakao from "./images/로그인 아이콘-04.png"; // kakao icon
import deidsth from "./images/로그인 아이콘-05.png"; // uncheck
import idsth from "./images/로그인 아이콘-06.png"; // check

const Login = () => {
  // |이 코드는 React 함수형 컴포넌트에서 useEffect 훅과 useState 훅을 사용하여 로컬 스토리지와 쿠키를 다루는 예제입니다.

  const [disabled, setDisabled] = useState(true); // disabled 상태와 disabled 상태를 변경하는 setDisabled 함수를 생성하고, 초기값을 true로 설정한다.
  const [idSave, setIdSave] = useState(false); // idSave 상태와 idSave 상태를 변경하는 setIdSave 함수를 생성하고, 초기값을 false로 설정한다.
  const [idvalue, setIdValue] = useState(""); // idvalue 상태와 idvalue 상태를 변경하는 setIdValue 함수를 생성하고, 초기값을 ""로 설정한다.
  const [pwvalue, setPwValue] = useState(""); // pwvalue 상태와 pwvalue 상태를 변경하는 setPwValue 함수를 생성하고, 초기값을 ""로 설정한다.
  const [cookie, setCookie, removeCookie] = useState(["userInfo"]); // cookie 상태와 cookie 상태를 변경하는 setCookie 함수, cookie 상태를 삭제하는 removeCookie 함수를 생성하고, 초기값을 ["userInfo"]로 설정한다.
  let navigate = useNavigate();
  const IDreg = /^[a-z]+[a-z0-9]{4,12}$/g;

  // |이 코드는 React 함수형 컴포넌트에서 useEffect 훅과 useState 훅을 사용하여 로컬 스토리지와 쿠키를 다루는 예제입니다.
  // |
  // |코드 특징:
  // |- 로컬 스토리지와 쿠키를 다루는 방법을 보여주어 유용합니다.
  // |- useEffect 훅을 사용하여 컴포넌트가 렌더링될 때마다 로컬 스토리지와 쿠키를 업데이트하는 코드를 작성할 필요가 없습니다.

  useEffect(() => {
    const id = localStorage.getItem("idSave"); // localStorage에서 "idSave" 값을 가져와 id 변수에 할당한다.
    if (id) {
      setIdSave(JSON.parse(id)); // idSave 상태를 가져온 id 값으로 변경한다.
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("idSave", JSON.stringify(idSave)); // idSave 상태가 변경될 때마다 localStorage에 "idSave" 키로 idSave 값을 저장한다.
  }, [idSave]);

  const handleIdChange = (e) => {
    // input 요소의 값이 변경될 때마다 실행되는 함수
    setIdValue(e.target.value); // idvalue 상태를 변경한다.
  };

  const handlePwChange = (e) => {
    // input 요소의 값이 변경될 때마다 실행되는 함수
    setPwValue(e.target.value); // pwvalue 상태를 변경한다.
  };

  // |이 코드는 form 요소가 제출될 때 실행되는 함수를 정의하는 코드입니다.
  // |
  // |코드 특징:
  // |- `e.preventDefault()`를 사용하여 이벤트의 기본 동작을 막아서, 페이지가 새로고침되지 않고 원하는 작업을 수행할 수 있습니다.
  // |- `setCookie()` 함수를 사용하여 쿠키에 사용자 정보를 저장할 수 있습니다.
  // |- `navigate()` 함수를 사용하여 페이지를 이동시킬 수 있습니다.
  const handleSubmit = (e) => {
    // form 요소가 제출될 때 실행되는 함수
    e.preventDefault(); // 이벤트의 기본 동작을 막음
    setCookie("userInfo", JSON.stringify({ id: idvalue, pw: pwvalue }), {
      path: "/",
    }); // 쿠키에 사용자 정보를 저장
    navigate("/Mainpage"); // 페이지를 이동시킴
  };
  return (
    <div className="wrapper">
      <div className="container">
        <div className="text">
          <h1>로그인</h1>
          <span className="text-sub">
            로그인 하시면 대전광역시의 모든 서비스를 이용 하실 수 있습니다.
            <br />
            아직 회원이 아니시면 회원가입을 해주세요.
          </span>
        </div>
        <div className="id-pw-box">
          {/* 아이디 input */}
          <div className="input-id login-inputbox">
            <p className="login-warn">아이디</p>
            <div className="input-box">
              <input
                type="text"
                name="userid"
                onChange={handleIdChange}
                value={idvalue}
              />
            </div>
          </div>
          {/* 비밀번호 input */}
          <div className="input-pw login-inputbox">
            <p className="login-warn">비밀번호</p>
            <div className="input-box">
              <input
                type="password"
                name="userpw"
                onChange={handlePwChange}
                value={pwvalue}
              />
            </div>
          </div>
          {/* 아이디 저장 및 아이디 찾기, 비밀번호 찾기 */}
          <div className="login-functionbox">
            <div className="keeptext-box">
              <div
                htmlFor="id"
                className="check-img"
                style={
                  idSave == true
                    ? { backgroundImage: `url(${idsth})` }
                    : { backgroundImage: `url(${deidsth})` }
                }
                onClick={() => {
                  setIdSave(!idSave);
                }}
              ></div>

              <p
                onClick={() => {
                  setIdSave(!idSave);
                }}
              >
                아이디 저장
              </p>
            </div>
            <div className="find-wrapbox">
              <ul>
                <li>아이디찾기</li>
                <div></div>
                <li>비밀번호 찾기</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 로그인, 회원가입 버튼 */}
      <div className="login-btn-box">
        <Link to="/Mainpage">
          <button
            type="submit"
            id="login-btn"
            onClick={handleSubmit}
            disabled={
              idvalue.length < 4 || pwvalue.length === "" ? true : false
            }
          >
            로그인
          </button>
        </Link>
        <Link to="/Register">
          <button type="submit" id="Register-btn">
            회원가입
          </button>
        </Link>
      </div>

      {/* sns계정 */}
      <div className="sns-box">
        <div className="sns-borderbox">
          <div className="sns-border"></div>
          <div>SNS 계정으로 로그인</div>
          <div className="sns-border"></div>
        </div>

        <div className="sns-img">
          <img src={naver} alt="네이버 계정으로 회원가입" />
          <img src={kakao} alt="카카오 계정으로 회원가입" />
          <img src={apple} alt="애플 계정으로 회원가입" />
        </div>
      </div>
    </div>
  );
};

export default Login;
