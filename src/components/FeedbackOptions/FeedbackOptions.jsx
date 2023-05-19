import React, { Component } from 'react';
import css from './FeedbackOptionsStyle.module.css';

export default class FeedbackOptions extends Component {
  render() {
    let tab = this.props;
    console.log('this.props', tab);
    console.log('this.props.options', tab.options);
    console.log('this.props.onleave', tab.onLeaveFeedback);

    let arr = tab.options;

    return (
      <div className={css.widget}>
        <h4>Please leave feedback</h4>
        <div className={css.btnsWidget}>
          {arr.map(option => (
            <button
              onClick={() => console.log('klik')}
              className={`${css.btnWidget}  ${css.btnWidgetText}`}
              key={option}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    );
  }
}
