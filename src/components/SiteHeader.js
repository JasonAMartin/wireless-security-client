import React from 'react'
import Styles from './styles/SiteHeader.css';
import { history, propTypes } from 'react-router'
import SiteRoutes from '../lib/routes'

class SiteHeader extends React.Component {
  render() {
    const { push } = this.context.history;
    return (
      <div className={Styles.container}>
        <div className={Styles.content}>
          <div onClick={() => push(SiteRoutes.home)} className={Styles.logo + " fa fa-superpowers fa-5"} aria-hidden="true"/>
          <div onClick={() => push(SiteRoutes.home)}  className={Styles.title}>Project Lantern</div>
          <div className={Styles.navigation}>
            <ul className={Styles.navlist}>
              <li onClick={() => push(SiteRoutes.stats)} className={Styles.navitem}>Stats</li>
              <li onClick={() => push(SiteRoutes.accesspoints)} className={Styles.navitem}>Access Points</li>
              <li onClick={() => push(SiteRoutes.clients)} className={Styles.navitem}>Clients</li>
              <li onClick={() => push(SiteRoutes.probes)} className={Styles.navitem}>Probes</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

SiteHeader.contextTypes = {
  history: propTypes.historyContext
}

export default SiteHeader
