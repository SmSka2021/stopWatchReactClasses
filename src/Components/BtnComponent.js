import React from "react";

export const BtnComponent = (props) => {
  if (props.status === 0) {
    return (
      <button className="stopwatch_btn" onClick={props.start}>
        старт
      </button>
    );
  }

  if (props.status === 1) {
    return (
      <div>
        <button className="stopwatch_btn" onClick={props.stop}>
          стоп
        </button>
        <button className="stopwatch_btn" onClick={props.reset}>
          сброс
        </button>
      </div>
    );
  }

  if (props.status === 2) {
    return (
      <div>
        <button className="stopwatch_btn" onClick={props.resume}>
          продолжить
        </button>
        <button className="stopwatch_btn" onClick={props.reset}>
          сброс
        </button>
      </div>
    );
  } else {
    return "";
  }
};
