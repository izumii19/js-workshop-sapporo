"use strict";

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

// 曜日作成
calendarHtml += "<tr>";
oneWeek.forEach(youbi => (calendarHtml += `<th>${youbi}</th>`));
calendarHtml += "</tr>";

// 1日が何曜日か調べる
const dayOfWeek = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
// 1日〜その週末までの日の配列を作成
const firstDays = [...Array(7 - dayOfWeek).keys()].map(ary => ++ary);
// 当月の日数を取得
const lastDay = new Date(
  today.getFullYear(),
  today.getMonth() + 1,
  0
).getDate();

//日付を描画
function displayDays() {
  var isFirstTime = true;
  var isContinue = true;
  var nextDay = 0;

  var nowRow = 1;
  var todayRowCol = [];

  function f() {
    while (isContinue) {
      // 1週間分の配列を作成
      var week = Array(7).fill("-");

      if (isFirstTime) {
        //配列を途中から上書き
        week.splice(dayOfWeek, 7 - dayOfWeek, ...firstDays);
        isFirstTime = false;
      } else {
        //1週間分の日付作成
        week = [...Array(7).keys()].map(ary => ary + nextDay);

        //最終週の場合
        if (week[week.length - 1] >= lastDay) {
          //今月以降の日付をクリアする
          var index = week.findIndex(day => day === lastDay) + 1;
          week.splice(index, 7 - index, ...[...Array(7 - index).fill("-")]);
          //ループを抜けるフラグ
          isContinue = false;
        }
      }

      /*
      //TODO 祝日を表示させたい
      var holidays = holiday_jp.between(
        new Date("2010-09-14"),
        new Date("2010-09-21")
      );
      console.log(holidays[0]["name"]); // 敬老の日
      */

      //今日の場所（row,col）取得
      const nowCol = week.indexOf(today.getDate());
      if (nowCol >= 0) {
        todayRowCol = [nowRow, nowCol];
      }

      //次週の始まりを退避
      nextDay = week[week.length - 1] + 1;
      nowRow++;

      //HTML作成
      calendarHtml += "<tr>";
      week.forEach(day => (calendarHtml += `<td>${day}</td>`));
      calendarHtml += "</tr>";
    }
    return todayRowCol;
  }
  return f();
}
const todayRowCol = displayDays();

// tableタグ終了
calendarHtml += "</table>";
// HTMLに反映
document.querySelector("#calendar").innerHTML = calendarHtml;

// セルの色付け
var table = document.getElementById("calendarTable");
for (var i = 0; i < table.rows.length; i++) {
  // 土日
  table.rows[i].cells[0].style.color = "Red";
  table.rows[i].cells[6].style.color = "Blue";

  for (var j = 0; j < table.rows[i].cells.length; j++) {
    // 今日
    if (i === todayRowCol[0] && j === todayRowCol[1]) {
      table.rows[i].cells[j].style.backgroundColor = "pink";
    }
  }
}
