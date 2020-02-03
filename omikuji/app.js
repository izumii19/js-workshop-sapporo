"use strict";

var btn = document.getElementById("omikuji");

function OnButtonClick() {
  alert("おみくじをひくよ");

  var label = document.getElementById("kekka");
  var n = Math.random();
  if (n < 0.3) {
    label.innerText = "大吉"; // 30%
  } else if (n < 0.45) {
    label.innerText = "吉"; // 15%
  } else if (n < 0.6) {
    label.innerText = "中吉"; // 15%
  } else if (n < 0.85) {
    label.innerText = "小吉"; // 15%
  } else {
    label.innerText = "凶"; // 15%
  }
}
