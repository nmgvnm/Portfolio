/* global kakao */
import React, {useEffect} from 'react';
import kakaoMapScript from '../assets/script/kakaoMapScript';


const Map = () => {

  useEffect(() => {
    kakaoMapScript();
  });
  return (
    <div>
      <div id="map" style={{width:"414px", height:"400px"}}></div>
    </div>
  );
};

export default Map;