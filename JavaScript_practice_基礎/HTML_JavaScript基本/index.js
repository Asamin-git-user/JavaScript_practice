// 変数
let word1 = "Hello World!";
// word1 = "Hello World2!!"
console.log(word1);

// 定数（上書きできない）
const conWord1 = "HELLO WORLD const";
// conWord1 = "aaa";
console.log(conWord1);

// 配列（constでも可）
let wkArray = ["one","two","three"];
console.log(wkArray);
console.log(wkArray[1]);

// ループ文
// カウンタ
let index = 0;
while(index < wkArray.length) {
  // 繰り返したい処理
  // この場合、配列の長さ分ループする
  console.log(index);
  console.log(wkArray[index]);
  index++;
}

// if else文
if(wkArray.length > 3) {
  console.log("True");
} else {
  console.log("False");
}

// 関数（constで関数を定義するのが安牌）
// argは引数（特に何でもいい）
const test = (arg) => {
  // ここに実行したい命令文を書く
  if (wkArray.length > arg) {
    console.log("True");
  } else {
    console.log("False");
  }
};

test(2);
test(3);
test(5);

// オブジェクト
const obj001 = {
  color: 'blue',
  size: 'small',
  // 関数も入れられる
  defObj001: () => {
    console.log("defObj001");
  }
};

console.log(obj001);
console.log(obj001.color);

// 例：Windowオブジェクト＝ブラウザ
console.log(window);
console.log(window.innerWidth);

// window.alert("Hello World!!");

console.log(document);

console.log(
  document.getElementsByTagName("button")
);

// イベント（ユーザアクションなどのタイミング）
document.getElementsByTagName("button")[0].addEventListener("click", () => {
  // 命令を書ける
  window.alert("button1 = Hello World");
});

document.getElementsByTagName("button")[1].addEventListener("click", () => {
  // 命令を書ける
  window.alert("button2が押されました");
});
