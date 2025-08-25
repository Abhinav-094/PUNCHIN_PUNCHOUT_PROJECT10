var morning_hours = 0;
var morning_mintue = 0;
var morning_second = 0;
var usertime_main = 0;
var punchin_time_hours = 0;
var punchin_time_min = 0;

function main_function() 
{
  var a = new Date();
  var cur_hr = a.getHours();
  var cur_hours = cur_hr % 12;
  var cur_min = a.getMinutes();
  var cur_sec = a.getSeconds();
  if (cur_hours == 11 && cur_min >= 0 && cur_min <= 59) {
    document.getElementById("timeout").disabled = false;
  } else {
    document.getElementById("timeout").disabled = true;
  }
}
function timein_fn_2() {
  var a = new Date();
  var cur_hr = a.getHours();
  var cur_hr1 = cur_hr % 12;
  var cur_min = a.getMinutes();
  var cur_sec = a.getSeconds();
  morning_hours = cur_hr1;
  morning_mintue = cur_min;
  morning_second = cur_sec;
  var userTime = document.getElementById("user_value").value;
  var htr = userTime.split(":");
  punchin_time_hours = htr[0];
  punchin_time_min = htr[1];

  var period =
    punchin_time_hours >= 12 && punchin_time_hours < 16 ? "PM" : "AM";

  document.getElementById("morning_time").innerText =
    userTime + " : " + cur_sec + " " + period;
  document.getElementById("finalmsg").style.display = "block";
  if (userTime !== "") {
    setInterval(() => {
      document.getElementById("timein").disabled = true;
    }, 1 * 60000);
  }
}

function timeout_fn_2() {
  var a = new Date();
  var cur_hr = a.getHours();
  var cur_min = a.getMinutes();
  var cur_sec = a.getSeconds();

  var EVENING_TIME = cur_hr + " : " + cur_min + " : " + cur_sec;
  document.getElementById("evening_time").innerText = EVENING_TIME;

  var hours = Math.abs(cur_hr - punchin_time_hours);
  var minutes = Math.abs(cur_min - punchin_time_min);
  var seconds = cur_sec;

  document.getElementById("total_time").innerText = hours + " : " + minutes + " : " + cur_sec;
  document.getElementById("finalmsg").style.display = "block";
}
function user_time() {
  document.getElementById("timein").disabled = false;
  document.getElementById("finalmsg").style.display = "none";
}
