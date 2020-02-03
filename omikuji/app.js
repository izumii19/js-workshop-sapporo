"use strict";

var btn = document.getElementById("omikuji");

function OnButtonClick() {
  alert("おみくじをひくよ");
}

/*
(function() {
  btn.addEventListener("click", function() {
    var n = Math.random();
    if (n < 0.3) {
      this.textContent = "大吉"; // 30%
    } else if (n < 0.45) {
      this.textContent = "吉"; // 15%
    } else if (n < 0.6) {
      this.textContent = "中吉"; // 15%
    } else if (n < 0.85) {
      this.textContent = "小吉"; // 15%
    } else {
      this.textContent = "凶"; // 15%
    }
  });
  btn.addEventListener("mousedown", function() {
    this.className = "pushed";
  });
  btn.addEventListener("mouseup", function() {
    this.className = "";
  });
})();
  */
