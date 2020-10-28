let num;
num = 1;
console.log(num);


let num01 = 2;
let num_01 = 3;
let num$01 = 4;
console.log(num01);
console.log(num_01);
console.log(num$01);


let NUM = 10;
console.log(NUM);


// let return = 1;
let string_a = "TEST"
console.log(string_a);
console.log(typeof(string_a));

let a = 10;
let b = 1;
let num_bool;

num_bool = (a > b);
console.log(num_bool);



// 配列
let arr = [1,2];
console.log(arr);


// 条件分岐
console.log("++++++ 条件分岐の例題 +++++++")

let nenrei = 5;

if(nenrei >= 10 && nenrei < 20) {
    console.log("10代");
} else if(nenrei >= 20 && nenrei < 30) {
    console.log("20代");
} else if(nenrei >= 30 && nenrei < 40) {
    console.log("30代");
} else {
    console.log("それ以外");
}



// 繰り返し
console.log("++++++ 繰り返し処理（for）の例題 +++++++")
let counter = 0;

for(counter; counter <= 4; counter++) {
    if(counter == 3) {
        // break;
        continue;
    }
    console.log(counter);
}

console.log("++++++ 繰り返し処理（for）の例題 ~ ネスト +++++++")
for(let i = 0; i <= 2; i++) {

    for(let j = 0; j <= 2; j++) {
        console.log(i + "-" + j);
    }

}

console.log("++++++ 繰り返し処理（for）の例題 ~ 配列表示 +++++++")
let array1 = [2,4,6,8,10];
let arrLength = array1.length;

let sum = 0;

console.log("arrLength = " + arrLength);

for (let k = 0; k <= arrLength - 1; k++) {
    console.log("array[" + k + "] = " + array1[k]);
    sum += array1[k];
}

console.log("sum = " + sum);


// 関数
console.log("++++++ 関数の例題 +++++++")

function say_hello() {
    console.log("Hello World!");
}

say_hello();

let hello = function say_hello2() {
    console.log("Good Morning.");
};

hello();

const msgHello = () => {
    console.log("Hello World!");
};

msgHello();

console.log("++++++ 関数の例題 - 引き数 +++++++")

function say_hello3(greeting) {
    console.log(greeting);
}

say_hello3("Good evening.");

function cal(x, y) {
    console.log(x / y);
}

cal(6, 3);

console.log("++++++ 関数の例題 - 引き数と戻り値 +++++++")

function calReturn(x, y) {
    return(x / y);
}

let result = calReturn(6, 3);
console.log("return = " + result);

console.log("++++++ 関数の例題 - 確認問題 +++++++")

function calKakunin(x, y, z) {
    return(x + y + z);
}

let result_kakunin = calKakunin(10, 5, 8);
console.log(result_kakunin);


// クラス
console.log("++++++ クラスの例題 - クラス名 +++++++")

class Student {

    // メソッド定義（functionは記述しない）
    avg() {
        console.log( (80 + 70) / 2 );
    }

}

// クラスを使う方法
// インスタンス化＝new
let a001 = new Student();
a001.avg();


console.log("++++++ クラスの例題 - クラス（引数あり） +++++++")

class Student2 {

    // メソッド定義（functionは記述しない）
    avg(math, english) {
        console.log((math + english) / 2);
    }

}

// クラスを使う方法
// インスタンス化＝new
let a002 = new Student2();
a002.avg(30, 70);


console.log("++++++ クラスの例題 - クラス（引数あり+プロパティ） +++++++")

class Student3 {

    avg(math, english) {
        console.log( (math + english) / 2 );
    }

}

let a003 = new Student3();

// プロパティ
a003.name = "sato";
// メソッド
a003.avg(80, 70);

console.log(a003.name);
console.log(a003.gender);


console.log("++++++ クラスの例題 - コンストラクタ +++++++")

class Student4 {

    constructor(name) {
        this.name = name;
    }

    avg(math, english) {
        console.log( (math + english) / 2 );
    }

}

let a004 = new Student4("sato");
console.log(a004.name);

let a005 = new Student4("tanaka");
console.log(a005.name);


console.log("++++++ クラスの例題 - クラス式で定義 +++++++")

const Student5 = class {

    constructor(name) {
        this.name = name;
    }

    avg(math, english) {
        console.log((math + english) / 2);
    }

}

let a006 = new Student5("sato");
console.log(a006.name);

let a007 = new Student5("tanaka");
console.log(a007.name);



// 総復習
console.log("****** 【これまでの総復習】 ******")

class Student0 {

    constructor(name) {
        this.name = name;
    }

    cal_avg(data) {

        let sum = 0;
        let i;

        for(i = 0; i <= data.length - 1; i++) {
            sum += data[i];
        }

        let avg = sum / data.length;

        return(avg);

    }

    judge(avg) {

        let result;

        if(avg >= 60) {
            result = "passed";
        } else {
            result = "failed"
        }

        return(result);
    }

}

let a010 = new Student0("sato");
let data = [70, 65, 50, 90, 30];

let avg010 = a010.cal_avg(data);
let result010 = a010.judge(avg010);

console.log("科目数 = " + data.length);
console.log("Name = " + a010.name);
console.log("Avg = " + avg010);
console.log("Result = " + result010);
