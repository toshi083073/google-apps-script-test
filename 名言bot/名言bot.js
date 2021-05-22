/**
 * スプレッドシートの名言を一つチャットワークに送信するBot
*/
function myFunction() {
    const sheet = SpreadsheetApp.getActiveSheet(); 
    const lastRow = sheet.getLastRow();
    const token = PropertiesService.getScriptProperties().getProperty('CW_TOKEN');
    
    for(let i = 2; i <= lastRow; i++) {
      if(!sheet.getRange(i, 4).getValue()){ 

        const values = sheet.getRange(i, 1, 1, 3).getValues();
        let body = '[info]';
        body += values[0][0] + '[hr]';//meigen
        body += values[0][1] + '\n';//person
        body += '(' +values[0][2] + ')[/info]';//info

        // const body = sheet.getRange(i, 1).getValue();
        sendMessage(token, body);
        sheet.getRange(i, 4).setValue(true);
        
        if(i >= lastRow) {
          sheet.getRange(2, 4, lastRow - 1).clearContent();
        }
        break;
      }
    }
  }
  /**
 * チャットワークのマイチャットにメッセージを送信する
 *
 * @param {string} token - チャットワークAPIトークン
 * @param {string} body - マイチャットに送信するメッセージ本文
*/
  function sendMessage(token, body){
    const cw = ChatWorkClient.factory({token: token});
    cw.sendMessageToMyChat(body);
  }
//   function setScriptProperty(){
//       PropertiesService.getScriptProperties().setProperty('CW_TOKEN','bed2c4336b19f75a21b13ced5bbf5afb');
//   }
//   function logToken(){
//       const token = PropertiesService.getScriptProperties().getProperty('CW_TOKEN')
//       console.log(token);
//   }