const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"]

// for文の場合
for (let i = 0; i < 2; i++) {  // 2回繰り返す
  for (let j = 0; j < holidays.length; j++) {  // holidaysの要素を順番に取得
      console.log(holidays[j]);  // 各祝日を出力
  }
}

// while文の場合
let count = 0;  // 2回繰り返すための変数

while (count < 2) {  // count が 2 未満ならループ
    let index = 0;  // 配列のインデックスを初期化
    while (index < holidays.length) {  // holidays の長さ分ループ
        console.log(holidays[index]);  // 各祝日を出力
        index++;  // 次の要素へ
    }
    count++;  // 繰り返し回数を増やす
}
