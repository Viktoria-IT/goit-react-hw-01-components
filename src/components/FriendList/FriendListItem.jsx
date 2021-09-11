import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';
const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <>
            <span className={isOnline? 'status status-true': 'status status-false'}></span>
            <img src={avatar} alt={name} width="48" className={s.img}/>
            <p className={s.title}>{name}</p>
        </>
    )
}
FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
};
export default FriendListItem;