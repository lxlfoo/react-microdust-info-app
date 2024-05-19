import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavsData } from '../store/dust';
import Card from '../components/Card';
import Loading from '../components/Loading';
import { RouterStyle } from '../style/RouterStyle';

function FavArea() {
  const {loading, entities} = useSelector((state) => state.dust);
  const {favsData} = entities;
  const {fav} = useSelector((state) => state.fav);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavsData(fav));
  }, [fav]);

  if (loading) return <Loading />
  return (
    <RouterStyle>
      {favsData.length > 0 ? (
        favsData.map((city, idx) => <Card key={idx} dustData={city} />)
      ) : (
        <p className='msg'>즐겨찾기가 없습니다.</p>
      )}
    </RouterStyle>
  );
}

export default FavArea;
