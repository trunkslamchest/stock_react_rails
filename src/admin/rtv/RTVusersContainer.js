import React from 'react'

import RTVusersList from './RTVusersList'

import trafficFunctions from '../../utility/trafficFunctions'

import './RTV.css'

export default class RTVusersContainer extends React.Component{

  state = {RTV_users_data: []}

  componentDidMount(){this.RTVinterval = setInterval(this.updateRTVusers, 1000)}

  updateRTVusers = () => {
    trafficFunctions('get', 'http://localhost:3001/traffics')
    .then(res_obj => this.setState({ RTV_users_data: res_obj.data }))
  }

  componentWillUnmount(){clearInterval(this.RTVinterval)}

  render(){
    return(
      <RTVusersList
        RTV_users_data={this.state.RTV_users_data}
      />
    )
  }
}