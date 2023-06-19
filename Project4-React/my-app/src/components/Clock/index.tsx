import { useState, useEffect } from "react"
import styles from "./styles.module.scss";

export const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect( ()=> {
        const interval = setInterval(()=> {
            setTime(new Date())
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const timeString = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

    return (
        <div>
            <h3 className={styles.clock}>{timeString}</h3>
        </div>
    )
}