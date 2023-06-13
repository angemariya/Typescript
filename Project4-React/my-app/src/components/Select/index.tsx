import { BaseSyntheticEvent, useState } from "react";
import styles from "./styles.module.scss"

export const Select = (props: {
    onFilterCompleted: ()=>void, 
    onFilterActive: ()=>void,
    onShowAll: ()=>void,
}) => {
    const [filter, setFilter] = useState('');

    if (filter === 'all') {
        props.onShowAll()
    } 
    if (filter === 'completed') {
        props.onFilterCompleted()
    }
    if (filter === 'active') {
        props.onFilterActive()
    }

    const handleSelect = (event: BaseSyntheticEvent) => {
        setFilter(event.target.value)

    }
 
  return (
    <>
      <label htmlFor='filter' className={styles.label}>Choose filter: </label>
      <select className={styles.select} id="filter" value={filter} onChange={handleSelect}>
        <option value='all'>All</option>
        <option value='completed'>Completed</option>
        <option value='active'>Active</option>
      </select>
    </>
  );
};
