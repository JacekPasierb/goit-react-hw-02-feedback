import { Component } from 'react';
import css from './WidgetStyle.module.css';

class Widget extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  plusGood = () => {
    this.setState({ good: this.state.good + 1 });
  };
  plusNeutral = () => {
    this.setState({ neutral: this.state.neutral + 1 });
  };
  plusBad = () => {
    this.setState({ bad: this.state.bad + 1 });
  };

  countTotalFeedback() {
    let total = 0;
    const values = Object.values(this.state);
    values.forEach(value => {
      total += value;
    });

    return total;
  }
  countPositiveFeedbackPercentage() {
    const sum = Math.round((this.state.good / this.countTotalFeedback()) * 100);
    return sum;
  }

  render() {
    let { good, neutral, bad } = this.state;

    return (
      <div className={css.widget}>
        <h1>Please Leave Feedback</h1>
        <div className={css.btnsWidget}>
          <button
            onClick={this.plusGood}
            type="submit"
            className={`${css.btnWidget}  ${css.btnWidgetText}`}
          >
            Good
          </button>
          <button
            onClick={this.plusNeutral}
            type="submit"
            className={`${css.btnWidget}  ${css.btnWidgetText}`}
          >
            Neutral
          </button>
          <button
            onClick={this.plusBad}
            type="submit"
            className={`${css.btnWidget}  ${css.btnWidgetText}`}
          >
            Bad
          </button>
        </div>
        <h3>Statistics</h3>
        <ul>
          <li className={css.statItem}>
            <p>Good:</p>
            <p>{good}</p>
          </li>
          <li className={css.statItem}>
            <p>Neutral: </p>
            <p>{neutral}</p>
          </li>
          <li className={css.statItem}>
            <p>Bad: </p>
            <p>{bad}</p>
          </li>
          <li className={css.statItem}>
            <p>total: </p>
            <p>{this.countTotalFeedback()}</p>
          </li>
          <li className={css.statItem}>
            <p>Positive Feedback: </p>
            <p>
              {this.countTotalFeedback() > 0
                ? this.countPositiveFeedbackPercentage() + '%'
                : 0 + '%'}
            </p>
          </li>
          {/* {this.countTotalFeedback() > 0 && '200'} */}
        </ul>
      </div>
    );
  }
}

export default Widget;

// import React from 'react';
// import css from './WidgetStyle.module.css';

// const Widget = () => {

//   return (
//     <div className={css.widget}>
//       <h1>Please Leave Feedback</h1>
//       <div className={css.btnsWidget}>
//         <button
//           type="submit"
//           className={`${css.btnWidget}  ${css.btnWidgetText}`}
//         >
//           Good
//         </button>
//         <button
//           type="submit"
//           className={`${css.btnWidget}  ${css.btnWidgetText}`}
//         >
//           Neutral
//         </button>
//         <button
//           type="submit"
//           className={`${css.btnWidget}  ${css.btnWidgetText}`}
//         >
//           Bad
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Widget;
