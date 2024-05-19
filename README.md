# REACT APP: 미세먼지 정보

공공데이터 (한국환경공단 에어코리아 대기오염정보) API를 사용하여 미세먼지 정보를 가져옵니다.<br />
[DEMO](https://lxlfoo-microdust.netlify.app/)
<br />

## 사용모듈
react-router-dom<br />
styled-components<br />
react-redux<br />
redux-toolkit<br />
react-md<br />
axios
<br />

## 화면설명
SPA(Single Page Application)로 같은 화면 안에서 내지역보기, 전체보기, 즐겨찾기 탭을 선택할 수 있습니다.
<br />

### <내지역보기>
선택콤보에서 나의 세부 지역을 선택합니다.
<p align="left">
	<img width="425" alt="1" src="https://github.com/lxlfoo/react-microdust-info-app/assets/162573031/c50eec1e-83bb-40f3-ae4d-24ee81983d9a" />
</p>

### <전체보기>
시도단위 지역 전체 목록을 보여줍니다.<br />
선택콤보에서 다른 시도단위 지역을 선택할 수 있습니다.<br />
별버튼을 클릭하여 즐겨찾기에 추가하거나 해제할 수 있습니다.
<p align="left">
	<img width="425" alt="2" src="https://github.com/lxlfoo/react-microdust-info-app/assets/162573031/a21d1d1b-5ad6-4f74-967b-d590bb394032" />
</p>

### <즐겨찾기>
추가한 즐겨찾기 목록을 보여줍니다.<br />
즐겨찾기 탭에서도 즐겨찾기를 해제할 수 있습니다.
<p align="left">
	<img width="425" alt="3" src="https://github.com/lxlfoo/react-microdust-info-app/assets/162573031/b7af9ebc-e643-4a49-abad-8b43358ec335" />
</p>
