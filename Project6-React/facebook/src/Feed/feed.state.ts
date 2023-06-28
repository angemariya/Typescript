import { dispatch } from "../connect";

export interface FeedStateItem {
    username: string;
    date: number;
    text: string
}

export let feedState: FeedStateItem[] = [
    {
    username: "Vasya Pupkin",
    date: Date.now(),
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque praesentium ab aut consequatur facere quaerat eveniet provident. Tenetur quibusdam facere nam! Saepe facere distinctio repellat quo cumque officia voluptatum dolore!"
    }
]

//add reducer

setTimeout(() => dispatch({
    type: "addFeed",
    payload: {
        username: "Klava Petrova",
        date: Date.now(),
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum repellendus excepturi ab officia voluptatibus reiciendis saepe reprehenderit quos est quia. Inventore necessitatibus error est facere explicabo iusto nisi quia ut?"
    }}), 1000)

