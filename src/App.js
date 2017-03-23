import React from 'react'
import { Match } from 'react-router'
import { Provider } from 'react-redux'
import store from './lib/store'
import AsyncRoute from './AsyncRoute'
import SiteHeader from './components/SiteHeader'
import SiteFooter from './components/SiteFooter'

if (global) {
  global.System = { import () {} }
}

const App = () => {
  return (
    <div>
      <SiteHeader />
      <Provider store={store}>
        <div className='app'>
          <Match
            exactly
            pattern="/ui/stats"
            component={(props) => <AsyncRoute props={props} loadingPromise={System.import('./containers/Stats')}/>}
          />
          <Match
            exactly
            pattern='/'
            component={(props) => <AsyncRoute props={props} loadingPromise={System.import('./containers/Home')} />}
          />
          <Match
            pattern='/ui/essid/:id'
            component={(props) => {
              const id = props.params.id
              return <AsyncRoute
                props={Object.assign({id: id}, props)}
                loadingPromise={System.import('./containers/APDetails')}
              />
            }}
          />
        </div>
      </Provider>
      <SiteFooter/>
    </div>
  )
}

export default App
