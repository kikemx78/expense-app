import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { testAction, testAsync } from 'actions/app';


@connect(state => ({
  asyncData: state.app.get('asyncData'),
  asyncError: state.app.get('asyncError'),
  asyncLoading: state.app.get('asyncLoading'),
  counter: state.app.get('counter'),
}))
export default class Dashboard extends Component {
  static propTypes = {
    asyncData: PropTypes.string,
    asyncError: PropTypes.object,
    asyncLoading: PropTypes.bool,
    counter: PropTypes.number,
    // from react-redux connect
    dispatch: PropTypes.func,
  }

  constructor() {
    super();

    this.handleAsyncButtonClick = this.handleAsyncButtonClick.bind(this);
    this.handleTestButtonClick = this.handleTestButtonClick.bind(this);
  }

  handleAsyncButtonClick() {
    const { dispatch } = this.props;

    dispatch(testAsync());
  
  }

  handleTestButtonClick() {
    const { dispatch } = this.props;

    dispatch(testAction());
  }

  componentDidUpdate() {
    if (this.props.asyncData !== null) {
      console.log(this.props.asyncData.size);
    }
  }

  render() {
    const {
      asyncData,
      asyncError,
      asyncLoading,
      counter,
    } = this.props;
    
    return (
      
      <div className='Dashboard'>
        <h2>Llamadas API</h2>
        <hr />
        <div>
          <p>{ counter }</p>
          <button onClick={ this.handleTestButtonClick }>
            Counter
          </button>
        </div>
        <hr />
        <div>
          {asyncData !== null &&
          <ul>
            {
            asyncData.map((t, key) => (
          <li key={key}>
            {key}: {t}
          </li>
          ))
            }
          </ul>
          }
          { asyncLoading && <p>Loading...</p> }
          { asyncError && <p>Error: { asyncError }</p> }
          <button
            disabled={ asyncLoading }
            onClick={ this.handleAsyncButtonClick }
          >
            Get API ExpenseApp
          </button>
        </div>
        <hr />
        
      </div>
    );
  }
}
