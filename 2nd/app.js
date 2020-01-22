// Strictモードを宣言しJavaScriptの危険な構文を禁止する
'use strict'

// 課題1
function isSakana(str){
  if (str === 'さかな'){
    console.log(str + 'は、さかなだよ');
  }
  else{
    console.log(str + 'は、さかなじゃないよ');
  }  
}

isSakana('さかな');
isSakana('かめ');

// 課題2
// 数字の変数が20以上だった場合は、コンソールに文字列「20歳のためお酒が呑めます。」
// 19以下だった場合は、コンソールに文字列「19歳のためお酒は呑めません。」と出力するように実装してください。

function isNomeru(val){
  if(val >= 20){
    console.log('20歳のためお酒が呑めます。');
  }else{
    console.log('19歳のためお酒は呑めません。');
  }
}

isNomeru(20);
isNomeru(19);



// 長澤くんが妻から飲み会に参加するために1万を借りました。 飲み会では一人3500円でした。 さて長澤くんは妻への借金はいくらになるか以下の場合の実装をしてください。
// 
// [1]残金返金した場合
// [2]残金を懐にいれた場合
// [3]帰りに妻への土産もの銀だこ：600円を購入して残金返金した場合

function calcDebt(isGindako, isFtokoro){
  let nagaMoney　= 10000;   //借りたお金
  let Spending = 3500;      //使ったお金
  let futokoro = 0;         //懐に入れたお金

  //実際に使った金額を計算
  if (isGindako){
    Spending += 600;
  }

  //懐に入れたお金を計算
  if (isFtokoro){
    futokoro = nagaMoney - Spending;
  }

  //返金金額
  let ReturnMoney =  nagaMoney - Spending - futokoro;

  //借金
  return nagaMoney - ReturnMoney;
}

//残金返金した場合
console.log(calcDebt(false,false));
//残金を懐にいれた場合
console.log(calcDebt(false,true));
//帰りに妻への土産もの銀だこ：600円を購入して残金返金した場合
console.log(calcDebt(true,false));
//銀だこ買って、残金を懐にいれた場合
console.log(calcDebt(true,true));



