import React from "react";
import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import "./MainBanner.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import navData from './MainBannerData.json'

const MainBanner = () => {
  const props = useSpring({
    from: { number: 0 },
    to: { number: 1446072 },
    config: { tension: 100 },
  });

  // MainNavList Array and Object 
  const [isOpen, setIsOpen] = useState(null);
  const handleHover = (i) => {
    setIsOpen(i);
  };

  const handleHoverLeave = () => {
    setIsOpen(null);
  };

  // 미세먼지 10 정하는 스테이트
  const [airQuality, setAirQuality] = useState(null);
  // 미세먼지 25 정하는 스테이트
  const [airQuality2, setAirQuality2] = useState(null);
  // 날씨상태 알려주는 스테이트
  const [weather, setWeather] = useState(null);
  // 온도 정하는 스테이트
  const [temper, setTemper] = useState(null);

  useEffect(() => {
    const fetchAirQuality = async () => {
      const response = await fetch(
        "https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=69MDcrrkbf0Z3ZW4LFyqSZ%2BLToQPK3vjVrDrzz3qtpGyGG2JezYDMin%2FLsyv3NWBK%2BejgMVU4p879wUSlznU1Q%3D%3D&returnType=json&numOfRows=100&pageNo=1&sidoName=%EB%8C%80%EC%A0%84&ver=1.0"
      );
      const data = await response.json();
      setAirQuality(data.response.body.items[11].pm10Value);
      setAirQuality2(data.response.body.items[11].pm25Value);
    };

    const fetchWeather = async () => {
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=36.3617&lon=127.3868&appid=f97e7ef1034e0c950eb56df741876340&units=metric"
      );
      const data = await response.json();
      setWeather(data.weather[0].main);
      setTemper(data.main.temp);
    };

    fetchAirQuality();
    fetchWeather();

    const interval = setInterval(() => {
      fetchAirQuality();
      fetchWeather();
    }, 600000); // 10분마다 API 호출
    return () => clearInterval(interval);
  }, []);

  if (!airQuality || !weather) {
    return <div>Loading...</div>;
  }

  const pm10 = airQuality;
  const pm25 = airQuality2;
  const temp = temper;
  const weath = weather;

  let image_dust;
  let txt_dust;
  if (pm10 > 150) {
    image_dust = "/icon/finedust-red.png";
    txt_dust = "매우 나쁨";
  } else if (pm10 > 80) {
    image_dust = "/icon/finedust-orange.png";
    txt_dust = "나쁨";
  } else if (pm10 > 30) {
    image_dust = "/icon/finedust-green.png";
    txt_dust = "보통";
  } else {
    image_dust = "/icon/finedust-blue.png";
    txt_dust = "좋음";
  }

  let image_dust2;
  let txt_dust2;
  if (pm25 > 75) {
    image_dust2 = "/icon/finedust-red.png";
    txt_dust2 = "매우 나쁨";
  } else if (pm25 > 35) {
    image_dust2 = "/icon/finedust-orange.png";
    txt_dust2 = "나쁨";
  } else if (pm25 > 15) {
    image_dust2 = "/icon/finedust-green.png";
    txt_dust2 = "보통";
  } else {
    image_dust2 = "/icon/finedust-blue.png";
    txt_dust2 = "좋음";
  }

  let image_weath;
  if (weath == "Clear") {
    image_weath = "/icon/날씨 아이콘-맑음.png";
  } else if (weath == "Clouds") {
    image_weath = "/icon/날씨 아이콘-구름.png";
  } else if (weath == "Snow") {
    image_weath = "/icon/날씨 아이콘-눈.png";
  } else if (weath == "Rain") {
    image_weath = "/icon/날씨 아이콘-비.png";
  } else if (weath == "Thunderstorm") {
    image_weath = "/icon/날씨 아이콘-번개.png";
  } else if (weath == "Drizzle") {
    image_weath = "/icon/날씨 아이콘-이슬비.png";
  } else {
    image_weath = "/icon/날씨 아이콘-맑음.png";
  }

  let weath_condition;
  if (weath == "Clear") {
    weath_condition = "맑음";
  } else if (weath == "Clouds") {
    weath_condition = "구름";
  } else if (weath == "Snow") {
    weath_condition = "눈";
  } else if (weath == "Rain") {
    weath_condition = "비";
  } else if (weath == "Thunderstorm") {
    weath_condition = "번개";
  } else if (weath == "Drizzle") {
    weath_condition = "이슬비";
  } else {
    weath_condition = "맑음";
  }

  return (
    <div>
      <header className="global-header">
        <div className="gnb">
          <div className="logo">
            <a href="/">
              <img
                className="logoImg"
                src="/img/logo.png"
                alt="대전시청 로고"
              />
            </a>
          </div>

          <nav>
            <ul className="gnb-main-list">
              {
                navData.map((a, i) => {
                  return (
                    <li className="gnb-main-item" key={i}>
                      <a
                       href="/"
                       onMouseEnter={() => handleHover(i)}
                       onMouseLeave={handleHoverLeave}
                      >{a.navTitle}</a>
                      {
                       i === isOpen && (
                        <ul className={"sub " + (i === isOpen ? "drop" : "")}
                            onMouseEnter={() => handleHover(i)}
                            onMouseLeave={handleHoverLeave}
                        >
                        {a.navItem.map((a, i) => {
                          return (
                            <li key={i}>
                              <a href="/">{a}</a>
                            </li>
                          )
                        })}
                      </ul>
                       )
                      }
                    </li>
                  )
                }) 
              }
            </ul>
          </nav>

          <ul className="btn-box">
            <Link to="/Login">
              <li className="login" type="button">
                로그인
              </li>
            </Link>
            <Link to="/Register">
              <li className="join" type="button">
                회원가입
              </li>
            </Link>
          </ul>
        </div>
        
        <div className="md-only">
          <div className="logo">
            <a href="/">
              <img
                className="logoImg"
                src="/img/logo.png"
                alt="대전시청 로고"
              />
            </a>
            <span className="md-PageRetrun">첫 화면으로 돌아가기</span>
          </div>
          <ul className="md-Header">
            <Link to="/Login">
              <li className="md-login" type="button">
                로그인
              </li>
            </Link>
            <Link to="/Register">
              <li className="md-Register" type="button">
                회원가입
              </li>
            </Link>
            <button type="button">
              <FontAwesomeIcon icon={faBars} />
            </button>
          </ul>
        </div>

        <div className="frontBox">
          <div className="frontText">
            <h1 className="koreaCenter">대한민국의 중심축!</h1>
            <h1 className="deajeon">
              대전광역시
              <span className="count__number">
                <animated.span>
                  {props.number.interpolate((number) => number.toFixed())}
                </animated.span>
              </span>
              명!
            </h1>
          </div>

          <div className="searchWrapper">
            <div className="searchBox">
              <form action="https://www.google.com/search" method="GET">
                <input
                  name="q"
                  type="text"
                  placeholder="검색하시면 Goggle페이지로 이동합니다."
                />
              </form>
            </div>
            <img
              className="searchImg"
              src="/icon/search-icon.png"
              alt="검색 아이콘"
            ></img>

            <div className="tagWrapper">
              <div className="tagBox">
                <span>추천검색어</span>
                <span>#전자민원</span>
              </div>
              <div className="tagBox">
                <span>추천검색어</span>
                <span>#자유게시판</span>
              </div>
              <div className="tagBox">
                <span>추천검색어</span>
                <span>#설정하기</span>
              </div>
              <div className="tagBox">
                <span>추천검색어</span>
                <span>#버스전용차로</span>
              </div>
              <div className="tagBox">
                <span>추천검색어</span>
                <span>#회원가입</span>
              </div>
              <div className="tagBox">
                <span>추천검색어</span>
                <span>#시장소개</span>
              </div>
            </div>
          </div>
        </div>

        <div className="scrollAction">
          <p className="scrollText">Scroll</p>
          <div className="scrollBox">
            <div className="scrollBall"></div>
          </div>
        </div>

        <div className="daejeon-weather-wrap">
          <div className="daejeon-weatherBox">
            <div className="weatherBox">
              <img
                className="weather-Img"
                src={image_weath}
                alt="현재 날씨 이미지"
              />
              <p className="temp">{temp}</p>
              <p className="weath-condition">{weath_condition}</p>
              <p className="minimum-temperature" style={{ color: "#227cff" }}>
                {(temp - 20).toFixed(2)}°
              </p>
              <p style={{ color: "#a5a5a5" }}>/</p>
              <p className="highest-temperature" style={{ color: "#ff1515" }}>
                {temp + 3}°
              </p>
              <p className="daejeon-Dust-text" style={{ color: "#000" }}>
                대전광역시
              </p>
            </div>
            <div className="daejeon-dustBox">
              <p>미세</p>
              <img className="dust-Img" src={image_dust} alt="미세먼지" />
              <p
                style={
                  txt_dust == "매우 나쁨"
                    ? { color: "#f21919" }
                    : txt_dust == "나쁨"
                    ? { color: "#ff5d05" }
                    : txt_dust == "보통"
                    ? { color: "#26c405" }
                    : txt_dust == "좋음"
                    ? { color: "#3d70fc" }
                    : { color: "#3d70fc" }
                }
              >
                {txt_dust}
              </p>
              <p className="ultraDustText">초미세</p>
              <img className="ultraDust-Img" src={image_dust2} alt="초미세먼지" />
              <p
                style={
                  txt_dust2 == "매우 나쁨"
                    ? { color: "#f21919" }
                    : txt_dust2 == "나쁨"
                    ? { color: "#ff5d05" }
                    : txt_dust2 == "보통"
                    ? { color: "#26c405" }
                    : txt_dust2 == "좋음"
                    ? { color: "#3d70fc" }
                    : { color: "#3d70fc" }
                }
              >
                {txt_dust2}
              </p>
              <p className="daejeon-UltraDust-text" style={{ color: "#000" }}>
                대전광역시
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
export default MainBanner;
