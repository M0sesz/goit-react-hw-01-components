import { styled } from 'styled-components';

export const FriendItem = styled.li`
  width: 100%;
  box-shadow: 0px 2px 15px #ccc;
  background-color: #fff;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 15px;
  img {
    width: 60px;
    height: 100%;
  }
  span.status {
    width: 20px;
    height: 20px;
    background-color: ${({ $isonline }) =>
      $isonline === true ? 'lightgreen' : 'tomato'};
    border-radius: 50%;
  }
  p.name {
    font-weight: 600;
    font-size: 24px;
  }
`;
