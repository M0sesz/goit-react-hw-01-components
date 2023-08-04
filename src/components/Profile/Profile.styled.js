import { styled } from 'styled-components';
import { StatList } from 'components/List/List.styled';
import { StatListItem } from 'components/ListItem/ListItem';
export const ProfileContainer = styled.div`
  width: 300px;
  height: 350px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 15px #ccc;
  background-color: #fff;
`;

export const ProfileDescr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
`;

export const ProfileStat = styled(StatList)`
  background-color: #eee;
  flex-grow: 1;
  /* li {
    flex: 33%;
    padding: 15px;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    gap: 4px;
    &:last-child {
      border-right: none;
    }
    .label {
      text-transform: capitalize;
      color: rgba(0, 0, 0, 0.7);
      font-size: 14px;
    }
    .info {
      font-weight: 500;
      font-size: 18px;
    }
  } */
`;

export const ProfileStatItem = styled(StatListItem)`
  flex: 33%;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  gap: 4px;
  &:last-child {
    border-right: none;
  }
  .label {
    text-transform: capitalize;
    color: rgba(0, 0, 0, 0.7);
    font-size: 14px;
  }
  .info {
    font-weight: 500;
    font-size: 18px;
  }
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-top: 10px;
`;

export const Paragraph = styled.p`
  font-size: 18px;
  color: #aaa;
  margin-top: 10px;
`;

export const ProfileImg = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;
