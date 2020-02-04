"use strict";

let calendarHtml = "";
const oneWeek = ["日", "月", "火", "水", "木", "金", "土"];

//対象年月
let today = new Date();
let dateObj = {
  year: today.getFullYear(),
  month: ("0" + (today.getMonth() + 1)).slice(-2)
};
document.querySelector(
  "#yearMonth"
).innerHTML = `${dateObj.year}/${dateObj.month}`;

/*
 * カレンダー
 */

//曜日作成
calendarHtml += '<table border="1">';
calendarHtml += "<tr>";
oneWeek.forEach(youbi => (calendarHtml += `<th>${youbi}</th>`));
calendarHtml += "</tr>";
calendarHtml += "</table>";

//HTMLに反映
document.querySelector("#calendar").innerHTML = calendarHtml;
