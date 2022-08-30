const { kakao } = window;

export default function kakaoMapScript() {
  var container = document.getElementById('map');
  var options = {
    enter: new kakao.maps.LatLng(37.556766, 126.915226), 
    level: 3 
  };
  var map = new kakao.maps.Map(container, options);

  var markerPosition  = new kakao.maps.LatLng(37.556766, 126.915226); 
    var marker = new kakao.maps.Marker({
      position: markerPosition
  });
  marker.setMap(map);

  var iwContent = '<div style="padding:5px;"> 임수백컴퍼니</div>',
  iwPosition = new kakao.maps.LatLng(37.556766, 126.915226); 

  var infowindow = new kakao.maps.InfoWindow({
    position : iwPosition, 
    content : iwContent 
  });
  infowindow.open(map, marker); 
};