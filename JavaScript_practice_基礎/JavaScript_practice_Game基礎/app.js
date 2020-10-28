/*
// 問題文
const question = "ゲーム史上、最も売れたゲーム機はどれ？"

// 回答選択肢
const answers = [
  "スーパーファミコン",
  "プレイステーション２",
  "ニンテンドースイッチ",
  "ニンテンドーDS"
];

// 回答の答え
const correct = "ニンテンドーDS";

// 問題文をHTMLに反映させる
console.log(document.getElementsByTagName("div"));
// IDで探して反映する（Tagでは複数あるので）
console.log(document.getElementById("js-question"));

// コンテンツの中身（テキスト）
console.log(document.getElementById("js-question").textContent);
// 元々のテキストを書き換える（例）
document.getElementById("js-question").textContent = "TEST";

// 本来の当アプリでの文言＝問題文に書き換えてみる
document.getElementById("js-question").textContent = question;


// 各ボタンに選択文言に変更する
// １つ１つボタンに設定する場合の書き方（配列はゼロから）
console.log(document.getElementsByTagName("button"));
console.log(document.getElementsByTagName("button").length);

document.getElementsByTagName("button")[0].textContent = answers[0];
document.getElementsByTagName("button")[1].textContent = answers[1];
document.getElementsByTagName("button")[2].textContent = answers[2];
document.getElementsByTagName("button")[3].textContent = answers[3];

// console.log(document.getElementsByTagName("button")[0];
// console.log(answers[count]);


// While文を使った場合
// ボタンの数分、繰り返す（文言の配列と同様に、ボタンもゼロから始まる）
let btn_len = document.getElementsByTagName("button").length;
let count = 0;

while(count < btn_len) {
  // console.log(document.getElementsByTagName("button")[count].textContent);
  // console.log(answers[count]);
  document.getElementsByTagName("button")[count].textContent = answers[count];
  count++;
};


// ボタンのクリックイベント処理（４つ作る）
document.getElementsByTagName("button")[0].addEventListener("click", () => {
  if(correct === document.getElementsByTagName("button")[0].textContent) {
    window.alert("正解！");
  } else {
    window.alert("不正解");
  }
});

*/
// ここまで基礎を使ってのロジック（分かりやすく残しておく）



// ********************************************************
// リファクタリング（内部構造を改善＝整えること）
// ********************************************************
// ここから上記を使って書き換えてみると…↓↓↓↓↓↓↓↓↓↓↓↓


// // 問題文
// const question = "ゲーム史上、最も売れたゲーム機はどれ？"

// // 回答選択肢
// const answers = [
//   "スーパーファミコン",
//   "プレイステーション２",
//   "ニンテンドースイッチ",
//   "ニンテンドーDS"
// ];

// // 回答の答え
// const correct = "ニンテンドーDS";


// 2問目、3問目と続くようにする。
// answerなど複数回書くのは面倒なので、
// quizという配列を使ってクイズ分作る。
// 以下、オブジェクトで扱う。
const quiz = [
  // 問題１
  {
    question: "ゲーム史上、最も売れたゲーム機はどれ？",
    answers: [
      "スーパーファミコン",
    "プレイステーション２",
    "ニンテンドースイッチ",
    "ニンテンドーDS"
    ],
    correct: "ニンテンドーDS"
  },
// 問題２
  {
    question: "糸井重里が企画に加わった、任天堂の看板ゲームは？",
    answers: [
      "MOTHER2",
      "スーパーマリオブラザーズ3",
      "スーパードンキーコング",
      "星のカービィ"
    ],
    correct: "MOTHER2"
  },
  // 問題３
  {
    question: "ファイナルファンタジーⅣの主人公は誰？",
    answers: [
      "フリオニール",
      "クラウド",
      "ティーダ",
      "セシル"
    ],
    correct: "セシル"
  }
];

// クイズの問題数（ここでは３）
const quizLength = quiz.length;
let quizCounter = 0;

// 正解数を結果画面に出すための変数
let score = 0;

// ボタンが複数回出てきて、長くてややこしい。
// そこで、定数を使って、ボタンを定数扱いにする。
// 何度も使うものは変数や定数にして扱う。
// さらに、＄マークを頭に使うことで、HTMLオブジェクトが入っていることを認識しやすい。
const $button = document.getElementsByTagName("button");
const btnLength = $button.length;

// 初期設定（関数化して一纏めに）
const setupQuiz = () => {
  // ①問題文をセットする。
  //   ⇒複数回に対応するために、quistionでなく、quizのIndexで制御する。
  //   ⇒要するに、今は何問目を指定する必要があるため。
  // document.getElementById("js-question").textContent = question;
  document.getElementById("js-question").textContent = quiz[quizCounter].question;

  // ②選択ボタンの文言を書き換える（４つ分Whileで）
  //   ⇒ボタンも配列扱いで処理する
  let count = 0;

  while (count < btnLength) {
    // $button[count].textContent = answers[count];
    $button[count].textContent = quiz[quizCounter].answers[count];
    count++;
  };
};

setupQuiz();

// ボタンのクリックイベント処理（４つ作る）
// ①クリックイベントの引数＝eとする。
//   ⇒eとはイベントオブジェクトを指す。
//   ⇒eの中身は、どんなイベントか、Window情報など色々詰まっている。
//   ⇒その中の「target」をつかって、どのボタンかを指すようにする。
// ②正解、不正解のif文は何回も出てくるので、別関数化して定義する。
// ③While文を使う。

// ①②
//
// 拡張して、回答したら次の問題に行くようにする。
const clickHandler = (e) => {
  // if (correct === e.target.textContent) {
  if(quiz[quizCounter].correct === e.target.textContent) {
    window.alert("正解！");
    // スコア（正解数）を足す
    score++;
  } else {
    window.alert("不正解");
  }

  quizCounter++;

  if(quizCounter < quizLength) {
    // 問題数が残っていれば続きを実行
    setupQuiz();
  } else {
    // 問題数がもう無ければ終了する
    window.alert("終了");
    window.alert("あなたの正解数は、" + score + "／" + quizLength + "です。")
  }

};

let counter = 0;

// ①③
while(counter < btnLength) {
  $button[counter].addEventListener("click", (e) => {
    clickHandler(e);
  });
  counter++;
};






