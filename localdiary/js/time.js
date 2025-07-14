function epochToYMD(epoch) {
  var d = new Date(epoch);
  return d.getFullYear().toString() + "/" +
    pad((d.getMonth() + 1).toString()) + "/" + 
    pad(d.getDate().toString()) + " " +
    pad(d.getHours().toString()) + ":" +
    pad(d.getMinutes().toString()) + ":" + 
    pad(d.getSeconds().toString());
}

function YMDToEpoch(y, m, d, hh, mm, ss) {
  return new Date(parseInt(y),
                  parseInt(m) - 1,
                  parseInt(d),
                  parseInt(hh),
                  parseInt(mm),
                  parseInt(ss)).getTime();
}

function epochToShort(epoch) {
  var monthNames = ['',
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec',];

  var d = new Date(epoch);
  return d.getDate().toString() + " " +
    monthNames[d.getMonth() + 1] + " " +
    pad(d.getHours().toString()) + ":" +
    pad(d.getMinutes().toString());
}

function isLeapYear(year) {
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

function lastDayOfMonth(month, year) {
  if (month == 2 && isLeapYear(year)) {
    return 29;
  } else {
    return [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
  }
}
