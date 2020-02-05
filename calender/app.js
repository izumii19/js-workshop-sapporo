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
calendarHtml += '<table border="1">';

// 曜日作成
calendarHtml += "<tr>";
oneWeek.forEach(youbi => (calendarHtml += `<th>${youbi}</th>`));
calendarHtml += "</tr>";

// 1日が何曜日か調べる
const dayOfWeek = new Date(today.getFullYear(), today.getMonth(), 1).getDay();

// 1日〜その週末までの日の配列を作成
const firstDays = [...Array(7 - dayOfWeek).keys()].map(ary => ++ary);

// 当月の日数を取得
var lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

//日付を描画
function displayDays() {
  var isFirstTime = true;
  var isContinue = true;
  var nextDay = 0;

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
      //次週の始まりを退避
      nextDay = week[week.length - 1] + 1;

      //HTML作成
      calendarHtml += "<tr>";
      week.forEach(day => (calendarHtml += `<th>${day}</th>`));
      calendarHtml += "</tr>";
    }
  }
  f();
}
displayDays();

/*
var isFirstTime = true;
var nextDay = 0;
for (let i = 1; i <= 7; i++) {
  // 1週間分の配列を作成
  var week = Array(7).fill("");

  if (isFirstTime) {
    //配列を途中から上書き
    week.splice(dayOfWeek, 7 - dayOfWeek, ...firstDays);
    isFirstTime = false;
  } else {
    console.log(nextDay);
    week = [...Array(7).keys()].map(ary => ary + nextDay);
  }
  console.log(week);
  nextDay = week[week.length - 1] + 1;

  calendarHtml += "<tr>";
  week.forEach(day => (calendarHtml += `<th>${day}</th>`));
  calendarHtml += "</tr>";
}
*/
//最初の週を描画
//TODO描画処理は１つにまとめられそう

// 残りの日数が7以上の場合は、7日描画

// 残りの日数が7未満の場合は、残りを全て描画

// tableタグ終了
calendarHtml += "</table>";
// HTMLに反映
document.querySelector("#calendar").innerHTML = calendarHtml;
