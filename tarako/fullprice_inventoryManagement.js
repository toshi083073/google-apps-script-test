function initializeValues() {
 
  //  '在庫管理　Full Price マニュアル'
  //  https://docs.google.com/presentation/d/1qVy4hepwP5SC12QOg8fx84fpGYfzhVrqM1TXt4dE2jA/edit?usp=sharing
  //  6ページ目を参照、在庫管理表は月度単位(１ファイル)でコピーして翌月度分を作成する。例えば5月度分のファイルをコピーして6月度を作成する。
  //  5月度記載済みのJAN単位での販売数量と入庫数をリセットする為に以下のコードを実行する

  // ファイル名を取得/　シート名を取得
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();

  // 複数シートを取得(全シートで同じ処理をfor分で回すために必要？)
  var sheets = ss.getSheets();

  //最終行数・最終列数を取得
  var rows = sheet.getLastRow()-2;
  var columns = sheet.getLastColumn();

  //販売数量範囲を取得(T3,3行,20列目スタート,範囲,rows行,31列)
  var rangeHanbai = sheet.getRange(3,20,rows,31);

  //在庫数量範囲を取得(AZ3,3行,52列目スタート,範囲,rows行,31列)
  var rangeZaiko = sheet.getRange(3,52,rows,31);

  //データをクリア（初期化する）
  rangeHanbai.clearContent(); //値のみ
  rangeZaiko.clearContent(); //値のみ

  //前月在庫数量を前月のファイルかつ特定のシート（ブランド毎）参照する関数、有働さん；固定値ではなく汎用的な記述にすることは可能でしょうか？
  var outputRange = sheet.getRange(3, 84, rows, 1).setFormula(
    'VLOOKUP(I3,IMPORTRANGE("https://docs.google.com/spreadsheets/d/1pq7DxOAywNXhvfwpaAe5WcQKWfpOitH0UXUrYys01rk/edit#gid=813768962","Claus Porto!$I$3:$S$41"),11,0)'
    );

//最終行の計算式を埋める関数、有働さん；なぜか最終列までコピーされません。何か変でしょうか？
  for(var i=20 ; i<=20 ; i++);
    var copyRange = sheet.getRange(42,19);
    var pasteRange = sheet.getRange(42,20,i,columns);
    copyRange.copyTo(pasteRange);

  // 上記の処理を全シート（シート毎ブランド毎）で同じ処理をする,for分でまわせば良さそうですが、難しく分かりません。ご教授いただけますと助かります！
  // for (i = 0; i < ss.getSheets().length; i++) {

  }