'use strict';
{
//htmlのdivのidを取得して、ランダムに取得した文字列を表示するための下処理。
const slots_a = document.getElementById('slots_a');
const slots_b = document.getElementById('slots_b');
const slots_c = document.getElementById('slots_c');

//100個のワードを定数宣言して、代入しやすくする処理(変更もしやすくする。)
const words = ["web制作","雑誌","物々交換"," お金","宿泊","遊び","野球","サイト","こども","通販","保険","パソコン","通信"," インターネット","スマホ","アプリ","シェア","不動産","建設","メディア","メディカル","ロボット","Ai","金融","出版","ロボット","ゲーム","メルカリ","広告","iPhone","サブスクリプション","発電","教育","介護","教育","Amazon","Google","りんご","プリン","メモ","ゴリラ","ラッパ","パンツ","積み木","サッカー","本","時計","レンタル","代行","投資","せどり","Google翻訳","グーグルアース","BASE","クックパッド","キンドル","ホットペッパー","ヤフー乗換案内","カメラフィルター","株価アプリ","Spotify","インスタグラム","ニコニコチャンネル","ツイッター","ウーバーイーツ","検索エンジン","アイデア","漫画","ワンピース","スイーツ","パン","検索履歴","発表会","嘘","タピオカ","優勝","洗剤","Facebook","美術館アプリ","ファッションコーディネート","Yahoo!知恵袋","写真加工","編集","明太子","ガーリック","スタバ","カフェ","ラテ","コーヒー","ポケモン","散歩アプリ","歩数計","絵","ペイント","デザイン","プログラミング","ニュースサイト","ダイエット","LINE","おでん"];

  //ワードを３つに分けて格納して、スロットのように排出するための下処理。 定数はa
  const a = words;
  const b = words;
  const c = words;

  //ランダムに表示するための処理。 定数はslotNo1
  const slotNo1 = Math.floor( Math.random() * a.length);
  const slotNo2 = Math.floor( Math.random() * b.length);
  const slotNo3 = Math.floor( Math.random() * c.length);

//htmlのボタンを取得して、ランダムに取得した文字列をボタンを押して一気にブラウザに表示する処理
function display(){
  const button = document.getElementById("button");
  button.addEventListener("click", function() {
  slots_a.textContent = (a[slotNo1]);
    });
  button.addEventListener("click", function() {
  slots_b.textContent = (b[slotNo2]);
    });
  button.addEventListener("click", function() {
  slots_c.textContent = (c[slotNo3]);
    });
  }
  display();
}