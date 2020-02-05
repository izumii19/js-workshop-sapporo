"use strict";

let calendarHtml = "";
const oneWeek = ["日", "月", "火", "水", "木", "金", "土"];

/* 対象年月 */
let today = new Date();
let dateObj = {
  year: today.getFullYear(),
  month: ("0" + (today.getMonth() + 1)).slice(-2)
};
document.querySelector(
  "#yearMonth"
).innerHTML = `${dateObj.year}/${dateObj.month}`;

/* カレンダー */

// tableタグ開始
calendarHtml += '<table border="1">';

// 曜日作成
// TODO描画処理は１つにまとめられそう
calendarHtml += "<tr>";
oneWeek.forEach(youbi => (calendarHtml += `<th>${youbi}</th>`));
calendarHtml += "</tr>";

/*　TODO　必要な時に、直前で書いたほうがよさそうなので引っ越し
// 当月の日数を取得
let totalDays = new Date(
  today.getFullYear(),
  today.getMonth() + 1,
  0
).getDate();
console.log(totalDays);
*/

// 1日が何曜日か調べる
const dayOfWeek = new Date(today.getFullYear(), today.getMonth(), 1).getDay();

// 1日〜その週末までの日の配列を作成
const firstWeek = [...Array(7 - dayOfWeek).keys()].map(ary => ++ary);

// 1週間分の配列を作成
const week = Array(7).fill("");
week.splice(dayOfWeek, 7 - dayOfWeek, ...firstWeek);
console.log(week);

//最初の週を描画
//TODO描画処理は１つにまとめられそう
calendarHtml += "<tr>";
week.forEach(day => (calendarHtml += `<th>${day}</th>`));
calendarHtml += "</tr>";

// 残りの日数が7以上の場合は、7日描画
// 残りの日数が7未満の場合は、残りを全て描画

// tableタグ終了
calendarHtml += "</table>";
// HTMLに反映
document.querySelector("#calendar").innerHTML = calendarHtml;
