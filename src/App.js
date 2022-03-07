import React from "react";
import { DisplayComponent } from "./Components/DisplayComponent";
import { BtnComponent } from "./Components/BtnComponent";
import "./App.css";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: {
        ms: 0,
        s: 0,
        m: 0,
        h: 0,
      },
      interv: "",
      status: 0,
    };
    this.updatedMs = this.state.time.ms;
    this.updatedS = this.state.time.s;
    this.updatedM = this.state.time.m;
    this.updatedH = this.state.time.h;

    this.start = this.start.bind(this);
    this.run = this.run.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
    this.resume = this.resume.bind(this);
    this.reset_update = this.reset_update.bind(this);
  }
  reset_update(){
    this.updatedMs = 0;
    this.updatedS = 0;
    this.updatedM = 0;
    this.updatedH = 0;
  }
  start() {    
    this.run();
    this.setState({ status: 1 });
    this.setState({ interv: setInterval(this.run, 10) });
  }

  run() {
    if (this.updatedM === 60) {
      this.updatedH++;
      this.updatedM = 0;
    }
    if (this.updatedS === 60) {
      this.updatedM++;
      this.updatedS = 0;
    }
    if (this.updatedMs === 100) {
      this.updatedS++;
      this.updatedMs = 0;
    }
    this.updatedMs++;
    return this.setState({
      time: {
        ms: this.updatedMs,
        s: this.updatedS,
        m: this.updatedM,
        h: this.updatedH,
      },
    });
  }
  stop() {
    clearInterval(this.state.interv);
    this.setState({ status: 2 });
  }
  reset() {
    clearInterval(this.state.interv);
    this.setState({ time: { ms: 0, s: 0, m: 0, h: 0 } });
    this.setState({ status: 0 });
    this.reset_update();    
  }
  resume() {
    this.start();
  }
  render() {
    return (
      <div className="main_section">
        <div className="clock_holder">
          <div className="stopwatch">
            <DisplayComponent time={this.state.time} />
            <BtnComponent
              status={this.state.status}
              resume={this.resume}
              reset={this.reset}
              stop={this.stop}
              start={this.start}
            />
          </div>
        </div>
      </div>
    );
  }
}
