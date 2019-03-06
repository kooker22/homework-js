'use strict'

let lapArray = [];
let stopw = document.querySelector('.stopwatch');
let start = document.querySelector('.js-start');
let lap = document.querySelector('.js-take-lap');
let reset = document.querySelector('.js-reset');
let time = document.querySelector('.js-time');
let ulLaps = document.querySelector('.js-laps');

class StopWatch {
  constructor ({ onTick }) {
    this.onTick = onTick;
    this.startTime = null;
    this.isActive = false;
    this.timerID = null;
    this.delta = null;
    this.startTime = null;
    this.pauseTime = null;
    this.updateTime = updateTime;
  }

  startTimer () {
    if (!this.isActive) {
      this.start();
    } else {
      this.stop();
    }
  }

  start () {
    this.isActive = true;
    this.startTime = Date.now() - this.pauseTime;
    start.textContent = 'Pause';
    this.timerID = setInterval(() => {
      let currentTime = Date.now();
      this.delta = currentTime - this.startTime;
      let milli =
        ((this.delta % 1000) / 100).toFixed(0) > 9
          ? ((this.delta % 1000) / 100).toFixed(0) / 10
          : ((this.delta % 1000) / 100).toFixed(0);
      let sec =
        Math.floor((this.delta / 1000) % 60) < 10
          ? `0${Math.floor((this.delta / 1000) % 60)}`
          : Math.floor((this.delta / 1000) % 60);
      let min =
        Math.floor((this.delta / 60000) % 60) < 10
          ? `0${Math.floor((this.delta / 60000) % 60)}`
          : Math.floor((this.delta / 60000) % 60);
      this.updateTime({ min, sec, milli });
    }, 100);
  }

  stop () {
    if (this.isActive) {
      this.isActive = false;
      clearInterval(this.timerID);
      this.pauseTime = this.delta;
      start.textContent = 'Continue';
    } else {
      this.isActive = true;
      setInterval(() => {
        this.delta = currentTime - this.startTime + this.pauseTime
      }, 100);
    }
  }
  lap () {
    if (time.innerHTML !== '00:00.0') {
      lapArray.push(time.innerHTML)
      let li = document.createElement('li')
      li.textContent = time.innerHTML
      ulLaps.append(li)
    }
  }
  reset () {
    clearInterval(this.timerID);
    this.lapArray = [];
    this.isActive = false;
    this.timerID = null;
    this.delta = null;
    this.startTime = null;
    this.currentTime = null;
    this.pauseTime = null;
    start.textContent = 'Start';
    time.textContent = '00:00.0';
    ulLaps.innerHTML = '';
  }
}

const stopWatch = new StopWatch({ onTick: updateTime});
function updateTime ({ min, sec, milli }) {
  time.textContent = `${min}:${sec}.${milli}`;
}
start.addEventListener('click', stopWatch.startTimer.bind(stopWatch));
lap.addEventListener('click', stopWatch.lap.bind(stopWatch));
reset.addEventListener('click', stopWatch.reset.bind(stopWatch));