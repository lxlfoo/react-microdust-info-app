import styled from 'styled-components';

export const RouterStyle = styled.div`
  height: inherit;
  padding: 10px 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 25px;
    background-color: #000;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  .msg {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
