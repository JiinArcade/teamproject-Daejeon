import React from 'react'
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../Join.css'

const Impo = (props) => {
  const [name, setName] = useState(""); // 이름 상태값과 상태를 변경할 함수를 정의하고 초기값을 빈 문자열로 설정
  const [email, setEmail] = useState(""); // 이메일 상태값과 상태를 변경할 함수를 정의하고 초기값을 빈 문자열로 설정
  const [year, setYear] = useState(""); // 생년 상태값과 상태를 변경할 함수를 정의하고 초기값을 빈 문자열로 설정
  const [month, setMonth] = useState(""); // 생월 상태값과 상태를 변경할 함수를 정의하고 초기값을 빈 문자열로 설정
  const [day, setDay] = useState(""); // 생일 상태값과 상태를 변경할 함수를 정의하고 초기값을 빈 문자열로 설정

  const [nameMessage, setNameMessage] = useState(""); // 이름 입력에 대한 안내 메시지 상태값과 상태를 변경할 함수를 정의하고 초기값을 빈 문자열로 설정
  const [emailMessage, setEmailMessage] = useState(""); // 이메일 입력에 대한 안내 메시지 상태값과 상태를 변경할 함수를 정의하고 초기값을 빈 문자열로 설정
  const [birthMessage, setBirthMessage] = useState(""); // 생년월일 입력에 대한 안내 메시지 상태값과 상태를 변경할 함수를 정의하고 초기값을 빈 문자열로 설정

  // |이 코드는 이름 입력란에서 포커스가 벗어났을 때 실행되는 함수입니다. 입력된 이름 값을 상태값에 저장하고, 이름이 입력되지 않았을 경우에는
  // 필수요소임을 안내하는 메시지를 설정하고 필수 입력 항목이 모두 입력되었는지 확인하는 상태값을 false로 설정합니다. 반면, 이름이 입력되었을 경우에는 이름 입력에 대한 안내 메시지를 초기화하고 필수 입력 항목이 모두 입력되었는지 확인하는 상태값을 true로 설정합니다.
  // |
  // |코드의 좋은 점은 입력된 이름 값을 상태값에 저장하고 필수 입력 항목이 모두 입력되었는지 확인하는 상태값을 설정하여 유효성 검사를 수행한다는 것입니다.
  // 이를 통해 사용자가 필수 입력 항목을 모두 입력하지 않았을 때 적절한 안내 메시지를 제공하고, 필수 입력 항목이 모두 입력되었을 때 다음 단계로 진행할 수 있도록 도와줍니다.
  const namefocusout = (e) => {
    // 이름 입력란에서 포커스가 벗어났을 때 실행되는 함수
    setName(e.target.value); // 입력된 이름 값을 상태값에 저장
    if (name.length === 0) {
      // 이름이 입력되지 않았을 경우
      setNameMessage("필수요소입니다."); // 이름 입력에 대한 안내 메시지를 설정
      props.setImpoVeri(false); // 필수 입력 항목이 모두 입력되었는지 확인하는 상태값을 false로 설정
    } else {
      // 이름이 입력되었을 경우
      setNameMessage(""); // 이름 입력에 대한 안내 메시지를 초기화
      props.setImpoVeri(true); // 필수 입력 항목이 모두 입력되었는지 확인하는 상태값을 true로 설정
    }
  };

  // |이 코드는 이메일 입력창에 focus가 되었을 때 실행되는 함수입니다.
  // |
  // |코드 특징 :
  // |- 이메일 값을 저장하는 setEmail 함수를 이용해 입력된 이메일 값을 저장합니다.
  // |- 이메일 정규식을 이용해 입력된 이메일 값이 유효한 이메일 주소인지 검증합니다.
  // |- 이메일 주소를 다시 확인하라는 메시지를 출력하는 setEmailMessage 함수를 이용해 사용자에게 알립니다.

  const emailfocus = (e) => {
    // email 입력창에 focus가 되었을 때 실행되는 함수
    setEmail(e.target.value); // 입력된 이메일 값을 setEmail 함수를 이용해 저장
    let emailregExp = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i; // 이메일 정규식
    if (email === !emailregExp) {
      // 입력된 이메일 값이 이메일 정규식과 일치하지 않을 경우
      setEmailMessage("이메일 주소를 다시 확인해주세요"); // setEmailMessage 함수를 이용해 이메일 주소를 다시 확인하라는 메시지 출력
    } else {
      // 입력된 이메일 값이 이메일 정규식과 일치할 경우
      setEmailMessage(""); // setEmailMessage 함수를 이용해 메시지를 초기화
    }
  };

  // |이 코드는 생년월일 입력란에서 값이 변경될 때 실행되는 함수입니다. 입력된 생년월일 값을 이용하여 Date 객체를 생성하고, 현재 날짜와 비교하여 유효성을 검사합니다.
  // |
  // |코드 특징:
  // |- 입력된 생년월일 값이 유효한지 검사하여, 잘못된 값이 입력되었을 경우 안내 메시지를 설정합니다.
  // |- 필수 입력 항목이 모두 입력되었는지 확인하는 상태값을 설정하여, 다음 단계로 진행할 수 있는지 여부를 판단할 수 있습니다.
 
  const birth = (e) => {
    // 생년월일 입력란에서 값이 변경될 때 실행되는 함수
    let now = new Date(); // 현재 날짜를 생성
    let nowstramp = now.getTime(); // 현재 날짜를 밀리초로 변환
    now = now.getFullYear(); // 현재 연도를 가져옴

    let bir = new Date(year, month, day); // 입력된 생년월일 값을 이용하여 Date 객체 생성
    bir = bir.getTime(); // 입력된 생년월일을 밀리초로 변환

    if (isNaN(year) || isNaN(month) || isNaN(day)) {
      // 입력된 생년월일 값이 숫자가 아닐 경우
      setBirthMessage("생년월일을 다시 확인해주세요"); // 생년월일 입력에 대한 안내 메시지를 설정
      props.setImpoVeri(false); // 필수 입력 항목이 모두 입력되었는지 확인하는 상태값을 false로 설정
    } else if (year.length !== 4 && year.length === "") {
      // 입력된 생년도 값이 4자리가 아니거나 입력되지 않았을 경우
      setBirthMessage("태어난 연도 4자리를 정확하게 입력해주세요"); // 생년월일 입력에 대한 안내 메시지를 설정
      props.setImpoVeri(false); // 필수 입력 항목이 모두 입력되었는지 확인하는 상태값을 false로 설정
    } else if (day.length === 0 && day > 31 && day < 1) {
      // 입력된 생일 값이 1~31 사이의 값이 아닐 경우
      setBirthMessage("태어난 일(날짜)을 정확하게 입력해주세요"); // 생년월일 입력에 대한 안내 메시지를 설정
      props.setImpoVeri(false); // 필수 입력 항목이 모두 입력되었는지 확인하는 상태값을 false로 설정
    } else {
      // 모든 입력값이 유효할 경우
      setBirthMessage(""); // 생년월일 입력에 대한 안내 메시지를 초기화
      props.setImpoVeri(true); // 필수 입력 항목이 모두 입력되었는지 확인하는 상태값을 true로 설정
    }
  };

  return (
    <div>
      {/* 이름 */}
      <div className="join-name-box  margin">
        <strong>이름</strong>
        <div className="inp">
          <input
            type="text"
            value={name}
            onChange={namefocusout}
            onBlur={namefocusout}
          />
        </div>
        <p className="warn">{nameMessage}</p>
      </div>

      {/* 생년월일 */}
      <div className="birth-box margin">
        <label htmlFor="">
          <strong>생년월일</strong>
          <div className="three-box">
            <div className="year-box">
              <input
                type="text"
                name="year"
                className="year"
                maxLength={4}
                placeholder="년(4자)"
                onChange={birth}
                onBlur={birth}
                // value={year}
              />
            </div>
            <div className="month-box">
              <select
                name="month"
                className="month"
                onChange={birth}
                onBlur={birth}
                //value={month}
              >
                <option value="">월</option>
                <option value="0">1</option>
                <option value="1">2</option>
                <option value="2">3</option>
                <option value="3">4</option>
                <option value="4">5</option>
                <option value="5">6</option>
                <option value="6">7</option>
                <option value="7">8</option>
                <option value="8">9</option>
                <option value="9">10</option>
                <option value="10">11</option>
                <option value="11">12</option>
              </select>
            </div>
            <div className="day-box">
              <input
                type="text"
                name="day"
                className="day"
                maxLength={2}
                placeholder="일"
                onChange={birth}
                onBlur={birth}
                //value={props.day}
              />
            </div>
          </div>
          <p>{birthMessage}</p>
        </label>
      </div>

      {/* 성별 */}
      <div className="gender-box margin">
        <strong>성별</strong>
        <div className="sel">
          <select name="">
            <option value="0">성별</option>
            <option value="1">남자</option>
            <option value="2">여자</option>
          </select>
        </div>
      </div>

      {/* 이메일 */}
      <div className="e-mail margin">
        <strong>
          본인 확인 이메일<span>(선택)</span>
        </strong>
        <div className="inp">
          <input type="text" name="email" onChange={emailfocus} onBlur={emailfocus}/>
        </div>
        <p className="warn">{emailMessage}</p>
      </div>
    </div>
  );
}

export default Impo
