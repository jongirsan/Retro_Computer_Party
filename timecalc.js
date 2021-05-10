var timer;

var compareDate = new Date();
compareDate.setDate(compareDate.getDate() + 30); 
timer = setInterval(function() {
  timeBetweenDates(compareDate);
}, 1000);

function timeBetweenDates(toDate) {
  var dateEntered = toDate;
  var now = new Date();
  var difference = dateEntered.getTime() - now.getTime();

  if (difference <= 0) {

    // Időzítő lejárt...
    clearInterval(timer);
  
  } else {
    
    var seconds = Math.floor(difference / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);

    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    if (hours<10) {hours = '0' + hours;}
    if (minutes<10) {minutes = '0' + minutes;}
    if (seconds<10) {seconds = '0' + seconds;}

    var clockFace = days+':'+hours+':'+minutes+':'+seconds;
    document.getElementById('clock').innerHTML = clockFace;
  }
}

timeBetweenDates();