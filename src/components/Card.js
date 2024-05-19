import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { addFav, delFav} from '../store/fav';

const dustLevel = function(dustData) {
  switch (dustData.pm10Grade) {
    case '1':
      return {gradeColor: 'blue'};  //좋음
    case '2':
      return {gradeColor: 'green'}; //보통
    case '3':
      return {gradeColor: 'yellow'};  //나쁨
    case '4':
      return {gradeColor: 'yellow'};
    case '5':
      return {gradeColor: 'red'}; //매우나쁨
    default:
      return {gradeColor: 'gray'};  //알수없음
  }
}

function Card({dustData}) {
  const {fav} = useSelector((state) => state.fav);
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();

  const onClick = () => {
    setIsFav(!isFav);
    if (!isFav) {
      dispatch(
        addFav({
          fav: {
            sidoName: dustData.sidoName,
            stationName: dustData.stationName,
          }
        })
      );
    } else {
      dispatch(
        delFav({
          fav: {
            sidoName: dustData.sidoName,
            stationName: dustData.stationName,
          }
        })
      );
    }
  };

  useEffect(() => {
    fav.map((item) => {
      if (item.sidoName === dustData.sidoName && item.stationName === dustData.stationName) {
        setIsFav(true);
      }
    });
  }, []);

  return (
    <CardStyle grade={dustLevel(dustData).gradeColor}>
      <div className='wrapper'>
        <div className='location'>
          <h2>{dustData.sidoName} {dustData.stationName}</h2>
        </div>
        <div className='result'>
          <p>미세먼지 농도: {dustData.pm10Value}㎍/㎥</p>
          <p>초미세먼지 농도: {dustData.pm25Value}㎍/㎥</p>
        </div>
        <p className='data-time'>({dustData.dataTime} 기준)</p>
      </div>
      <div className='icon'></div>
      <div className='fav' onClick={onClick}>
        {isFav ? <img src='images/fav1.png' alt='' /> : <img src='images/fav2.png' alt='' />}
      </div>
    </CardStyle>
  );
}

export default Card;

const CardStyle = styled.div`
  width: 100%;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, .2);
  position: relative;
  display: flex;
  justify-content: center;
  background-color: var(--${({grade}) => grade}-light);
  color: var(--${({grade}) => grade});

  .wrapper {
    width: 58%;
		display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .location {
    display: flex;
    align-items: baseline;
    gap: 5px;

    h2 {
      padding: 8px;
      font-size: 25px;
      font-weight: 600;
    }
  }
  .result {
    padding: 20px 8px 10px;
    font-size: 16px;
    line-height: 1.8;
  }
  .data-time {
    padding: 8px;
    font-size: 14px;
    color: #999;
  }
  .icon {
    width: 40%;
    height: 180px;
    background-image: url('images/card_${({grade}) => grade}.png');
    background-repeat: no-repeat;
    background-position: center;
  }
  .fav {
    position: absolute;
    top: 10px;
    right: 20px;
    opacity: .5;
    cursor: pointer;
  }
`;
