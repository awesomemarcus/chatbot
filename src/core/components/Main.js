import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getQuote } from '../../lib';

import * as coreAction from '../actions/coreAction';


class Main extends React.Component {
  componentWillMount() {
    // actions.askBot();
  }

  handleSubmit(e) {
    e.preventDefault();
    const { actions } = this.props;
    const chatThread = document.querySelector('.chat-thread');
    let bottomFlag = document.getElementsByClassName('item');
    bottomFlag = bottomFlag[bottomFlag.length - 1];

    actions.askBot({
      message: this.message.value,
      direction: 'right',
    }, bottomFlag);

    this.message.value = '';
  }

  render() {
    const { messages } = this.props;
    return (
      <div className="container">
        <header>
          <img src="https://c1.flipagramcdn.com/8c4e281fda2e1771318a718a8f04ae22-4b5c8b6c0cabb3af1a9544c1a1e909506c6824dc_1462712690907-medium" className="img-responsive" width="45" alt=""/>
          <div>
            <h4>Mr. Kupido</h4>
            <small><i>online</i></small>
          </div>
        </header>
        <ul className="chat-thread">
          {messages ?
            messages.slice(0).reverse().map((msg, key) => (
              <li key={key} className={`item ${msg.direction}`}>
                {msg.message || 'Pardon me.'}
              </li>
            ))
          :
            <div>
              <br/>
              <img src="https://c1.flipagramcdn.com/8c4e281fda2e1771318a718a8f04ae22-4b5c8b6c0cabb3af1a9544c1a1e909506c6824dc_1462712690907-medium" className="img-responsive center-block" width="200" alt=""/>
              <br/>
              <p className="text-center"><i>"{getQuote()}"</i></p>
              <h3 className="text-center" style={{ color: '#4f4f4f' }}>Hi! What do you want me to call you?</h3>
            </div>
          }
          <div id="bottomFlag" style={{ position: 'absolute', bottom: 0 }}></div>
        </ul>
        <form className="chat-window" onSubmit={this.handleSubmit.bind(this)}>
        <input ref={ e => this.message = e } className="chat-window-message" name="chat-window-message" type="text" autoComplete="off" autoFocus placeholder="type your message here..." />
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.coreReducer.messages,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(coreAction, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
