import styles from './Card.module.scss';
import { CardDefinition } from '../../card-types';

type CardProps = CardDefinition & {} // & - передаем действия игрока

export const Card = (props: CardProps) => {

    return (

        <div className={styles[props.type]}>
            {props.type === 'delivery' && (
                props.resources.map(el => <div className={styles[el]}></div>)
            )}
            {props.type === 'engineering' && (
                <div className={styles[props.connection]}>
                    <div className={styles.entryPoint}>
                        {props.entryPoint && (
                            <div className={styles[props.entryPoint]}></div>
                        )}
                    </div>
                    <div className={styles.exitPoint}>
                        {props.exitPoint.map(el =>
                            <div className={styles[el]}></div>)}
                        {props.points && <div>{props.points}</div>}
                    </div>
                </div>
            )}
            {props.type === 'military' && (
                <div className={styles[props.weapon]}></div>
            )}
            {props.type === 'terraforming' && (
                <>
                    <div>
                        {/*props.resources.map(el => <div className={styles[el]}></div>)*/}
                        {props.resources.map(el => <Resource type={el} />)}
                        
                    </div>
                    <div>
                        {props.points}
                    </div>
                </>

            )}
        </div>
    )
}