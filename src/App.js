import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import MyArea from './router/MyArea';
import AllArea from './router/AllArea';
import FavArea from './router/FavArea';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<MyArea />} />
        <Route path='all' element={<AllArea />} />
        <Route path='fav' element={<FavArea />} />
      </Route>
    </Routes>
  );
}

export default App;
