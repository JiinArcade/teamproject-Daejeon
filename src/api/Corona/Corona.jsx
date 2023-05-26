import React from "react";
import "./Corona.css";
import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

// 우선 api에서 값을 잘 받아오는지 확인하자.

const Corona = () => {
  // 날짜 관련 state
  const currentDate = new Date();

  const [currentyear, setCurrentYear] = useState("");

  const [currentMonth, setCurrentMonth] = useState("");

  const [today, setToday] = useState("");

  const [yesterday, setYesterday] = useState("");

  // 날짜 관련 useEffect
  useEffect(() => {
    // 현재 년도를 가져옴
    let year = parseInt(currentDate.getFullYear().toString().substring(2));
    setCurrentYear(year);

    // 현재 월을 가져옴 (0 ~ 11 사이의 값이 반환됨)
    let month = currentDate.getMonth() + 1;

    // 월이 10보다 작을 경우, 앞에 "0"을 추가하여 반환
    if (month < 10) {
      month = "0" + month;
    }

    // 결과를 state에 저장
    setCurrentMonth(month);

    //날짜도 마찬가지로 똑같이 10이하면 앞에 0붙이기, 단 날짜는 어제 날짜이어야 한다.

    // 현재 날짜를 가져와서 1을 뺌으로서 어제 날짜로 바꿔줌
    let day = currentDate.getDate() - 1;

    // 날짜가 10보다 작을 경우, 앞에 "0"을 추가하여 반환
    if (day < 10) {
      day = "0" + day;
    } else if (day == 0) {
      day = 30;
    }
    setYesterday(day);

    // 오늘 날짜 설정
    let today = currentDate.getDate();

    if (today < 10) {
      today = "0" + today;
    }

    setToday(today);
  }, []);

  // 전국 코로나 감염자 상황
  const [coronaConfirm, setCoronaConfirm] = useState(null);

  // 전국 코로나 사망자 상황
  const [coronaDeath, setCoronaDeath] = useState(null);

  // 대전 일일 코로나 확진자 상황
  const [djConfirm, setDjConfirm] = useState(null);

  // 코로나 관련 useEffect
  useEffect(() => {
    const fetchCorona = async () => {
      const response = await fetch(
        "http://apis.data.go.kr/1790387/covid19CurrentStatusKorea/covid19CurrentStatusKoreaJason?serviceKey=69MDcrrkbf0Z3ZW4LFyqSZ%2BLToQPK3vjVrDrzz3qtpGyGG2JezYDMin%2FLsyv3NWBK%2BejgMVU4p879wUSlznU1Q%3D%3D"
      );
      const data = await response.json();
      setCoronaConfirm(parseInt(data.response.result[0].cnt_confirmations));
      setCoronaDeath(parseInt(data.response.result[0].cnt_deaths));
    };

    const fetchDJCorona = async () => {
      const response = await fetch(
        `http://apis.data.go.kr/1352000/ODMS_COVID_04/callCovid04Api?serviceKey=69MDcrrkbf0Z3ZW4LFyqSZ%2BLToQPK3vjVrDrzz3qtpGyGG2JezYDMin%2FLsyv3NWBK%2BejgMVU4p879wUSlznU1Q%3D%3D&std_day=2023-${currentMonth}-${yesterday}&gubun=%EB%8C%80%EC%A0%84&apiType=JSON`
      );
      const data1 = await response.json();
      setDjConfirm(parseInt(data1.items[0].incDec));
    };

    fetchCorona();
    fetchDJCorona();

    const interval = setInterval(() => {
      fetchCorona();
      fetchDJCorona();
    }, 600000); // 10분마다 API 호출
    return () => clearInterval(interval);
  }, []);

  const props1 = useSpring({
    from: { number: 0 },
    to: { number: coronaConfirm },
    config: { tension: 40 },
  });

  const props2 = useSpring({
    from: { number: 0 },
    to: { number: coronaDeath },
    config: { tension: 17 },
  });

  const props3 = useSpring({
    from: { number: 0 },
    to: { number: djConfirm },
    config: { tension: 500 },
  });


  return (
    <div>
      <div className="Covid-frontBox">
        <div className="Covid-timeNow">
          {currentyear}. {currentMonth}. {today}. 0시 기준
        </div>
        <div className="Covid-countBox">
          <div className="Covid-about national">
            <p className="Covid-Nationwide">전국</p>
            <animated.p className="number">
              {props1.number.interpolate((number) => number.toFixed())}
            </animated.p>
            <p className="Covid-letter">코로나 감염자 상황</p>
          </div>

          <div className="Covid-about national-death">
            <p className="Covid-Nationwide">전국</p>
            <animated.p className="number">
              {props2.number.interpolate((number) => number.toFixed())}
            </animated.p>
            <p className="Covid-letter">코로나 사망자 상황</p>
          </div>

          <div className="Covid-about daejeon-infect">
            <p className="Covid-Daejeon">대전</p>
            <animated.p className="number">
              {props3.number.interpolate((number) => number.toFixed())}
            </animated.p>
            <p className="Covid-letter">전일 대비 확진자 증감수</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Corona;
