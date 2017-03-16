/* eslint react/prop-types:0 */
import React, { Component } from 'react'

class PageHeader extends Component {
  render () {
    const style = { color: this.props.color }
    return (
      <div>
        <h1 style={style}>
          { this.props.title }
        </h1>
      </div>
    )
  }
}

export default PageHeader
