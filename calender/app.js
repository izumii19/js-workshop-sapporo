"use strict";

const oneWeek = ["日", "月", "火", "水", "木", "金", "土"];

let datebuff = new Date("2020-2-25");
const today = {
  year: datebuff.getFullYear(),
  month: datebuff.getMonth() + 1,
  date: datebuff.getDate()
};

/* 対象年月 */
document.querySelector("#yearMonth").innerHTML = `${today.year}/${(
  "0" + today.month
).slice(-2)}`;

/* カレンダー */

// tableタグ開始
let calendarHtml = '<table border="1" id="calendarTable">';

// ヘッダ(曜日)作成
calendarHtml += "<tr>";
oneWeek.forEach(youbi => (calendarHtml += `<th>${youbi}</th>`));
calendarHtml += "</tr>";

// 1日が何曜日か調べる
const dayOfWeek = new Date(`${today.year}/${today.month}/1`).getDay();

// 1日〜その週末までの日の配列を作成
const firstDays = [...Array(7 - dayOfWeek).keys()].map(ary => ++ary);
// 月の日数を取得
const daysOfMonth = new Date(today.year, today.month, 0).getDate();
//日付を描画
//カレンダー表示用配列作成
let dayArrays = [];

// 当月作成
for (let i = 0; i < daysOfMonth; i++) {
  dayArrays[i] = createDayData(
    today.year,
    today.month,
    i + 1,
    new Date(`${today.year}/${today.month}/${i + 1}`).getDay()
  );
}

// 前月作成
let tempMonth = [];

// 日数を取得
let lastmonthDays = new Date(today.year, today.month - 1, 0).getDate();

for (let i = 0; i < dayArrays[0].dayOfWeek; i++) {
  tempMonth[i] = createDayData(
    today.year,
    today.month - 1,
    lastmonthDays - dayArrays[0].dayOfWeek + i,
    i
  );
}
dayArrays.unshift(...tempMonth);

//翌月作成
tempMonth = [];

var cnt = 6 - dayArrays[dayArrays.length - 1].dayOfWeek;

for (var i = 0; i < cnt; i++) {
  tempMonth[i] = createDayData(
    today.year,
    today.month + 1,
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

  if (aDay.month !== today.month) {
    calendarHtml2 += ` bgcolor = "lightgray" `;
  } else if (
    today.year === aDay.year &&
    today.month === aDay.month &&
    today.date === aDay.date
  ) {
    calendarHtml2 += ` bgcolor = "pink" `;
  }
  calendarHtml2 += `>${aDay.date}</td>`;

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

function createDayData(year, month, day, dayOfWeek) {
  return {
    year: year,
    month: month,
    date: day,
    dayOfWeek: dayOfWeek,
    color:
      today.month !== month
        ? "gray"
        : today.month === month && dayOfWeek === 0
        ? "red"
        : today.month === month && dayOfWeek === 6
        ? "blue"
        : ""
  };
}
