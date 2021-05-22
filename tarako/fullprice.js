function myFunction() {

    var sheetName  = "Claus Porto 6月";
    var sheetName2 = "★Valmont Stock 5月";
    var sheetName3 = "★Aromatherapy Associates 5月";
  
  
    // ファイル名を取得/　シート名を取得
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("シート3");
  
    // var sheet = ss.getSheetByName("Claus Porto 6月");
    // var name = sheet.getName();
    // Logger.log(name);
  
   //③全てのシートを取得
   var sheets = ss.getSheets();
   
   //for文バージョン
   for(var i=0; i<sheets.length; i++){
     var name = sheets[i].getName();
     Logger.log(name);
   }
  
   //⑤-2｜シート名を変更（まとめて×replaceで文字列置換）
   var sheets = ss.getSheets();
   
   sheets.forEach(function(sheet){
  
     //step1.元のシート名を取得
     var name = sheet.getName();
     
     //step2.文字列置換
     name = name.replace("シート","sheet");
     
     //step3.シート名を変更
     sheet.setName(name);
    
   });
  }
  
    // idを取得
    var id = ss.getId();
    Logger.log(id);
  
    // urlを取得
    var url = ss.getUrl();
    Logger.log(url);
  
    // 編集者を取得
    var editors = ss.getEditors();
    Logger.log(editors);
  
    // ファイル名を変更
    // ss.rename("【練習練習】6月 Full Price Stock Tracking (2021年)  のコピー");
  
    // var newFile = ss.copy("コピーしたファイル");
    // var newUrl = newFile.getUrl();
    // const folderId = "18U2EHpYlDvM6S8zrMODoCfK1k_AMziuS"
    // const newUrl = DriveApp.getFileById(fileId);
    // const folder = DriveApp.getFolderById(folderId);
    // file.moveTo(folderId);
    // Logger.log(newUrl);
  