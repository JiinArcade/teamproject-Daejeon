import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./images/동의 아이콘 3.png";
import Footer from "../../components/LoginFooter";
import "./Join.css";
import Login from "../Login/Login";
import Id from "./Join/Id";
import Pw from "./Join/Pw";
import Impo from "./Join/Impo";
import Phone from "./Join/Phone";

const Join = (props) => {
  // |이 코드는 회원가입 페이지에서 필수 입력 항목들을 검증하고, 모든 항목이 완료되면 로그인 페이지로 이동하는 기능을 구현한 것입니다.

  const navigate = useNavigate();
  const [idVeri, setIDVeri] = useState(false); // ID 검증 상태
  const [pwVeri, setPWVeri] = useState(false); // 비밀번호 검증 상태
  const [impoVeri, setImpoVeri] = useState(false); // 필수 입력 항목 검증 상태
  const [phoneVeri, setPhoneVeri] = useState(false); // 전화번호 검증 상태

  const handleJoin = (e) => {
    if (idVeri && pwVeri && impoVeri && phoneVeri) {
      // 모든 검증이 완료되었을 경우
      const Id = localStorage.getItem("id"); // 로컬 스토리지에서 ID 가져오기
      const password = localStorage.getItem("Password"); // 로컬 스토리지에서 비밀번호 가져오기
      navigate("/Login"); // 로그인 페이지로 이동
    } else {
      // 검증이 완료되지 않았을 경우
      alert("필수입력항목을 입력해주세요"); // 경고창 띄우기
    }
  };

  return (
    <div className="wrapper">
      <div className="join-container">
        <form onSubmit={(e) => handleJoin(e)}>
          <div className="logo-box">
            <h1>
              <img src={logo} alt="" />
            </h1>
          </div>
          <div className="inputbox">
            <Id setIDVeri={setIDVeri} />
            <Pw setPWVeri={setPWVeri} />
            <Impo setImpoVeri={setImpoVeri} />
            <Phone setPhoneVeri={setPhoneVeri} />
          </div>
          <div className="join-btn-box">
            <button type="submit" onClick={handleJoin}>가입하기</button>
          </div>
          <Footer />
        </form>
      </div>
    </div>
  );
};

export default Join;
