import React, { PropTypes } from 'react'
import Styles from './styles/SignalRating.css';

const determineRating = (signal, signalRating) => {
  const signalInt = Number(signal)
  console.log('sig ', signalInt, signalRating, signalInt >= signalRating);
  return (signalInt >= signalRating) ? 'fa-star ' + Styles.filledstar : 'fa-star-o'
}

const signalRating = [-90, -80, -70, -60, -50]


const SignalRating = ({ signal }) => (
  <div className={Styles.signalrating}>
    <div className={Styles.ratinglabel}>signal rating</div>
    <div className={Styles.ratings}>
      <span className={"fa " + determineRating(signal, signalRating[0])}/>
      <span className={"fa " + determineRating(signal, signalRating[1])}/>
      <span className={"fa " + determineRating(signal, signalRating[2])}/>
      <span className={"fa " + determineRating(signal, signalRating[3])}/>
      <span className={"fa " + determineRating(signal, signalRating[4])}/>
    </div>
  </div>
);

SignalRating.PropTypes = {
  signal: PropTypes.number
}

export default SignalRating
