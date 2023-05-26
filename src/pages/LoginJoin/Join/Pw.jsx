import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Join.css";

const Pw = (props) => {
  // |이 코드는 비밀번호와 비밀번호 확인을 입력받아 유효성 검사를 수행하는 함수들을 포함하고 있습니다.
  // |
  // |코드 특징:
  // |- useState를 사용하여 상태값을 관리하고 있어서 코드가 간결합니다.
  // |- 비밀번호와 비밀번호 확인이 일치하는지 검사하는 부분이 구현되어 있어서 보안성이 높습니다.
  // |- 부모 컴포넌트의 상태값을 업데이트하여 다른 컴포넌트에서도 비밀번호 확인 상태를 사용할 수 있도록 구현되어 있습니다.
 
  const [password, setPassword] = useState(""); // 비밀번호 상태값
  const [passwordChk, setPasswordChk] = useState(""); // 비밀번호 확인 상태값
  const [pwMessage, setPwMessage] = useState(""); // 비밀번호 유효성 메시지 상태값
  const [pwChkMessage, setPwChkMessage] = useState(""); // 비밀번호 확인 유효성 메시지 상태값

  const handlePassword = (e) => {
    // 비밀번호 입력 이벤트 핸들러
    setPassword(e.target.value); // 비밀번호 상태값 업데이트
    e.preventDefault(); // 이벤트 기본 동작 방지
    const userPw = {
      Password: password,
    };
    localStorage.setItem("Password", password); // 로컬 스토리지에 비밀번호 저장
    if (password.length === 0) {
      // 비밀번호가 입력되지 않은 경우
      setPwMessage("비밀번호를 입력해주세요"); // 비밀번호 유효성 메시지 업데이트
    } else if (password.length < 8 || password.length > 16) {
      // 비밀번호가 8자 미만 또는 16자 초과인 경우
      setPwMessage("8 ~ 16자 가능합니다"); // 비밀번호 유효성 메시지 업데이트
    } else {
      // 비밀번호가 유효한 경우
      setPwMessage("사용가능합니다."); // 비밀번호 유효성 메시지 업데이트
    }
  };

  const handlePasswordChk = (e) => {
    // 비밀번호 확인 입력 이벤트 핸들러

    setPasswordChk(e.target.value); // 비밀번호 확인 상태값 업데이트

    if (passwordChk.length === 0) {
      // 비밀번호 확인이 입력되지 않은 경우
      setPwChkMessage("필수요소입니다."); // 비밀번호 확인 유효성 메시지 업데이트

      props.setPWVeri(false); // 부모 컴포넌트의 비밀번호 확인 상태값 업데이트
    } else if (password !== passwordChk) {
      // 비밀번호와 비밀번호 확인이 다른 경우
      setPwChkMessage("비밀번호가 다릅니다."); // 비밀번호 확인 유효성 메시지 업데이트

      props.setPWVeri(false); // 부모 컴포넌트의 비밀번호 확인 상태값 업데이트
    } else {
      // 비밀번호와 비밀번호 확인이 같은 경우
      setPwChkMessage(""); // 비밀번호 확인 유효성 메시지 초기화

      props.setPWVeri(true); // 부모 컴포넌트의 비밀번호 확인 상태값 업데이트
    }
  };

  return (
    <div>
      <div className="join-pw margin">
        <div className="password margin ">
          <strong className="pwstr">비밀번호</strong>
          <div className="inp">
            <input
              type="password"
              name="pw"
              value={password}
              onChange={handlePassword}
              onBlur={handlePassword}
            />
          </div>
          <p className="warn">{pwMessage}</p>
        </div>

        <div className="pw-chk  margin">
          <strong>비밀번호 재확인</strong>
          <div className="inp">
            <input
              type="password"
              name="pw-chk"
              value={passwordChk}
              onChange={handlePasswordChk}
              onBlur={handlePasswordChk}
            />
          </div>
          <p className="warn">{pwChkMessage}</p>
        </div>
      </div>
    </div>
  );
};

export default Pw;
