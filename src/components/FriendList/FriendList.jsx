import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import s from './FriendList.module.css';


const FriendList = ({ friends }) => {
    return (
        <ul className={s.list}>
            {friends.map(friend =>
                <li key={friend.id} className={s.item}>
                    <FriendListItem
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                    id={friend.id}/></li>
                )
            }
        </ul>)
}
FriendList.propTypes = {
    friends: PropTypes.array
};
export default FriendList;




// import css from './FriendList.module.css'
// import PropTypes from 'prop-types'

// function FriendList({ friends }) {
//     return <ul className={css.friendList}>
//         {friends.map(friend => <li className={css.item} key={friend.id}>
//             <span className={friend.isOnline ? css.online : css.offline}>{friend.isOnline}</span>
//                 <img className={css.avatar} src={friend.avatar} alt={friend.name} width="48" />
//                 <p className={css.name}>{friend.name}</p>
//             </li>
//         )}
//     </ul>;
// }

// FriendList.propTypes = {
//     friends: PropTypes.arrayOf(PropTypes.exact({
//         avatar: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         isOnline: PropTypes.bool.isRequired,
//         id: PropTypes.number.isRequired
//         })).isRequired
// }

// export default FriendList