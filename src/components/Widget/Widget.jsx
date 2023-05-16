import React from 'react';
import css from './WidgetStyle.module.css';

const Widget = () => {



  return (
    <div className={css.widget}>
      <h1>Please Leave Feedback</h1>
      <div className={css.btnsWidget}>
        <button
          type="submit"
          className={`${css.btnWidget}  ${css.btnWidgetText}`}
        >
          Good
        </button>
        <button
          type="submit"
          className={`${css.btnWidget}  ${css.btnWidgetText}`}
        >
          Neutral
        </button>
        <button
          type="submit"
          className={`${css.btnWidget}  ${css.btnWidgetText}`}
        >
          Bad
        </button>
      </div>
    </div>
  );
};

export default Widget;
