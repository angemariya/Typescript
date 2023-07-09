import {  adsInitialState } from "./ads.state";
import {  connect } from "../connect";
import { initialState } from "../store";
import styles from './Ads.module.scss'

const Ads = (props: typeof adsInitialState) => (
  <section className={styles.ads}>
    {props.titlesArray.map((el,i) =>
      <div key={i} className={styles.element}>
        <div>{el}</div>
        <img className={styles.img} src={props.photosArray[i]} ></img>
      </div>)}
  </section>
);

export const AdsContainer = connect((state: typeof initialState)=>state.Ads, Ads);
