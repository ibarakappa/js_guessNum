const min = document.querySelector(".min");
const max = document.querySelector(".max");
const button = document.querySelector(".btn");
const input = document.querySelector("#input");
const title = document.querySelector(".title");
const number = document.querySelector(".number");
const again = document.querySelector(".again");
//取得隨機亂數
let random = Math.floor(Math.random() * 100) + 1;

let a = parseInt(max.innerText, 10);
console.log(a);
button.addEventListener("click", function () {
   let maxnum = parseInt(max.innerText, 10);
   let minnum = parseInt(min.innerText, 10);
   console.log(maxnum);
   if (input.value == random) {
      title.innerText = "恭喜答對了";
   } else if (input.value > random && input.value < maxnum) {
      max.innerText = input.value;
   } else if (input.value < random && input.value > minnum) {
      min.innerText = input.value;
   } else {
      title.innerText = "請輸入正確數字";
   }

   input.value = null;
});

again.addEventListener("click", function () {
   window.location.reload();
});
console.log(max);
