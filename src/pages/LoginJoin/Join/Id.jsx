import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Join.css";

const Id = (props) => {
  // |이 코드는 아이디 유효성 검사를 위한 함수이다.
  // |
  // |코드 특징:
  // |- useState를 사용하여 상태값을 관리하고 있다.
  // |- 정규식을 사용하여 유효성 검사를 하고 있다.
  // |- props를 사용하여 검증 결과를 부모 컴포넌트에 전달하고 있다.
  const [id, setId] = useState(""); // id 상태값과 id를 변경하는 setId 함수를 선언하고 초기값을 빈 문자열로 설정한다.
  const [idMessage, setIdMessage] = useState(""); // idMessage 상태값과 idMessage를 변경하는 setIdMessage 함수를 선언하고 초기값을 빈 문자열로 설정한다.

  const idfocusout = (e) => {
    // idfocusout 함수를 선언하고 매개변수로 이벤트 객체 e를 받는다.
    setId(e.target.value); // setId 함수를 사용하여 id 상태값을 이벤트 객체의 value 값으로 변경한다.

    const idreg = /^[a-z]+[a-z0-9]{4,12}$/g; // 아이디 유효성 검사를 위한 정규식을 선언한다.

    e.preventDefault(); // 이벤트의 기본 동작을 막는다.

    const userId = {
      // userId 객체를 선언한다.
      id: id, // id 속성에 id 값을 할당한다.
    };

    localStorage.setItem("id", id); // 로컬 스토리지에 id 값을 저장한다.

    if (id.length === 0) {
      // 만약 id 값이 빈 문자열이면
      setIdMessage("아이디를 입력해주세요"); // setIdMessage 함수를 사용하여 idMessage 상태값을 "아이디를 입력해주세요"로 변경한다.
      props.setIDVeri(false); // props로 전달받은 setIDVeri 함수를 사용하여 아이디 검증 결과를 false로 설정한다.
    } else if (id.length < 4 || id.length > 12) {
      // 만약 id 값이 4자 미만 또는 12자 초과이거나 정규식과 일치하지 않으면
      setIdMessage("4 ~ 12자사이 입력해주세요"); // setIdMessage 함수를 사용하여 idMessage 상태값을 "4 ~ 12자 대소문자 또는 숫자만 입력해 주세요!"로 변경한다.
      props.setIDVeri(false); // props로 전달받은 setIDVeri 함수를 사용하여 아이디 검증 결과를 false로 설정한다.
    } else if (!idreg) {
      // 만약 id 값이 정규식과 일치하지 않으면
      setIdMessage("영어 대소문자 또는 숫자를 입력해주세요."); // setIdMessage 함수를 사용하여 idMessage 상태값을 "영어 대소문자 또는 숫자를 입력해주세요."로 변경한다.
      props.setIDVeri(false); // props로 전달받은 setIDVeri 함수를 사용하여 아이디 검증 결과를 false로 설정한다.
    } else {
      // 그 외의 경우
      setIdMessage("사용 가능한 아이디 입니다."); // setIdMessage 함수를 사용하여 idMessage 상태값을 "사용 가능한 아이디 입니다."로 변경한다.
      props.setIDVeri(true); // props로 전달받은 setIDVeri 함수를 사용하여 아이디 검증 결과를 true로 설정한다.
    }
  };
  return (
    <div>
      <div className="join-id  margin ">
        <strong>아이디</strong>
        <div className="inp">
          <input
            type="text"
            name="id"
            value={id}
            onBlur={idfocusout}
            onChange={idfocusout}
          />
        </div>
        <p className="warn">{idMessage}</p>
      </div>
    </div>
  );
};

export default Id;
