import React from 'react'
import Styles from './styles/SiteFooter.css';

const SiteFooter = () => (
  <div className={Styles.container}>
    <div className={Styles.content}>
      <p>&copy; 2017 Wireless-Security.org, FrozenRelic.com. All Rights Reserved.</p>
      <p>This site is intended for entertainment purposes only. Data collected personally via my own custom-built wireless security monitoring system.</p>
      <p>For other software devs, tech involved in this site (still a WiP): </p>
      <p>Django, React, Python, JavaScript, Webpack, Babel, Standard, Stylelint, Redux, PostCSS, Django Rest Framework, NPM + Yarn.</p>
    </div>
  </div>
);

export default SiteFooter
