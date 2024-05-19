import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import Navigation from './Navigation';

function Layout() {
  return (
    <LayoutStyle>
      <Header />
      <Outlet />
      <Navigation />
    </LayoutStyle>
  );
}

export default Layout;

const LayoutStyle = styled.div`
  width: 560px;
  height: 1080px;
  border: 1px solid #ccc;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
`;
