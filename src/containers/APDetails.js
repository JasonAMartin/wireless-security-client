import React from 'react'
import { connect } from 'react-redux'
import { getApiData } from '../actions/actionCreators'
import Header from '../components/Header'
import { SET_ESSID } from '../actions/actions'
import Loader from '../components/Loader'
import ESSID from '../components/ESSID'

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
      display = <ESSID data={this.props.essid.results[0]}/>
    } else {
      display = <Loader/>
    }

    return (
      <div className='details'>
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
