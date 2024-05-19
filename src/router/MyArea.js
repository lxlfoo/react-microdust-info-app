import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '../components/Card';
import Loading from '../components/Loading';
import { RouterStyle } from '../style/RouterStyle';

function MyArea() {
  const {loading, error, entities} = useSelector((state) => state.dust);
  const {areasData} = entities;
  const {myArea} = useSelector((state) => state.fav);
  const [savedMyArea, setSavedMyArea] = useState();

  useEffect(() => {
    setSavedMyArea(areasData.find((city) => city.stationName === myArea));
  }, [myArea, areasData]);

  if (loading) return <Loading />
  if (error) return (
    <RouterStyle>
      <p className='msg'>데이터를 가져올 수 없습니다.<br /><br />나중에 다시 시도해 주세요.</p>
    </RouterStyle>
  );
  return (
    <RouterStyle>
      {savedMyArea ? (
        <Card dustData={savedMyArea} />
      ) : (
        <p className='msg'>지역을 선택하세요.</p>
      )}
    </RouterStyle>
  );
}

export default MyArea;
