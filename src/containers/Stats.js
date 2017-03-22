import React from 'react'
import { connect } from 'react-redux'
import { getApiData } from '../actions/actionCreators'
import Header from '../components/Header'
import { ADD_API_DATA } from '../actions/actions'

const { shape, array, func } = React.PropTypes

const Stats = React.createClass({
  propTypes: {
    apiData: shape({
      results: array
    }),
    dispatch: func
  },
  componentDidMount () {
      this.props.dispatch(getApiData('totals', ADD_API_DATA))
  },
  render () {
    let display;
    if (Object.keys(this.props.apiData).length > 0) {
      display = `3 Got data: ${this.props.apiData.probe_totals}`
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
  const apiData = state.apiData ? state.apiData : {}
  return {
    apiData
  }
}

export default connect(mapStateToProps)(Stats)
