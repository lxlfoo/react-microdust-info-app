import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getDustData } from '../store/dust';
import { changeAllCity, changeMyArea } from '../store/fav';

const cityArr = [
  '서울', '부산', '대구', '인천', '광주', '대전', '울산', '경기', '강원', '충북',
  '충남', '전북', '전남', '경북', '경남', '제주', '세종'
];

function Header() {
  const location = useLocation();
  const dispatch = useDispatch();

  const {entities} = useSelector((state) => state.dust);
  const {areasData} = entities;
  const {allCity, myCity, myArea} = useSelector((state) => state.fav);

  const [allCityOpt, setAllCityOpt] = useState(allCity);
  const [myCityOpt, setMyCityOpt] = useState(myCity);
  const [myAreaOpt, setMyAreaOpt] = useState(myArea);
  const [allArea, setAllArea] = useState();

  const selectAllCity = (e) => {
    const value = e.target.value;
    setAllCityOpt(value);
    dispatch(getDustData(value));
    dispatch(changeAllCity({city: value}));
  };

  const selectMyCity = (e) => {
    const value = e.target.value;
    setMyCityOpt(value);
    dispatch(getDustData(value));
  };

   const selectMyArea = (e) => {
    setMyAreaOpt(e.target.value);
    dispatch(changeMyArea({myCity: myCityOpt, myArea: e.target.value}));
  };

  const loadData = () => {
    if (location.pathname === '/') {
      dispatch(getDustData(myCity));
    } else if (location.pathname === '/all') {
      dispatch(getDustData(allCity));
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    loadData();
  }, [location]);

  useEffect(() => {
    setAllArea(areasData.map((city) => city.stationName));
  }, [areasData]);

  return (
    <HeaderStyle>
      <div className='title'>
        <div className='logo'>
          <img src='images/logo.png' alt='미세먼지 정보' />
        </div>
        <h1>미세먼지 정보</h1>
      </div>
      <div className='options'>
        {location.pathname === '/all' && (
          <SelectStyle onChange={selectAllCity} value={allCityOpt}>
            {cityArr.map((city, idx) => (
              <option key={idx} value={city}>
                {city}
              </option>
            ))}
          </SelectStyle>
        )}

        {location.pathname === '/' && (
          <div>
            <SelectStyle onChange={selectMyCity} value={myCityOpt}>
              {cityArr.map((city, idx) => (
                <option key={idx} value={city}>
                  {city}
                </option>
              ))}
            </SelectStyle>
            <SelectStyle onChange={selectMyArea} value={myAreaOpt}>
              <option value='none'>선택</option>
              {allArea && allArea.map((area, idx) => (
                <option key={idx} value={area}>
                  {area}
                </option>
              ))}
            </SelectStyle>
          </div>
        )}
      </div>
    </HeaderStyle>
  );
}

export default Header;

const HeaderStyle = styled.div`
  width: 100%;
  height: 65px;
  padding: 0 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, .1);
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  background-color: #eee;

  .title {
    display: flex;
    align-items: center;

    .logo {
      width: 38px;
      height: 38px;

      img {
        width: 100%;
        display: block;
      }
    }

    h1 {
      padding: 0 10px;
      font-size: 20px;
      font-weight: 700;
      color: #444;
    }
  }
`;

const SelectStyle = styled.select`
  width: 100px;
  margin: 0 2px;
  border: 1px solid #ccc;
  padding: 2px 4px;
  outline: none;
`;
