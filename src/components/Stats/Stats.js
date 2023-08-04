import { StatisticsSection, StatisticsLi } from './Stats.styled';
import PropTypes from 'prop-types';
export const Stats = ({ data }) => {
  return (
    <StatisticsSection>
      <h2>Upload stats</h2>
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
