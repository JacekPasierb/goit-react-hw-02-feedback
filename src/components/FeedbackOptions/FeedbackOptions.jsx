import React from 'react';
import css from './FeedbackOptionsStyle.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {

  return (
    <div className={css.widget}>
      <h4>Please leave feedback</h4>
      <div className={css.btnsWidget}>
        {options.map(option => (
          <button
            onClick={()=>onLeaveFeedback(option)}
            className={`${css.btnWidget}  ${css.btnWidgetText}`}
            key={option}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};
