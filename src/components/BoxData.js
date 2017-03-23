import React, { PropTypes } from 'react'
import Styles from './styles/BoxData.css';

const BoxData = ({ label, data, boxStyle }) => (
  <div className={Styles.container + ' ' + boxStyle}>
    <div className={Styles.content}>
      <div className={Styles.label}>{label}</div>
      <div className={Styles.data}>{data}</div>
    </div>
  </div>
);

BoxData.PropTypes = {
  data: PropTypes.string,
  label: PropTypes.string
}

export default BoxData
