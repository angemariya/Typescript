import { createSlice } from "../connect";

export interface FriendsStateItem {
    id: number;
    name: string;
    age: number;
    isFriend: boolean;
    isPending?: boolean; 
}

export type FriendGeneralState = {
    FriendsArray: FriendsStateItem[]
}

let fail = false;

export const friendsInitialState: FriendGeneralState = {
    FriendsArray: [
        {
            id: Math.random(),
            name: "Sarah Connor",
            age: 30,
            isFriend: true
        },
        {
            id: Math.random(),
            name: "John Connor",
            age: 28,
            isFriend: false
        },
        {
            id: Math.random(),
            name: "Terminator",
            age: 120,
            isFriend: false
        },
        {
            id: Math.random(),
            name: "Thomas Anderson",
            age: 35,
            isFriend: false
        }
    ]
}

const newStateData = () =>
    new Promise<FriendsStateItem>((resolve, reject) => {
        setTimeout(() => {
            if (fail) {
                return reject("ERROR")
            }
            resolve(
                {
                id: Math.random(),
                name: "Connor",
                age: 31,
                isFriend: true
            }
        )
    }, 1000)
})


export const friendsSlice = createSlice(
    "Friends",
    friendsInitialState,
    {
        deleteFriend: {
            reducer: (state, action) => {
                const target = state.FriendsArray.find(el => el.id === action.payload.id);
                target && (target.isFriend = false)
                return { FriendsArray: [...state.FriendsArray]}
            },
            prepare: (payload: FriendsStateItem) => payload
        },
        addFriend: {
            reducer: (state, action) => {
                const target = state.FriendsArray.find(el => el.id === action.payload.id)
                target && (target.isFriend = true)
                return {FriendsArray: [...state.FriendsArray]}
            },
            prepare: (payload: FriendsStateItem) => payload
        }, 
        reload: {
            reducer: (state, action) => {
                console.log();
                
                return state;
            },
            prepare: async () => {
                friendsSlice.actions.reload_Pending();
                try {
                    const newData = await newStateData();
                    friendsSlice.actions.reload_Success(newData)  
                } catch (error) {
                    friendsSlice.actions.reload_Fail(error as string)
                }    
            }
        },
        reload_Success: {
            reducer: (state, action) => {
                return {FriendsArray: [...state.FriendsArray, action.payload]}
            },
            prepare: (payload: FriendsStateItem) => payload
        }, 
        reload_Fail: {
            reducer: (state, action) => ({...state, isPending: false}),
            prepare: (payload: string) => console.log(payload)
        },
        reload_Pending: {
            reducer: (state, action) => ({...state, isPending: true}),
            prepare: () => {}
        }
    }
)