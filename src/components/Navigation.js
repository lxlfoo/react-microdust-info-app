import React from 'react';
import { NavLink } from 'react-router-dom';
import { MyLocationSVGIcon, StarSVGIcon, ViewHeadlineSVGIcon } from 'react-md';
import styled from 'styled-components';

function Navigation() {
  return(
    <NavigationStyle>
      <NavLink to='/' className={({isActive}) => (isActive ? 'active' : '')}>
        <span>
          <MyLocationSVGIcon /> 내지역보기
        </span>
      </NavLink>
      <NavLink to='/all' className={({isActive}) => (isActive ? 'active' : '')}>
        <span>
          <ViewHeadlineSVGIcon /> 전체보기
        </span>
      </NavLink>
      <NavLink to='/fav' className={({isActive}) => (isActive ? 'active' : '')}>
        <span>
          <StarSVGIcon /> 즐겨찾기
        </span>
      </NavLink>
    </NavigationStyle>
  );
}

export default React.memo(Navigation);

const NavigationStyle = styled.div`
  width: 100%;
  height: 65px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, .1);
  z-index: 1;
  display: flex;
  flex-shrink: 0;
  background-color: #eee;

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    transition: all .2s;

    &.active {
      height: 70px;
      border-radius: 0 0 10px 10px;
      box-shadow: 0px 3px 10px rgba(0, 0, 0, .1);
      background-color: #fff;
      font-weight: 700;
      transform: translateY(-2px);
    }

    & + a {
      border-left: 1px solid var(--gray-light);
    }

    &:hover {
      box-shadow: 0px 3px 10px rgba(0, 0, 0, .1);
    }

    svg {
      width: 28px;
      height: 28px;
      padding: 0 0 2px;
      vertical-align: middle;
    }
  }
`;
