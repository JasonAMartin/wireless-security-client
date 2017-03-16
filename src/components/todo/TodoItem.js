
import React from 'react'
import {partial} from '../../lib/utils'

export const TodoItem = (props) => {
  const handleToggle = partial(props.handleToggle, props.bssid)
  const handleRemove = partial(props.handleRemove, props.bssid)
  return (
    <li>
      <span className='delete-item'><a href="#" onClick={handleRemove}>X</a></span>
      <input type="checkbox" onChange={handleToggle}
             checked={props.isComplete}/> {props.essid}
    </li>
  )
}

TodoItem.propTypes = {
  bssid: React.PropTypes.string.isRequired,
  isComplete: React.PropTypes.bool,
  essid: React.PropTypes.string.isRequired
}
