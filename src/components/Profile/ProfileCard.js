import PropTypes from 'prop-types';

import {
  ProfileContainer,
  ProfileDescr,
  Name,
  ProfileImg,
  Paragraph,
  ProfileStat,
  ProfileStatItem,
} from './Profile.styled';

export const ProfileCard = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileContainer>
      <ProfileDescr>
        <ProfileImg src={avatar} alt={username} />
        <Name>{username}</Name>
        <Paragraph>{tag}</Paragraph>
        <p>{location}</p>
      </ProfileDescr>
      <ProfileStat>
        {Object.entries(stats).map(([label, info], index) => {
          return <ProfileStatItem key={index} label={label} info={info} />;
        })}
      </ProfileStat>
    </ProfileContainer>
  );
};

ProfileCard.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
