import {  adsInitialState } from "./ads.state";
import {  connect } from "../connect";
import { initialState } from "../store";
import styles from './Ads.module.scss'

const Ads = (props: typeof adsInitialState) => (
  <section className={styles.ads}>
    {props.titlesArray.map(el =>
      <div className={styles.element}>{el}</div>)}
  </section>
);

export const AdsContainer = connect((state: typeof initialState)=>state.Ads, Ads);

