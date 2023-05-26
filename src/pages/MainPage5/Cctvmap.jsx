import './Cctvmap.css';
import { useEffect } from 'react';

function Cctvmap() {
  
  //스크립트 파일 읽어오기
  const new_script = src => { 
    return new Promise((resolve, reject) => { 
      const script = document.createElement('script'); 
      script.src = src; 
      script.addEventListener('load', () => { 
        resolve(); 
      }); 
      script.addEventListener('error', e => { 
        reject(e); 
      }); 
      document.head.appendChild(script); 
    }); 
  };
  
  useEffect(() => { 
    //카카오맵 스크립트 읽어오기
    const my_script = new_script('https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=4b7cf0853d80e9d44cd4cd9f644bb001');
    
    //스크립트 읽기 완료 후 카카오맵 설정
    my_script.then(() => { 
      const kakao = window['kakao']; 
      kakao.maps.load(() => {  
        const mapContainer = document.getElementById('map'); 
        const options = {  
          center: new kakao.maps.LatLng(36.350479150108896, 127.38379849860448), //좌표설정
          level: 3 
        }; 
        const map = new kakao.maps.Map(mapContainer, options); //맵생성
        //마커설정
        const markerPosition = new kakao.maps.LatLng(36.350479150108896, 127.38379849860448); 
        const marker = new kakao.maps.Marker({ 
          position: markerPosition
        }); 
        marker.setMap(map); 


        // ----------------------------------

        

      });   
    }); 
  }, []);

  return (
    <div className="App">
      <div id="map" className="map"/>
    </div>
  );
}

export default Cctvmap;
