import React from 'react'

import { connect } from 'react-redux'

const DashboardTest = (props) => {

  console.log(props)

  return(
    <div className='dasboard_index'>
      <div className='alt_header'>
        <h3>Dashboard Test Page</h3>
        <p>{props.counter}</p>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    counter: state.devTest.counter,
    store: state.store.updates
  }
}

export default connect(mapStateToProps)(DashboardTest)