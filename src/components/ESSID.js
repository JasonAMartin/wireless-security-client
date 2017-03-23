import React, { PropTypes } from 'react'
import Styles from './styles/ESSID.css'
import BoxData from './BoxData'
import SignalRating from './SignalRating'

const wasHidden = (was_hidden, essid) => {
  let hiddenText
  switch(was_hidden) {
    case 0:
      hiddenText = "NO"
      break;
    case 1:
      hiddenText = "DISCOVERED"
      break;
    default: hiddenText = 'NO'
  }
  return (essid !== 'hidden') ? hiddenText : 'CLOAKED!'
}

const ESSID = ({ data }) => (
  <div className={Styles.container}>
    <div className={Styles.content}>
      <div className={Styles.header}>
        <div className={Styles.icon + " fa fa-wifi"}/>
        <div className={Styles.essidlabel}>ESSID: </div>
        <div className={Styles.essid}>{data.essid}</div>
        <div className={Styles.channellabel}>CHANNEL</div>
        <div className={Styles.channel}>{data.channel}</div>
        <div className={Styles.signalrating}><SignalRating signal={data.max_signal_dbm}/></div>
      </div>
      <div className={Styles.boxcontainer}>
        <BoxData label="Encryption" data={data.encryption} boxStyle={Styles.boxone}/>
        <BoxData label="Manufacturer" data={data.manufacturer} boxStyle={Styles.boxtwo}/>
        <BoxData label="WPS" data={(data.wps !== '') ? data.wps : 'N/A'} boxStyle={Styles.boxthree}/>
        <BoxData label="Cloaking" data={wasHidden(data.was_hidden, data.essid)} boxStyle={Styles.boxfour}/>
      </div>
      <div className={Styles.gpscontainer}>
        <div className={Styles.gpslabel}>GPS DATA</div>
        <div className={Styles.gpssection}>
          <div className={Styles.gpslat}><strong>Latitude:</strong> {data.gps_peak_lat}</div>
          <div className={Styles.gpslong}><strong>Longitude:</strong> {data.gps_peak_long}</div>
          <div className={Styles.gpsalt}><strong>Altitude:</strong> {data.gps_peak_alt}</div>
        </div>
      </div>
      <div className={Styles.misccontainer}>
        <div className={Styles.misclabel}>MISC DATA</div>
        <div className={Styles.miscsection}>
          <div className={Styles.bssid}><strong>BSSID:</strong> {data.bssid}</div>
          <div className={Styles.networktype}><strong>Network Type:</strong> {data.network_type}</div>
          <div className={Styles.wpaversion}><strong>WPA Version:</strong> {data.wpa_version}</div>
          <div className={Styles.wpsmanufacturer}><strong>WPS Manufacturer:</strong> {data.wps_manufacturer}</div>
          <div className={Styles.devicename}><strong>Device Name:</strong> {data.device_name}</div>
          <div className={Styles.modelname}><strong>Model Name:</strong> {data.model_name}</div>
          <div className={Styles.modelnumber}><strong>Model Number:</strong> {data.model_number}</div>
        </div>
      </div>
    </div>
  </div>
);

ESSID.PropTypes = {
  data: PropTypes.object
}

export default ESSID
