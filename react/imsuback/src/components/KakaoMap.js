/*  global kakao */
import React, { useEffect } from "react";

  const { kakao } = window;

function KakaoMap () {
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 3
  };
    let map = new kakao.maps.KakaoMap(container, options); //지도 생성 및 객체 리턴
  }, []);
  return (
    <div>
      <div id="map" style={{width:'414px', hight: '400px'}}></div>
    </div>
  );
};

export default KakaoMap;