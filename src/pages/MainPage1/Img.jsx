import React, { useEffect, useRef, useState } from 'react'
import './Img.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";



const Img = ({setAverlay}) => {

  // 클래스 네임 줘서 디스플레이 속성 바꾸게 하려는 것이다.
  const [overlay, setOverlay] = useState('overlay');
  const [menubox, setMenuBox] = useState('menubox');

  // 이건 저장하기 누르면 overlay, menu-box를 안 보이게 만드는 것, 로컬스토리지로 보내기. 우선 안보이게 먼저 하기.
  // 그러면 어떻게 안 보이게 하냐.. overlay, menu-box에 is-active 클래스 추가해서 안 보이게 하자.
  const [saving, setSaving] = useState(false);

  // 선택한 메뉴를 모아둘 방법을 생각해보자.
  // 라디오 버튼 선택된 거 모음
  const [isChecked, setIsChecked] = useState(false);
  const [saveChecked, setSaveChecked] = useState([]);
  const ref = useRef([]);

  //checked 클릭되었을 때 실행시킬 함수
  const handleChecked = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleImgBox4Click = (index) => {
    const newRef = [...ref.current];
    newRef[index].style.opacity = 1;
    ref.current = newRef;
  }


  useEffect(() => {
    if (saving) {

      ref.current.forEach((item, index) => {

        // 질문
        //ref.current; -> 이건 도대체 뭘 ㄹ의미하는지 모르겠습니다. 어레이가 나오는데 안에는 다 null값... ㅜㅜ
        // ref.current.item 이건 undefined가 7번 찍힙니다. ㅜㅜ 즉 안에가 아직 값이 안 정해진 거인데
        // 왜 언디파인이 뜨는지 모르겠습니다.

        if (item.checked) {
          // True 일 때 true인 이미지를 저장하기
          
          saveChecked.push(item.id);
          localStorage.setItem("saveChecked", JSON.stringify(saveChecked)); 


          // 질문
          // const key = `image_${index}`; // 이미지를 식별하는 고유한 키 생성
          // localStorage.setItem(key, JSON.stringify(item)); // key와 체크된 이미지를 쌍으로 저장 -> 저 세개는 지피티 돌린 것인데 
          // 왜 작동을 안 한 건지 모르겠습니다.

        } else {
          // 질문
          // False 일 때 여긴 뭘 입력하는 게 좋을까요
        }
        // saveChecked[index] = item.checked;
        
      })
      // 질문
      // setOverlay('overlay is-active');
      // setMenuBox('menubox is-active'); -> 이 두개를 각주처리하니깐 저장 누르니 사라진다. 원하는 효과긴 한데 왜 그런지 ㅜㅜ, 혹시
      // setAverlay(false) 때문인지???? 또 궁금한 것이 만약 if 다음에 그만 멈추길 바라면  { } 안에 return을 넣으면 되는 것인지????

      // setAverlay(false) 이것은 SwipeMenu에 있는 setAverlay 함수를 지칭하는 것이다. 어쨋든 Img 컴포넌트는 SwipeMenu에 포함되어 있으니깐
      setAverlay(false)
      // 선택한 메뉴를 모아두는 객체나 어레이를 만들자 완
      // 이제 선택한 메뉴 모아두는 객체를 로컬스토리지에 저장시키자. 완
      // 저장하기 눌렀을 때 메뉴박스2 안을 싹다 비우고 
      //-> 로컬스토리지가 비어있지 않으면, 내부값을 이용하자는 삼항 연산자를 이용하자.

      // 입력받은 값의 번호를 입력해 이미지가 뜨게 코드를 짜보자
      // 당연히 프롭스를 이용해서 짜야 한다.
      // 
      // 그리고 이미지는 클릭하면 클래스네임 추가되게 하고.
    }
  }, [saving])


  //취소하기 클릭되었을 때 실행시킬 함수
  // 설정하기 창 종료시킬 예정.
  const cancling = () => {
    setAverlay(false)
  };

  return (
    <div className={overlay}>
      <div className={menubox}>  
        <div className='img-box2'>  
        {/* checked={isChecked} check 상태 isChecked가 true 이면 checked 된 것으로 바로 뜬다. 만약 false 이면 checked 안 것으로 뜬다, 한번 더 검사하는 개념으로 생각. 만약 버튼 눌러셔 check가 true가 되면 당연히 true가 입력이 된다.
        그래서 굳이 쓸 필요는 없다. */}
          <p className='text-title'>
            <span className='text-title1'>자주가는 서비스</span>
            <span className='text-title2'>설정하기</span>
            <span className='setting-close-btn'>
              <FontAwesomeIcon  onClick={cancling} icon={faCircleXmark} />
            </span>
          </p>

          <div className='img-box3'>

            <ul className='img-box-container'>
              <li className="img-box-list">
                <div className='img-box4' onClick={() => handleImgBox4Click(0)}>
                  <img className='close' src="./icon/blue-btn-right.png" alt="닫기 이미지" />
                  <input type="checkbox" onClick={handleChecked} id='2' ref={elem => (ref.current[0] = elem)}/>
                  {/* elem => (ref.current[0] = elem) 이 정확히 뭘 의미하는지 알고 싶습니다. */}
                  <label htmlFor='2'>
                    <div className="img-wrapper"><img className='service' src="./icon/service (2).png" alt="" /></div>
                  </label>
                </div>
                <div className='img-box4' onClick={() => handleImgBox4Click(1)}>
                  <img className='close' src="./icon/blue-btn-right.png" alt="닫기 이미지" />
                  <input type="checkbox" onClick={handleChecked} id='3' ref={elem => (ref.current[1] = elem)}/>
                  <label htmlFor='3'>
                    <div className="img-wrapper"><img className='service' src="./icon/service (3).png" alt="" /></div></label>
                </div>
                <div className='img-box4' onClick={() => handleImgBox4Click(2)}>
                  <img className='close' src="./icon/blue-btn-right.png" alt="닫기 이미지" />
                  <input type="checkbox" onClick={handleChecked} id='4' ref={elem => (ref.current[2] = elem)}/>
                  <label htmlFor='4'>
                    <div className="img-wrapper"><img className='service' src="./icon/service (4).png" alt="" /></div>
                  </label>
                </div>
                <div className='img-box4' onClick={() => handleImgBox4Click(3)}>
                  <img className='close' src="./icon/blue-btn-right.png" alt="닫기 이미지" />
                  <input type="checkbox" onClick={handleChecked} id='5' ref={elem => (ref.current[3] = elem)}/>
                  <label htmlFor='5'>
                  <div className="img-wrapper"><img className='service' src="./icon/service (5).png" alt="" /></div>
                  </label>
                </div>
                <div className='img-box4' onClick={() => handleImgBox4Click(4)}>
                  <img className='close' src="./icon/blue-btn-right.png" alt="닫기 이미지" />
                  <input type="checkbox" onClick={handleChecked} id='6' ref={elem => (ref.current[4] = elem)}/>
                  <label htmlFor='6'>
                  <div className="img-wrapper"><img className='service' src="./icon/service (6).png" alt="" /></div>
                  </label>
                </div>
              </li>
              <li className="img-box-list">
                <div className='img-box4' onClick={() => handleImgBox4Click(5)}>
                  <img className='close' src="./icon/blue-btn-right.png" alt="닫기 이미지" />
                  <input type="checkbox" onClick={handleChecked} id='7' ref={elem => (ref.current[5] = elem)}/>
                  <label htmlFor='7'>
                  <div className="img-wrapper"><img className='service' src="./icon/service (7).png" alt="" /></div>
                  </label>
                </div>
                <div className='img-box4' onClick={() => handleImgBox4Click(6)}>
                  <img className='close' src="./icon/blue-btn-right.png" alt="닫기 이미지" />
                  <input type="checkbox" onClick={handleChecked} id='8' ref={elem => (ref.current[6] = elem)}/>
                  <label htmlFor='8'>
                  <div className="img-wrapper"><img className='service' src="./icon/service (8).png" alt="" /></div>
                  </label>
                </div>
                <div className='img-box4' onClick={() => handleImgBox4Click(7)}>
                  <img className='close' src="./icon/blue-btn-right.png" alt="닫기 이미지" />
                  <input type="checkbox" onClick={handleChecked} id='9' ref={elem => (ref.current[7] = elem)}/>
                  <label htmlFor='9'>
                  <div className="img-wrapper"><img className='service' src="./icon/service (9).png" alt="" /></div>
                  </label>
                </div>
                <div className='img-box4' onClick={() => handleImgBox4Click(8)}>
                  <img className='close' src="./icon/blue-btn-right.png" alt="닫기 이미지" />
                  <input type="checkbox" onClick={handleChecked} id='10' ref={elem => (ref.current[8] = elem)}/>
                  <label htmlFor='10'>
                  <div className="img-wrapper"><img className='service' src="./icon/service (10).png" alt="" /></div>
                  </label>
                </div>
                <div className='img-box4' onClick={() => handleImgBox4Click(9)}>
                  <img className='close' src="./icon/blue-btn-right.png" alt="닫기 이미지" />
                  <input type="checkbox" onClick={handleChecked} id='11' ref={elem => (ref.current[9] = elem)}/>
                  <label htmlFor='11'>
                  <div className="img-wrapper"><img className='service' src="./icon/service (11).png" alt="" /></div>
                  </label>
                </div>
              </li>
              <li className="img-box-list">
                <div className='img-box4' onClick={() => handleImgBox4Click(10)}>
                  <img className='close' src="./icon/blue-btn-right.png" alt="닫기 이미지" />
                  <input type="checkbox" onClick={handleChecked} id='12' ref={elem => (ref.current[10] = elem)}/>
                  <label htmlFor='12'>
                  <div className="img-wrapper"><img className='service' src="./icon/service (12).png" alt="" /></div>
                  </label>
                </div>
                <div className='img-box4' onClick={() => handleImgBox4Click(11)}>
                  <img className='close' src="./icon/blue-btn-right.png" alt="닫기 이미지" />
                  <input type="checkbox" onClick={handleChecked} id='13' ref={elem => (ref.current[11] = elem)}/>
                  <label htmlFor='13'>
                  <div className="img-wrapper"><img className='service' src="./icon/service (13).png" alt="" /></div>
                  </label>
                </div>
                <div className='img-box4' onClick={() => handleImgBox4Click(12)}>
                  <img className='close' src="./icon/blue-btn-right.png" alt="닫기 이미지" />
                  <input type="checkbox" onClick={handleChecked} id='14' ref={elem => (ref.current[12] = elem)}/>
                  <label htmlFor='14'>
                  <div className="img-wrapper"><img className='service' src="./icon/service (14).png" alt="" /></div>
                  </label>
                </div>
                <div className='img-box4' onClick={() => handleImgBox4Click(13)}>
                  <img className='close' src="./icon/blue-btn-right.png" alt="닫기 이미지" />
                  <input type="checkbox" onClick={handleChecked} id='15' ref={elem => (ref.current[13] = elem)}/>
                  <label htmlFor='15'>
                  <div className="img-wrapper"><img className='service' src="./icon/service (15).png" alt="" /></div>
                  </label>
                </div>
                <div className='img-box4' onClick={() => handleImgBox4Click(14)}>
                  <img className='close' src="./icon/blue-btn-right.png" alt="닫기 이미지" />
                  <input type="checkbox" onClick={handleChecked} id='16' ref={elem => (ref.current[14] = elem)}/>
                  <label htmlFor='16'>
                  <div className="img-wrapper"><img className='service' src="./icon/service (16).png" alt="" /></div>
                  </label>
                </div>
              </li>
              <li className="img-box-list">
                <div className='img-box4' onClick={() => handleImgBox4Click(15)}>
                  <img className='close' src="./icon/blue-btn-right.png" alt="닫기 이미지" />
                  <input type="checkbox" onClick={handleChecked} id='17' ref={elem => (ref.current[15] = elem)}/>
                  <label htmlFor='17'>
                  <div className="img-wrapper"><img className='service' src="./icon/service (17).png" alt="" /></div>
                  </label>
                </div>
                <div className='img-box4' onClick={() => handleImgBox4Click(16)}>
                  <img className='close' src="./icon/blue-btn-right.png" alt="닫기 이미지" />
                  <input type="checkbox" onClick={handleChecked} id='18' ref={elem => (ref.current[16] = elem)}/>
                  <label htmlFor='18'>
                  <div className="img-wrapper"><img className='service' src="./icon/service (18).png" alt="" /></div>
                  </label>
                </div>
                <div className='img-box4' onClick={() => handleImgBox4Click(17)}>
                  <img className='close' src="./icon/blue-btn-right.png" alt="닫기 이미지" />
                  <input type="checkbox" onClick={handleChecked} id='19' ref={elem => (ref.current[17] = elem)}/>
                  <label htmlFor='19'>
                  <div className="img-wrapper"><img className='service' src="./icon/service (19).png" alt="" /></div>
                  </label>
                </div>
                <div className='img-box4' onClick={() => handleImgBox4Click(18)}>
                  <img className='close' src="./icon/blue-btn-right.png" alt="닫기 이미지" />
                  <input type="checkbox" onClick={handleChecked} id='20' ref={elem => (ref.current[18] = elem)}/>
                  <label htmlFor='20'>
                  <div className="img-wrapper"><img className='service' src="./icon/service (20).png" alt="" /></div>
                  </label>
                </div>
                <div className='img-box4' onClick={() => handleImgBox4Click(19)}>
                  <img className='close' src="./icon/blue-btn-right.png" alt="닫기 이미지" />
                  <input type="checkbox" onClick={handleChecked} id='21' ref={elem => (ref.current[19] = elem)}/>
                  <label htmlFor='21'>
                    <div className="img-wrapper"><img className='service' src="./icon/service (21).png" alt="" /></div>
                  </label>
                </div>
              </li>
            </ul>

          </div>
        </div>
        <div className='img-btn-box'>
        <button className='btn btn2' onClick={cancling}>취소하기</button>
        <button className='btn btn1' onClick={() => setSaving(true)}>저장하기</button>
        </div>

        {/* 저장하기는 로컬스토리지로 보내서 하고. 빈 문자열을 만들어서 선택한 것들을 저장하게 하자. 
        그러면... 문제는 취소하기를 누르면 어떻게 사라지게 하냐 
        취소하기 누르면 클래스 추가되게 만들어야겠다 씨발 존나 어렵다.*/}

        {/* 취소하기 버튼 누르면 overlay, menu-box 클래스에 디스플레이 none 추가되게 하자
        그리고 다시 설정버튼 누르면 디스플레이 논은 사라지게 하자.*/}
      </div>
    </div>  
  )
}

export default Img