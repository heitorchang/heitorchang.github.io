"use strict";

/////////////////
// Date and time

function dateUTC(date) {
  if (isNaN(date.getTime())) {
    date = today();
  }
  return date.getUTCFullYear() + "/" + (date.getUTCMonth() + 1) + "/" + date.getUTCDate();
}

function dateMillis(date) {
  var millis = date.getTime();
  if (isNaN(millis)) {
    return today().getTime();
  }
  return millis;
}

function parseMillis(millis) {
  var date = new Date(millis);
  if (isNaN(date.getTime())) {
    date = today();
  }
  return date.getUTCFullYear() + "/" + (date.getUTCMonth() + 1) + "/" + date.getUTCDate();
}

function today() {
  var now = new Date();
  return new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
}
