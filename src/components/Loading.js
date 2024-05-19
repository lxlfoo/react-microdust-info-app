import styled from 'styled-components';

function Loading() {
  return (
    <LoadingStyle>
      <img className='icon' src='images/loading.gif' alt='' />
    </LoadingStyle>
  );
}

export default Loading;

const LoadingStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    width: 100px;
    height: 100px;
  }
`;
