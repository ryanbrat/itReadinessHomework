//getShortTime
var DateFormatter = {
  getShortTime: function(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = '';

    if (hours >= 12) {
      ampm = 'pm';
    } else {
      ampm = 'am'
    }
    if (hours > 12) {
      hours -= 12;
    } else if (hours == 0) {
      formattedHours = 12;
    } else {
      formattedHours = hours;
    }

    if (minutes < 10) {
      minutes = "0" + minutes;
}
    return hours + ':' + minutes + ' ' + ampm;
  }
}

var d = new Date();
var formDate = DateFormatter.getShortTime(d);
document.getElementById("shortTime").innerHTML = formDate;



//getLongTime
var DateFormatter = {
  getLongTime: function(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm = '';

    if (hours >= 12) {
      ampm = 'pm';
    } else {
      ampm = 'am'
    }
    if (hours > 12) {
      hours -= 12;
    } else if (hours === 0) {
      formattedHours = 12;
    } else {
      formattedHours = hours;
    }

    if (minutes < 10) {
      minutes = "0" + minutes;
}
if (seconds < 10) {
  seconds = "0" + seconds;
}

    return hours + ':' + minutes + ':' + seconds + ' ' + ampm;
  }
}

var d = new Date();
var formDate = DateFormatter.getLongTime(d);
document.getElementById("longTime").innerHTML = formDate;

//getShortDate
var DateFormatter = {
  getShortDate: function(date) {
    var month = date.getMonth();
    var day = date.getDay();
    var year = date.getFullYear();

    return month + '/' + day + '/' + year;
  }
}

var d = new Date();
var formDate = DateFormatter.getShortDate(d);
document.getElementById("shortDate").innerHTML = formDate;

//getLongDate
var DateFormatter = {
  getLongDate: function(date) {
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var n = month[d.getMonth()];
    var day = date.getDay();
    var year = date.getFullYear();

    return n + ' ' + day + ',' + ' ' + year;
  }
}

var d = new Date();
var formDate = DateFormatter.getLongDate(d);
document.getElementById("longDate").innerHTML = formDate;

//getShortDateTime
var DateFormatter = {
  getShortDateTime: function(date) {
    var month = date.getMonth();
    var day = date.getDay();
    var year = date.getFullYear();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = '';

    if (hours >= 12) {
      ampm = 'pm';
    } else {
      ampm = 'am'
    }
    if (hours > 12) {
      hours -= 12;
    } else if (hours === 0) {
      formattedHours = 12;
    } else {
      formattedHours = hours;
    }

    if (minutes < 10) {
      minutes = "0" + minutes;
}

    return month + '/' + day + '/' + year + ' ' + hours + ':' + minutes + ' ' + ampm;
  }
}

var d = new Date();
var formDate = DateFormatter.getShortDateTime(d);
document.getElementById("ShortDateTime").innerHTML = formDate;

//getLongDateTime
var DateFormatter = {
  getLongDateTime: function(date) {
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var n = month[d.getMonth()];
    var day = date.getDay();
    var year = date.getFullYear();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = '';

    if (hours >= 12) {
      ampm = 'pm';
    } else {
      ampm = 'am'
    }
    if (hours > 12) {
      hours -= 12;
    } else if (hours === 0) {
      formattedHours = 12;
    } else {
      formattedHours = hours;
    }

    if (minutes < 10) {
      minutes = "0" + minutes;
}

    return n + ' ' + day + ',' + ' ' + year + ' ' + hours + ':' + minutes + ' ' + ampm;

  }
}

var d = new Date();
var formDate = DateFormatter.getLongDateTime(d);
document.getElementById("LongDateTime").innerHTML = formDate;

//getExtendedDateTime
var DateFormatter = {
  getExtendedDateTime: function(date) {


    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var w = weekday[d.getDay()];
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var m = month[d.getMonth()];
    var day = date.getDay();
    var year = date.getFullYear();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = '';

    if (hours >= 12) {
      ampm = 'pm';
    } else {
      ampm = 'am'
    }
    if (hours > 12) {
      hours -= 12;
    } else if (hours === 0) {
      formattedHours = 12;
    } else {
      formattedHours = hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
}

    return w + ', ' + m + ' ' + day + ',' + ' ' + year + ' ' + hours + ':' + minutes + ' ' + ampm;
  }
}

var d = new Date();
var formDate = DateFormatter.getExtendedDateTime(d);
document.getElementById("ExtendedDateTime").innerHTML = formDate;
