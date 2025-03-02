// ボタン要素とh2要素を取得
const button = document.getElementById("btn");
const text = document.getElementById("text");

// ボタンがクリックされたときの処理
button.addEventListener("click", function () {
  setTimeout(() =>{
    text.textContent = "ボタンをクリックしました";
  },2000);
});
