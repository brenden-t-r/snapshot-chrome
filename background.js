// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(tab.id, {
    file: 'content.js'
  });
});


chrome.commands.onCommand.addListener(function(command){
   chrome.tabs.create({url: "http://www.google.com/" + command});
});
