class Chronometer {
  constructor() {
    // ... your code goes here

    this.currentTime = 0;
    this.intervalId = 0;

  }
  startClick(callback) {
    // ... your code goes here

    this.intervalId = setInterval(() => {
      this.currentTime ++ 
      
      callback();
    }, 1000)
  }

  getMinutes() {
    // ... your code goes here

    return Math.floor(this.currentTime/60)
  }
  
  getSeconds() {
    // ... your code goes here

    return this.currentTime%60

  }
  twoDigitsNumber(number) {
    // ... your code goes here

    if (number < 10) {
      return `0${number}`
      }
      return `${number }`

      
  }
  stopClick() {
    // ... your code goes here

     clearInterval(this.intervalId)
  }
  resetClick() {
    // ... your code goes here

    this.currentTime = 0

  }
  splitClick() {
   
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`

  }
}
