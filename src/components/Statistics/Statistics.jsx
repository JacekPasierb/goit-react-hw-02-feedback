import React from 'react';
import css from './StatisticsStyle.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <h4>Statistics</h4>

      <ul className={css.statList}>
        <li className={css.statItem}>
          <p className={css.statText}>Good:</p>
          <p className={css.statText}>{good}</p>
        </li>

        <li className={css.statItem}>
          <p className={css.statText}>Neutral: </p>
          <p className={css.statText}>{neutral}</p>
        </li>

        <li className={css.statItem}>
          <p className={css.statText}>Bad: </p>
          <p className={css.statText}>{bad}</p>
        </li>

        <li className={css.statItem}>
          <p className={css.statText}>total: </p>
          <p className={css.statText}>{total}</p>
        </li>

        <li className={css.statItem}>
          <p className={css.statText}>Positive Feedback: </p>
          <p className={css.statText}>{positivePercentage}</p>
        </li>
      </ul>
    </div>
  );
};

export default Statistics;
// import React, { Component } from 'react';
// import css from './StatisticsStyle.module.css';

// export default class Statistics extends Component {
//   render() {
//     let { good, neutral, bad , total, positivePercentage} = this.props;

//     return (
//
//     );
//   }
// }
