import React from 'react'
import { connect } from 'react-redux'
import { getApiData } from '../actions/actionCreators'
import Header from '../components/Header'
import { SET_ESSID } from '../actions/actions'

const { shape, array, func } = React.PropTypes

const APDetails = React.createClass({
  propTypes: {
    essid: shape({
      results: array
    }),
    dispatch: func
  },
  componentDidMount () {
    this.props.dispatch(getApiData('ap/essid/' + this.props.id, SET_ESSID))
  },
  render () {
    let display;
    if (Object.keys(this.props.essid).length > 0) {
      display = `34 Got data: ${this.props.essid.results[0].bssid}`
    } else {
      display = "2No info. Loading .........................."
    }

    return (
      <div className='details'>
        <Header />
        { display }
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    essid: state.essid
  }
}

export default connect(mapStateToProps)(APDetails)
