// Strictモードを宣言しJavaScriptの危険な構文を禁止する
"use strict";

// 課題1
function isSakana(str) {
  if (str === "さかな") {
    console.log(str + "は、さかなだよ");
  } else {
    console.log(str + "は、さかなじゃないよ");
  }
}

isSakana("さかな");
isSakana("かめ");

// 課題2
// 数字の変数が20以上だった場合は、コンソールに文字列「20歳のためお酒が呑めます。」
// 19以下だった場合は、コンソールに文字列「19歳のためお酒は呑めません。」と出力するように実装してください。

function isNomeru(val) {
  if (val >= 20) {
    console.log("20歳のためお酒が呑めます。");
  } else {
    console.log("19歳のためお酒は呑めません。");
  }
}

isNomeru(20);
isNomeru(19);

// 課題3
// 長澤くんが妻から飲み会に参加するために1万を借りました。 飲み会では一人3500円でした。 さて長澤くんは妻への借金はいくらになるか以下の場合の実装をしてください。
//
// [1]残金返金した場合
// [2]残金を懐にいれた場合
// [3]帰りに妻への土産もの銀だこ：600円を購入して残金返金した場合

function calcDebt(isGindako, isFtokoro) {
  let nagaMoney = 10000; //借りたお金
  let Spending = 3500; //使ったお金
  let futokoro = 0; //懐に入れたお金

  //実際に使った金額を計算
  if (isGindako) {
    Spending += 600;
  }

  //懐に入れたお金を計算
  if (isFtokoro) {
    futokoro = nagaMoney - Spending;
  }

  //返金金額
  let ReturnMoney = nagaMoney - Spending - futokoro;

  //借金
  return nagaMoney - ReturnMoney;
}

//残金返金した場合
console.log(calcDebt(false, false));
//残金を懐にいれた場合
console.log(calcDebt(false, true));
//帰りに妻への土産もの銀だこ：600円を購入して残金返金した場合
console.log(calcDebt(true, false));
//銀だこ買って、残金を懐にいれた場合
console.log(calcDebt(true, true));

// 課題4
// 数字が代入された変数 vitality を作成する
// vitality が30未満の場合はコンソールに「DANGER」と出力する
// vitality が30以上50未満の場合はコンソールに「WARNING」と出力する
// vitality が50以上70未満の場合はコンソールに「CAUTION」と出力する
// vitality が70以上100以下の場合はコンソールに「NOTICE」と出力する
// 上記以外の数値が変数 vitality に代入されている場合はコンソールに「ERROR」と出力する

function checkVitality(vitality) {
  if (vitality < 30) {
    console.log("DANGER");
  } else if (vitality >= 30 && vitality < 50) {
    console.log("WARNING");
  } else if (vitality >= 50 && vitality < 70) {
    console.log("CAUTION");
  } else if (vitality >= 70 && vitality <= 100) {
    console.log("NOTICE");
  } else {
    console.log("ERROR");
  }
}

checkVitality(29);
checkVitality(30);
checkVitality(50);
checkVitality(70);
checkVitality(100);
checkVitality(101);

// 課題5
// 下記の要件を満たすプログラムを実装してください。
// 変数 anything を作成する
// anything に代入された値が 文字列型 の場合はコンソールに「anything is String」と出力する
// anything に代入された値が 数値型 の場合はコンソールに「anything is Number」と出力する
// ただし NaN(Not a Number) は含めないものとする（後述の「anything is Error!」をコンソールに出力）
// anything に代入された値が 配列 の場合はコンソールに「anything is Array」と出力する
// anything に代入された値が null の場合はコンソールに「anything is Null」と出力する
// anything に代入された値が上記に当てはまらない場合は「anything is Error!」をコンソールに出力する

/* 課題6
下記の要件を満たすプログラムを実装してください。

変数 member を作成する
member を代入された値が 森崎 の場合はコンソールに「博之」と出力する
member を代入された値が 安田 の場合はコンソールに「顕」と出力する
member を代入された値が 戸次 の場合はコンソールに「重幸」と出力する
member を代入された値が 大泉 の場合はコンソールに「洋」と出力する
member を代入された値が 音尾 の場合はコンソールに「琢真」と出力する
member に代入された値が上記に当てはまらない場合は「NOT TEAM NACS!」をコンソールに出力する
課題7
次の配列を for文で回して、句読点区切りの文字列でコンソールに表示させてください。
尚、配列の最後の場合は句読点を末尾に表示しません。

const TEAM_NACS = ['森崎', '安田', '戸次', '大泉', '音尾']
課題8
下記の要件を満たすプログラムを実装してください。

数値は1〜30までインクリメントしながら数値をコンソールに出力する
3の倍数の場合は「アホになる！」をコンソールに出力する
課題9
コンソールで九九表を出力してください。

1	2	3	4	5	6	7	8	9
2	4	6	8	10	12	14	16	18
3	6	9	12	15	18	21	24	27
4	8	12	16	20	24	28	32	36
5	10	15	20	25	30	35	40	45
6	12	18	24	30	36	42	48	54
7	14	21	28	35	42	49	56	63
8	16	24	32	40	48	56	64	72
9	18	27	36	45	54	63	72	81
ヒント：配列の使用も認めます

課題10
コンソールで「*」のピラミッドを出力してください。

例

  *
        ***
       *****
      *******
     *********
    ***********
   *************
  ***************
 *****************
*******************




//const num = [1, 2, 3];
//const newNum = num.map(data => {
//  return data * 10;
//});
*/
