const daysCl =document.getElementById('days');
const hoursCl = document.getElementById('hours');
const minsCl = document.getElementById('mins');
const secondsCl =  document.getElementById('seconds');

const newYears  = "17 Aug 2022";


function countdown(){
	const newYearDate = new Date(newYears);
	const currentDate = new Date();
	const total_seconds = (newYearDate - currentDate)/1000;
	const days = Math.floor(total_seconds / 3600 /24); 

	const hours = Math.floor(total_seconds/3600)%24;
	const minutes = Math.floor(total_seconds/60)%60;
	const seconds = Math.floor(total_seconds%60);
	console.log(days,hours,minutes,seconds);
	
	daysCl.innerHTML = days;
	hoursCl.innerHTML = formatTime(hours);
	minsCl.innerHTML = formatTime(minutes);
	secondsCl.innerHTML = formatTime(seconds);
}	

function formatTime(time){
		return time < 10 ? (`0${time}`) : time ; 
}
// first call
countdown();


setInterval(countdown, 1000);


