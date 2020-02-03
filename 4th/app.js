// Strictモードを宣言しJavaScriptの危険な構文を禁止する
"use strict";

/*
 * 課題1
 * 引数を使い実行ごと違う文字列が出力する関数を作ってください。出力結果は console.log を使用してください。
 */

function dispMessage(str) {
  console.log(str);
}

dispMessage("こんにちは");
dispMessage("こんばんは");
dispMessage("さようなら");

/*
 * 課題2
 * const numberList = [1000, 423, 544, 1232, 2, 6];
 * 上記の配列から最大値と最小値を返す関数を代入分割を使い max と min で出力するように関数を作ってください。出力結果は console.log を使用してください。
 */

const numberList = [1000, 423, 544, 1232, 2, 6];

function searchMaxMin(numberList) {
  return [Math.max(...numberList), Math.min(...numberList)];
}

const [max, min] = searchMaxMin(numberList);
console.log(`max= ${max} min= ${min}`);

/*
 * 課題3
 * カウントアップする関数をクロージャを使って作ってください。出力結果は console.log を使用してください。
 */

function countUp() {
  var count = 0;

  function counter() {
    return (count += 1);
  }
  return counter;
}

let cnt = countUp();

console.log(cnt());
console.log(cnt());
console.log(cnt());
console.log(cnt());

/*
 * 課題4
 * x 倍できる関数をクロージャを使って作ってください。出力結果は console.log を使用してください。
 */

function multhple(valA) {
  var a = valA;

  function culc(valB) {
    var b = valB;
    return a * b;
  }
  return culc;
}

var multhple2 = multhple(2);
var ans = multhple2(3);
console.log(`2×3=${ans}`);
var ans = multhple2(4);
console.log(`2×4=${ans}`);

var multhple3 = multhple(3);
var ans = multhple3(3);
console.log(`3×3=${ans}`);

/*
課題5
再帰関数を用いて1から n までの自然数の和を返す関数を作ってください。出力結果は console.log を使用してください。
※例えば n が 10 の場合、出力結果は 55 となります

課題6
引数で受け取った配列の値を2倍にして返す高階関数を作成してください。 出力結果は console.log を使用してください。 高階関数の返り値は下記のような結果を期待します。

const num = [1, 2, 3, 4, 5];      // この配列を引数に渡すと
const result = [2, 4, 6, 8, 10];  // それぞれの数値が2倍になった配列が返ってくる
*/
