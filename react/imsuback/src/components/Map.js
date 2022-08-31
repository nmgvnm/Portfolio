/* global kakao */
import React, {useEffect} from 'react';

export default function Map() {
  useEffect(() => {
    mapscript();
  }, []);
  const mapscript = () => {
    let container = document.getElementById("map");
    let options = {
      enter: new kakao.maps.LatLng(37.556766, 126.915226), 
      level: 3 
    };
    const map = new kakao.maps.Map(container, options);

    let markerPosition  = new kakao.maps.LatLng(37.556766, 126.915226); 
    // 마커를 생성
    let marker = new kakao.maps.Marker({
      position: markerPosition
  });
  marker.setMap(map);
  };
  return (
    <div>
      <div id="map" style={{width:"414px", height:"400px"}}></div>
    </div>
  );
};


