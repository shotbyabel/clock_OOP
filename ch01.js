function onReady() {
	console.log("Hello Chapter 1");
// 	console.log(date.getHours());

	// var clock = createClock();
	var clock = createClock('clock');//**TWO**send the clock
	var clock2 = createClock('clock2'); //**FOUR** create the second clock.. send the id of the 2nd clock...

	//8** create a set interval function
	// setInterval(updateClock, 1000);

}
//////////////////////////////////////////
//**Ch. 2: Create a new clock function///
function createClock(id) {//**ONE**adding a 2nd clock: we add an other param 'id'
	var c = new Object();
	//**Ch.2: 2. Let's add the updateClock function into our create new clock object..
	//below we created a new function living inside the "c" object. It's unique to that object.
	//we can now create separate clocks if we create some variables and createClock in them.. we have new ones!
	c.updateClock = function() { //when we have a function that belows to an object we call it a METHOD
		var date = new Date();
		// var clock = document.getElementById('clock');
		var clock = document.getElementById(id);//**THREE**now we send in the id
		// console.log(this);
		clock.innerHTML = this.formatDigits(date.getHours()) + ":" //5* from step *4 we added our formatDigits function
			+ this.formatDigits(date.getMinutes()) + ":" + this.formatDigits(date.getSeconds());

	};

	c.formatDigits = function(value) { //it takes a value as an argument
		//IF my value is LESS than 10 it will be = to 0 plus our value.
		if (value < 10) value = "0" + value;
		//*4 let's wrap that function to our date values now...
		return value;

	};


 setInterval(function(){
 		c.updateClock();

 	}, 1000);
	
	c.updateClock();//call it before 1 second passes.. Stops the 00:00

	return c;
}


//**7 elemen UPDATES as the seconds change
// - we grab our *2 code clock.innerHTML and we pass it into this new function

// function updateClock() {
// 	var date = new Date(); //hey CREATE a new Date for us and set it inside the variable of date.
// 	//{date object}

// 	//*1. We have 'access to our clock!'
// 	var clock = document.getElementById('clock');
// 	//{clock object} fetching element that already excist.

// 	//*2 change it! 
// 	// clock.innerHTML = 'Whatevaaaa';
// 	clock.innerHTML = formatDigits(date.getHours()) + ":" //5* from step *4 we added our formatDigits function
// 		+ formatDigits(date.getMinutes()) + ":" + formatDigits(date.getSeconds());

// }

//*3 change the time format display to be 09:01.. include those ZEROS
// function formatDigits(value) { //it takes a value as an argument
// 	//IF my value is LESS than 10 it will be = to 0 plus our value.
// 	if (value < 10) value = "0" + value;
// 	//*4 let's wrap that function to our date values now...
// 	return value;

// }

window.onload = onReady;