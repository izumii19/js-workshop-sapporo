"use strict";

function createDateData(year, month, day, dayOfWeek) {
  return {
    year: year,
    month: month,
    day: day,
    dayOfWeek: dayOfWeek,
    color:
      today.getMonth() + 1 !== month
        ? "gray"
        : today.getMonth() + 1 === month && dayOfWeek === 0
        ? "red"
        : today.getMonth() + 1 === month && dayOfWeek === 6
        ? "blue"
        : ""
  };
}

var calendarHtml = "";
const oneWeek = ["日", "月", "火", "水", "木", "金", "土"];

/* 対象年月 */
let today = new Date();
document.querySelector("#yearMonth").innerHTML = `${today.getFullYear()}/${(
  "0" +
  (today.getMonth() + 1)
).slice(-2)}`;

/* カレンダー */

// tableタグ開始
calendarHtml += '<table border="1" id="calendarTable">';

// ヘッダ(曜日)作成
calendarHtml += "<tr>";
oneWeek.forEach(youbi => (calendarHtml += `<th>${youbi}</th>`));
calendarHtml += "</tr>";

// 1日が何曜日か調べる
const dayOfWeek = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
// 1日〜その週末までの日の配列を作成
const firstDays = [...Array(7 - dayOfWeek).keys()].map(ary => ++ary);
// 月の日数を取得
const lastDay = new Date(
  today.getFullYear(),
  today.getMonth() + 1,
  0
).getDate();

//日付を描画
//カレンダー表示用配列作成
let dayArrays = [];

// 当月作成
for (var i = 0; i < lastDay; i++) {
  dayArrays[i] = createDateData(
    today.getFullYear(),
    today.getMonth() + 1,
    i + 1,
    new Date(today.getFullYear(), today.getMonth(), i + 1).getDay()
  );
}

// 前月作成
let tempMonth = [];

// 日数を取得
let lastmonthDays = new Date(
  today.getFullYear(),
  today.getMonth(),
  0
).getDate();

for (var i = 0; i < dayArrays[0].dayOfWeek; i++) {
  tempMonth[i] = createDateData(
    today.getFullYear(),
    today.getMonth(),
    lastmonthDays - dayArrays[0].dayOfWeek + i,
    i
  );
}
dayArrays.unshift(...tempMonth);

//翌月作成
tempMonth = [];

var cnt = 6 - dayArrays[dayArrays.length - 1].dayOfWeek;

for (var i = 0; i < cnt; i++) {
  tempMonth[i] = createDateData(
    today.getFullYear(),
    today.getMonth() + 2,
    i + 1,
    dayArrays[dayArrays.length - 1].dayOfWeek + i + 1
  );
}
dayArrays.push(...tempMonth);

//HTML作成
var calendarHtml2 = "";
dayArrays.forEach(function(aDay) {
  if (aDay.dayOfWeek === 0 || calendarHtml2 === "") {
    calendarHtml2 += "<tr>";
  }
  calendarHtml2 += `<td`;

  if (aDay.color != "") {
    calendarHtml2 += ` style = "color:${aDay.color}" `;
  }

  if (aDay.month !== today.getMonth() + 1) {
    calendarHtml2 += ` bgcolor = "lightgray" `;
  } else if (
    today.getFullYear() === aDay.year &&
    today.getMonth() + 1 === aDay.month &&
    today.getDate() === aDay.day
  ) {
    calendarHtml2 += ` bgcolor = "pink" `;
  }
  calendarHtml2 += `>${aDay.day}</td>`;

  if (aDay.dayOfWeek === 6) {
    calendarHtml2 += "</tr>";
  }
});

calendarHtml += calendarHtml2;

// tableタグ終了
calendarHtml += "</table>";
// HTMLに反映
document.querySelector("#calendar").innerHTML = calendarHtml;

/*
      //TODO 祝日を表示させたい
      var holidays = holiday_jp.between(
        new Date("2010-09-14"),
        new Date("2010-09-21")
      );
      console.log(holidays[0]["name"]); // 敬老の日
      */
