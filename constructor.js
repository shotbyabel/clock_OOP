function onReady() {
  console.log("Constructor Refactor");

  var clock = new Clock('clock');
  var clock2 = new Clock('clock2');

}

function Clock(id) {

  // var c = new Object();

  this.updateClock = function() {

    var date = new Date();
    var clock = document.getElementById(id);

    clock.innerHTML = this.formatDigits(date.getHours()) + ":" //5* from step *4 we added our formatDigits function
      + this.formatDigits(date.getMinutes()) + ":" + this.formatDigits(date.getSeconds());

  };

  this.formatDigits = function(value) {
    if (value < 10) value = "0" + value;

    return value;

  };

  var that = this;
  setInterval(function() {
    // console.log(this);
    // console.log(id);
    that.updateClock();
  }, 1000);
  that.updateClock();
  // return c;
}



window.onload = onReady;