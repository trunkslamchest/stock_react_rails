import React from 'react'

import RTVpagesList from './RTVpagesList'

import trafficFunctions from '../../utility/trafficFunctions'

import './RTV.css'

export default class RTVpagesContainer extends React.Component{

  state = {RTV_page_data: []}

  componentDidMount(){this.RTVinterval = setInterval(this.updateRTVpages, 1000)}

  updateRTVpages = () => {
    trafficFunctions('get', 'http://localhost:3001/pages')
    .then(res_obj => this.setState({ RTV_page_data: res_obj.data }))
  }

  componentWillUnmount(){clearInterval(this.RTVinterval)}

  render(){
    return(
      <RTVpagesList
        RTV_page_data={this.state.RTV_page_data}
      />
    )
  }
}