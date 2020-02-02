// Strictモードを宣言しJavaScriptの危険な構文を禁止する
"use strict";

// 課題1
// 既存の配列変数 x_menbers に新しく x_new_menbers という配列変数を作り NEWメンバー HEATH と SUGIZO を追加してください。
// const x_menbers = ['YOSHIKI', 'TOSHI', 'HIDE', 'PATA', 'TAIJI'];

const x_menbers = ["YOSHIKI", "TOSHI", "HIDE", "PATA", "TAIJI"];
const x_new_menbers = [...x_menbers, "HEATH", "SUGIZO"];
console.log(x_menbers);
console.log(x_new_menbers);

// 課題2
// 小文字や大文字が混ざっている配列 mix_menber_names を大文字に統一して新しく upper_menber_names を作ってください。

const mix_menber_names = [
  "YoShIKi",
  "ToShI",
  "HIdE",
  "paTA",
  "TAiJI",
  "hEAtH",
  "sUGIzo"
];
const upper_menber_names = mix_menber_names.map(val => val.toUpperCase());
console.log(mix_menber_names);
console.log(upper_menber_names);

// 課題3
// 以下の配列の並び順を昇順になるように新しい配列で並び替えてください。
// const numbers = [5, 6, 4, 2, 10, 44, 33, 30, 50, 1, 999, 79, 48, 66];

const numbers = [5, 6, 4, 2, 10, 44, 33, 30, 50, 1, 999, 79, 48, 66];

function compareFunc(a, b) {
  return a - b;
}

const sortedNumbers = numbers.sort(compareFunc);
console.log(sortedNumbers);

//課題4
//以下の変数配列 items から3の倍数を絞り込みして、新しい new_items の変数配列を作ってください。

const items = [5, 2, 7, 8, 3, 1, 6, 8, 4];

const new_items = items.filter(item => item % 3 == 0);
console.log(new_items);

//課題5
//以下の配列 city を、 配列 prefecture の id で絞り込みされた配列を作ってください。
//
//const city = [
//  { id: 1, pref_id: 1, name: '札幌市' },
//  { id: 2, pref_id: 1, name: '旭川市' },
//  { id: 3, pref_id: 2, name: '青森市' },
//  { id: 4, pref_id: 3, name: '盛岡市' },
//  { id: 5, pref_id: 4, name: '秋田市' }
//];
//
//const prefecture = [
//  { id: 1, name: '北海道' },
//  { id: 3, name: '岩手県' }
//];

const city = [
  { id: 1, pref_id: 1, name: "札幌市" },
  { id: 2, pref_id: 1, name: "旭川市" },
  { id: 3, pref_id: 2, name: "青森市" },
  { id: 4, pref_id: 3, name: "盛岡市" },
  { id: 5, pref_id: 4, name: "秋田市" }
];

const prefecture = [{ id: 1, name: "北海道" }, { id: 3, name: "岩手県" }];

const target_city = city.filter(city =>
  prefecture.some(pref => pref.id === city.pref_id)
);

console.log(target_city);

// 課題6
// 以下の配列 cart から price の合計値を求めてください。
// ※消費税は加算しないものとします。
// 1372になるはず

const cart = [
  { id: 1, name: "りんご", price: 80, count: 1 },
  { id: 2, name: "みかん", price: 40, count: 5 },
  { id: 3, name: "梨", price: 150, count: 2 },
  { id: 4, name: "桃", price: 198, count: 4 }
];

// 果物ごとの合計を算出
const sum = cart.map(fruits => fruits.price * fruits.count);

let total = 0;
sum.forEach(function(elm) {
  total += elm;
});
console.log(total);

// 課題7
// 以下の配列 cart から price の消費税も含めた合計値を求めてください。
// 消費税は配列 tax を使用し、各商品の合計値の小数点は切り捨ててください。
// ヒント： 小数点切り捨ては Math.floor(number) で出来ます。

const foodCart = [
  { id: 1, name: "ビール", price: 198, count: 2, tax_id: 2 },
  { id: 2, name: "ストロングゼロ", price: 100, count: 1, tax_id: 2 },
  { id: 3, name: "豚肉", price: 212, count: 1, tax_id: 1 },
  { id: 4, name: "玉ねぎ", price: 37, count: 2, tax_id: 1 },
  { id: 5, name: "おろし生姜", price: 90, count: 1, tax_id: 1 }
];

const tax = [{ id: 1, value: 1.08 }, { id: 2, value: 1.1 }];

//出力用の配列
const totalFee = [];

foodCart.forEach(function(food) {
  const findTax = tax.find(item => item.id === food.tax_id);
  const val = Math.floor(food.price * findTax.value) * food.count;
  totalFee.push(val);
});

console.log(...totalFee);

// 課題8
// 消費税の計算は式は以下になります。
// https://www.keigenzeiritsu.info/article/18882
// 本体価格＝税込み価格÷（1＋税率）
// 以下の配列 cart から price は税込み価格になります。消費税8%と10%を組み合わせて税抜価格の合計値を求めてください。 ※小数点は四捨五入する
//酒：10%
//水道代：10%
//食料品：8%
//新聞定期購読：8%
//ペットフード：10%

const cart3 = [
  { id: 1, name: "酒", price: 126, tax: 10 },
  { id: 2, name: "水道代", price: 5867, tax: 10 },
  { id: 3, name: "食料品", price: 3533, tax: 8 },
  { id: 4, name: "新聞定期購読", price: 4900, tax: 8 },
  { id: 5, name: "ペットフード", price: 3250, tax: 10 },
  { id: 6, name: "コーヒー", price: 225, tax: 8 }
];

//税率をつかって税抜価格(temp)を算出する
//tempを使って、税込み価格（reverse）を算出する
//reverseが、税込み価格と同じかどうか判断する
//同じじゃなかったら、税込み価格と同じになるように税抜き価格を調整する

function withoutTax(price, tax) {
  const coefficient = 1 + tax / 100;
  let rtnVal = Math.round(price / coefficient);
  const reverse = Math.round(rtnVal * coefficient);
  if (price > reverse) {
    rtnVal += 1;
  } else if (price < reverse) {
    rtnVal -= 1;
  }
  return rtnVal;
}

let totalVal = 0;
cart3.forEach(fee => (totalVal += withoutTax(fee.price, fee.tax)));
console.log(`合計 = ${totalVal}`);

/* 課題9
countryLists の配列（国）から countryAreaLists の配列を条件（エリアごと）を参照して、各国が所属するエリアに格納された形で countryListGroups という変数オブジェクトを作成してください。（ Asia、Europe、Africa、MiddleEast、Oceania ）
出力結果 console.log(countryListGroups)
{
  Asia: ['日本', '中国', 'インド'],
  Europe: ['ロシア', 'フランス', 'イギリス'],
  Africa: ['カメルーン', 'エジプト'],
  MiddleEast: ['サウジアラビア'],
  Oceania: ['ニュージーランド']
}
*/

const countryLists = [
  "日本",
  "ロシア",
  "アメリカ",
  "フランス",
  "ニュージーランド",
  "エジプト",
  "中国",
  "インド",
  "サウジアラビア",
  "カメルーン",
  "イギリス"
];
const countryAreaLists = [
  { area: "アジア", countries: ["日本", "中国", "インド"] },
  { area: "ヨーロッパ", countries: ["フランス", "ロシア", "イギリス"] },
  { area: "アフリカ", countries: ["カメルーン", "エジプト"] },
  { area: "中東", countries: ["サウジアラビア"] },
  { area: "オセアニア", countries: ["ニュージーランド"] }
];

//追加先のオブジェクトを定義

const countryListGroups = {
  Asia: [],
  Europe: [],
  America: [],
  Africa: [],
  MiddleEast: [],
  Oceania: []
};

//countryLists を forEach で回す
countryLists.forEach(function(country) {
  const countryArea = countryAreaLists.filter(
    item => item.countries.indexOf(country) >= 0
  );
  console.log(country);
  console.log(countryArea);
});

//フィルタリングした結果は filtered へ代入
//filtered の値を元に switch 構文で条件マッチしたエリアに countryListGroups.XXXX へ push します。

/*
課題10
[1, 2, 3, 4, 5, 6, 7] の配列の要素を逆順の配列を出力してください。

// 出力結果
[7, 6, 5, 4, 3, 2, 1]
課題11
[[1, 2, 3], [4, 5], [6, 7]] のネストされた配列をネストされていない配列の形にして出力してください。

// 出力結果
[1, 2, 3, 4, 5, 6, 7]
課題12
[[1, 2, 3], [4, 5], [6, 7]] のネストされた配列から以下の配列を出力してください。

// 出力結果
[7, 6, 5, 4, 3, 2, 1]

*/
