"use strict";

const button = document.getElementById("btn");

// クリック時のアクション
button.addEventListener("click", () => {
  // 数の定義
  // 関数は、 0 以上 1 未満 (0 は含むが、 1 は含まない) の範囲
  const n = Math.random();
  if (n < 0.05) {
    button.innerText = "大吉";
  } else if (n < 0.2) {
    button.innerText = "小吉";
  } else {
    button.innerText = "凶";
  }
});

// textContent は、 <script> と <style> 要素を含む、すべての要素の内容を取得。
// 一方、 innerText は「人間が読める」要素のみを示します。
