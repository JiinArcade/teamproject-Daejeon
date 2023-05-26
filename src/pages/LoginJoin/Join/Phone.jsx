import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Join.css";

const Phone = (props) => {
  // |이 코드는 전화번호 인증 기능을 구현하는데 사용되는 React Hooks를 사용한 코드입니다.
  // |
  // |코드 특징:
  // |- 전화번호 입력 시 유효성 검사를 하고, 인증번호 입력 시 일치 여부를 검사하여 인증 상태를 업데이트하는 기능이 구현되어 있습니다.
  const [phoneNum, setPhoneNum] = useState(""); // 전화번호를 입력받는 state
  const [veritext, setVeritext] = useState(""); // 인증번호를 입력받는 state
  const [phonenumMessage, setPhoneMessage] = useState(""); // 전화번호 입력 시 메시지를 표시하는 state
  const [veritextMessage, setVeriTextMessage] = useState(""); // 인증번호 입력 시 메시지를 표시하는 state

  const phoneNumber = (e) => {
    // 전화번호 입력 시 실행되는 함수
    setPhoneNum(e.target.value); // 전화번호 state 업데이트
    if (phoneNum.length === 0) {
      // 전화번호가 입력되지 않은 경우
      setPhoneMessage("필수요소입니다"); // 메시지 업데이트
    } else if (phoneNum.length > 11) {
      // 전화번호가 11자리를 초과하는 경우
      setPhoneMessage("번호 11자리 입력하세요"); // 메시지 업데이트
    } else if (isNaN(phoneNum)) {
      // 전화번호가 숫자가 아닌 경우
      setPhoneMessage("숫자만 입력해주세요"); // 메시지 업데이트
    } else {
      // 전화번호가 유효한 경우
      setPhoneMessage(""); // 메시지 초기화
    }
  };

  const btn = () => {
    // 인증번호 발송 버튼 클릭 시 실행되는 함수
    phoneNum.length === 11 // 전화번호가 11자리인 경우
      ? alert("인증번호가 발송되었습니다") // 인증번호 발송 알림창 표시
      : alert("전화번호 11자리 입력해주세요"); // 전화번호 입력 요청 알림창 표시
  };

  const numtxt = (e) => {
    // 인증번호 입력 시 실행되는 함수
    setVeritext(e.target.value); // 인증번호 state 업데이트
    if (e.target.value === "1234") {
      // 인증번호가 일치하는 경우
      setVeriTextMessage("인증되었습니다."); // 메시지 업데이트
      props.setPhoneVeri(true); // 전화번호 인증 상태를 true로 업데이트
    } else if (e.target.value.length === 0) {
      // 인증번호가 입력되지 않은 경우
      setVeriTextMessage("인증번호를 입력해주세요"); // 메시지 업데이트
      props.setPhoneVeri(false); // 전화번호 인증 상태를 false로 업데이트
    } else {
      // 인증번호가 일치하지 않는 경우
      setVeriTextMessage("인증번호 다시 확인해주세요."); // 메시지 업데이트
      props.setPhoneVeri(false); // 전화번호 인증 상태를 false로 업데이트
    }
  };

  return (
    <div>
      <div className="phone-Number-box margin">
        <strong>휴대폰 번호</strong>

        <div className="phonenum">
          <div className="country">
            <select name="country">
              <option value="82">대한민국 +82</option>
              <option value="233">가나 +233</option>
              <option value="30">그리스 +30</option>
              <option value="49">독일 +49</option>
            </select>
          </div>
          <div className="number">
            <div className="num-inp">
              <input
                type="text"
                name="phonenum"
                placeholder="전화번호 입력"
                onChange={phoneNumber}
                onBlur={phoneNumber}
              />
            </div>
            <button type="button" onClick={btn}>
              인증번호
            </button>
          </div>
          <p className="warn">{phonenumMessage}</p>

          <div className="disinput inp">
            <input type="text" placeholder="인증번호" onChange={numtxt} />
          </div>

          <p>{veritextMessage}</p>

          <div className="event">
            <label for="chk">
              <input type="checkbox" id="chk" />
              <i class="circle"></i>
              <span class="text">아이디 저장하기</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phone;
