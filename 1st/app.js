// Strictモードを宣言しJavaScriptの危険な構文を禁止する
'use strict'

// 未定義
let varIsUndefined;
console.log(varIsUndefined);
console.log(typeof varIsUndefined);

// null
let varIsNull = null;
console.log(varIsNull);
console.log(typeof varIsNull);

// 文字列型
let str = 'js workshop sapporo 第1回目';
console.log(str);
console.log(typeof str);

// 数値型
let num = 123;
console.log(num);
console.log(typeof num);

// 真偽値
let bool = true;
console.log(bool);
console.log(typeof bool);

// 配列
let array = [1, 2, 3];
console.log(array);
console.log(typeof array);

// オブジェクト
let obj = {
  hoge: 'ほげ',
  piyo: 'ぴよ'
};
console.log(obj);
console.log(typeof obj);

// 関数（アロー関数）
const func = () => '関数';
console.log(func());
console.log(typeof func());

