import { Component } from 'react';
import css from './WidgetStyle.module.css';

class Widget extends Component {
  // constructor(){
  // super()
  //   }

  render() {
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
        <h3>Statistics</h3>
        <ul>
          <li>
            <p>Good:</p>
          </li>
          <li>
            <p>Neutral:</p>
          </li>
          <li>
            <p>Bad:</p>
          </li>
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
