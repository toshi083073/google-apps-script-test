function myFunction(){
    var ss = SpreadsheetApp.getActiveSpreadsheet();

    //ファイル名を取得
    var name = ss.getName();
    Logger.log(name);

    //IDを取得
    var id = ss.getId();
    Logger.log(id);

    //URLを取得
    var url = ss.getUrl();
    Logger.log(url);

    //編集者を取得
    var editors = ss.getEditors();
    Logger.log(editors);

    //ファイル名を変更
    ss.rename("ファイル名を変更");
}
function copy(){
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var newFile = ss.copy("★コピーしたファイル★");
    var newUrl = newFile.getUrl();
    Logger.log(newUrl);
}
function getSheetName(){
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    //1.シート名を指定して取得
    // var sheet = ss.getSheetByName('シート3');
    // var name = sheet.getName();
    // Logger.log(name);
    //2.アクティブなシートを取得
    // var sheet = ss.getActiveSheet();
    // var name = sheet.getName();
    // Logger.log(name);

    //3.全てのシートを取得
    var sheets = ss.getSheets();
    // for (var i =0; i < sheets.length; i++){
    //     var name = sheets[i].getName();
    //     Logger.log(name);
        
        sheets.forEach(function(sheet){
        var name = sheet.getName();
        Logger.log(name);
    });
}
function manupulateSheet(){
    // 1.非表示。再表示
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName('シート3');
    // sheet.hideSheet();
    // sheet.showSheet();

    // 2.タブの色を変更
    sheet.setTabColor(null);



}