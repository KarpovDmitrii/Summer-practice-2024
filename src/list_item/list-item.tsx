import './list-item.scss'

import { useNavigate } from 'react-router-dom';
type ListItemProps = {
  id: string;
  title: string;
  description: string;
  Image: string;
  entity: string;
};
export const ListItem: React.FC<ListItemProps> = ({
  id,
  title,
  Image,
  description,
  entity,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (entity == 'characters') {
      navigate(`/characters/${id}`);
    }
    if (entity == 'comics') {
      navigate(`/comics/${id}`);
    }
  };
  return (
    <div onClick={handleClick} className="list__item">
      <img src={Image} alt="" className="list__img" />
      <p className="list__title">{title}</p>
      <p className="list__desciption">{description}</p>
    </div>
  );
};
