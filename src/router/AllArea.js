import { useSelector } from 'react-redux';
import Card from '../components/Card';
import Loading from '../components/Loading';
import { RouterStyle } from '../style/RouterStyle';

function AllArea() {
  const {loading, error, entities} = useSelector((state) => state.dust);
  const {areasData} = entities;

  if (loading) return <Loading />
  if (error) return (
    <RouterStyle>
      <p className='msg'>데이터를 가져올 수 없습니다.<br /><br />나중에 다시 시도해 주세요.</p>
    </RouterStyle>
  );
  return (
    <RouterStyle>
      {areasData.map((city, idx) => (
        <Card key={idx} dustData={city} />
      ))}
    </RouterStyle>
  );
}

export default AllArea;
