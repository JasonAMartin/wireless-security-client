import React from 'react'
import Styles from './styles/Loader.css';

const Loader = () => (
  <div className={Styles.container}>
    <div className={Styles.content}>
      <div className = {Styles.loader + " fa fa-spinner fa-pulse fa-3x fa-fw"} />
      <div className = {Styles.loadertext}>Loading ...</div>
    </div>
  </div>
);

export default Loader
