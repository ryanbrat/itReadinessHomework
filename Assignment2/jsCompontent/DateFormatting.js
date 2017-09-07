//getShortTime
var DateFormatter = {
getShortTime: function(date){
    var hours = date.getHours();
    var minutes = date.getMinutes();
    //var formattedHours = '';
    var ampm = '';

    if (hours >= 12) {
      ampm = 'pm';
    }else{
      ampm = 'am'
    }
    if (hours > 12) {
      hours -= 12;
    } else if (hours == 0) {
      formattedHours = 12;
    } else {
      formattedHours = hours;
    }
    return hours + ':' + minutes + ampm;
}
}

var d = new Date();
var formDate = DateFormatter.getShortTime(d);
document.getElementById("shortTime").innerHTML = formDate;



//getLongTime
var DateFormatter = {
getLongTime: function(date){
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    //var formattedHours = '';
    var ampm = '';

    if (hours >= 12) {
      ampm = 'pm';
    }else{
      ampm = 'am'
    }
    if (hours > 12) {
      hours -= 12;
    } else if (hours === 0) {
      formattedHours = 12;
    } else {
      formattedHours = hours;
    }
    return hours + ':' + minutes + ':' + seconds + ampm;
}
}

var d = new Date();
var formDate = DateFormatter.getLongTime(d);
document.getElementById("longTime").innerHTML = formDate;

//getShortDate
var DateFormatter = {
getShortDate: function(date){
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
getLongDate: function(date){
    var month = date.getMonth();
    var day = date.getDay();
    var year = date.getFullYear();

    return month + '/' + day + '/' + year;
}
}

var d = new Date();
var formDate = DateFormatter.getLongDate(d);
document.getElementById("longDate").innerHTML = formDate;

//getShortDateTime
var DateFormatter = {
getLongDate: function(date){
    var month = date.getMonth();
    var day = date.getDay();
    var year = date.getFullYear();

    return month + '/' + day + '/' + year;
}
}

var d = new Date();
var formDate = DateFormatter.getLongDate(d);
document.getElementById("longDate").innerHTML = formDate;
//month/day/year hour:minutes AM|PM
// Sample code

// var DateFormatter = {
//   getReverseDate:function(date){
//     var year = date.getFullYear();
//     var month = date.getMonth();
//
//     return year + '/' + month;
// }
// }
// var d = new Date();
// var formDate = DateFormatter.getReverseDate(d);
// document.getElementById("date").innerHTML = formDate;





//bottom of DateFormatting.js
// var getMonthYear = DateFormatter.getMonthYear(new Date());
// console.log('Get Month Year ' + getMonthYear);
// var d = new Date(year, month, day, hours, minutes, seconds, milliseconds);
