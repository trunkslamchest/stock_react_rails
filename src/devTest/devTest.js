import React from 'react'

import { connect } from 'react-redux'

import * as actions from '../store/actions/actionIndex'

import CounterControl from './CounterControl/CounterControl'
import CounterOutput from './CounterOutput/CounterOutput'

class DevTest extends React.Component {

  storeFunctions = () => {
    this.props.onSave(this.props.counter)
    document.cookie = `counter=${this.props.counter}`
    document.cookie = 'test=1'
  }

  removeFunctions = (id) => {
    document.cookie = 'counter=0'
    this.props.onRemove(id)
  }

  render(){

    console.log(this.props)

    return(
      <div className='default_wrapper'>
        <CounterOutput value={this.props.counter} />
        <CounterControl label="Add 1" clicked={this.props.onIncrement} />
        <CounterControl label="Subtract 1" clicked={this.props.onDecrement} />
        <CounterControl label="Add 10" clicked={this.props.onAdd} />
        <CounterControl label="Subtract 15" clicked={this.props.onSubtract} />
        <CounterControl label="Reset" clicked={this.props.onReset} />
        <hr />
        <button
          // onClick={() => this.props.onSave(this.props.counter)}
          onClick={this.storeFunctions}

        >
          Store Result
        </button>
        <ul>
          {this.props.store.map(update =>
            <button
              key={update.id}
              // onClick={() => this.props.onRemove(update.id)}
              onClick={() => this.removeFunctions(update.id)}
            >
              {update.value}
            </button>
            )
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    counter: state.devTest.counter,
    store: state.store.updates
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
    onAdd: () => dispatch(actions.add(10)),
    onSubtract: () => dispatch(actions.subtract(15)),
    onReset: () => dispatch(actions.reset()),
    onSave: (update) => dispatch(actions.save(update)),
    onRemove: (id) => dispatch(actions.remove(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DevTest)