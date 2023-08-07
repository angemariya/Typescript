import { useSelector } from "../connect";
import { initialState } from "../store";
import { friendsSlice } from "./Friends.state";
import styles from './Friends.module.scss';


export const Friends = () => {
    const data = useSelector((state: typeof initialState) => state.Friends)

    return (
        <div className={styles.container}>
            <span className={styles.header}>My friends:</span>
            {
                (data.FriendsArray.filter(el => el.isFriend).length !== 0) ?

                    (data.FriendsArray.filter(el => el.isFriend).map(el =>
                        <div className={styles.user} key={el.id}>
                            <p>{el.name}, {el.age}</p>
                            <button onClick={() => friendsSlice.actions.deleteFriend(el)}>Delete from friends</button>
                        </div>
                    ))
                    :
                    (<p>You don't have any friends</p>)
            }
            {
                (data.FriendsArray.filter(el => !el.isFriend).length !== 0) ? 
                    (
                        <>
                            <span className={styles.header}>May be you also know:</span>  
                            {data.FriendsArray
                                .filter((el) => !el.isFriend)
                                .map(el =>
                                    <div className={styles.user} key={el.id}>
                                        <p>{el.name}, {el.age}</p>
                                        <button onClick={() => friendsSlice.actions.addFriend(el)}>Add to friends</button>
                                    </div>
                                )}
                        </>      
                    )
                    
                    : null}
            <button onClick={()=>friendsSlice.actions.reload()}>Reload</button>
        </div>
        
    )
}
export const FriendsContainer = Friends;
/*
export const FriendsContainer = connect((state: typeof initialState) => state.Friends, Friends);

*/