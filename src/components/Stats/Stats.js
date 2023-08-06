import { StatisticsSection, StatisticsLi, Title } from './Stats.styled';
import PropTypes from 'prop-types';
export const Stats = ({ data, title }) => {
  return (
    <StatisticsSection>
      {title && <Title>{title}</Title>}
      <ul>
        {data.map(({ id, label, percentage }) => {
          return (
            <StatisticsLi key={id} label={label} info={percentage + '%'} />
          );
        })}
      </ul>
    </StatisticsSection>
  );
};
Stats.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
