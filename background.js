var pageConditions = {
  conditions: [new chrome.declarativeContent.PageStateMatcher({
    pageUrl: { hostEquals: 'www.linkedin.com'}
  })],
  actions: [new chrome.declarativeContent.ShowPageAction()]
}

// Background.js
chrome.runtime.onInstalled.addListener(function(){
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function(){
    chrome.declarativeContent.onPageChanged.addRules([pageConditions]);
  });
}); 