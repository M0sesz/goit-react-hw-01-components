import PropTypes from 'prop-types';

import { FriendUl } from './Friends.styled';
import { FriendListItem } from './FriendItem';

export const Friend = ({ friends }) => {
  return (
    <FriendUl>
      {friends.map(friend => {
        return <FriendListItem key={friend.id} {...friend} />;
      })}
    </FriendUl>
  );
};

Friend.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
