// 今日の日付を取得
const today = new Date();

// 年・月・日を取得
const year = today.getFullYear();
const month = today.getMonth() + 1; // 月は0から始まるため+1する
const day = today.getDate();

// コンソールに出力
console.log(`${year}年${month}月${day}日`);
