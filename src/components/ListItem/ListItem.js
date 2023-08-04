import { ListItem } from './ListItem.styled';

export const StatListItem = ({ id, label, info, className }) => {
  return (
    <ListItem key={id} className={className}>
      <span className="label">{label}</span>
      <span className="info">{info}</span>
    </ListItem>
  );
};
