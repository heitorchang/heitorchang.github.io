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
