
var thoughtTime = document.querySelector('#mins');
var thoughtLeader = document.querySelector('#thought-leader');
var restartMinutes = document.querySelector('#restart');

chrome.storage.local.get("count", result => {
  if (result.count) {
    thoughtTime.innerText = result.count;
    leader(result.count);
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {leader(request.count);});

restartMinutes.onclick = function () {
  chrome.tabs.query({
    active: true,
    lastFocusedWindow: true
  }, tabs => {
    let url = tabs[0].url;
    chrome.tabs.sendMessage(tabs[0].id, {action: "clear"});
  });
}

function leader(c){
  c = parseInt(c);
  if (c < 100) {
    thoughtLeader.setAttribute("src","thonks/thonk0.png");
    thoughtTime.innerText = c;
  }
  else if (c >= 100 && c < 500) {
    thoughtLeader.setAttribute("src","thonks/thonk1.png");
    thoughtTime.innerText = c;
  }
  else if (c >= 500 && c < 1000) {
    thoughtLeader.setAttribute("src","thonks/thonk2.png");
    thoughtTime.innerText = c;
  }
  else if (c >= 1000 && c < 2000){
    thoughtLeader.setAttribute("src","thonks/thonk3.png");
    thoughtTime.innerText = c;
  }
  else if (c >= 2000 && c < 3000){
    thoughtLeader.setAttribute("src","thonks/thonk4.png");
    thoughtTime.innerText = c;
  }
  else if (c >= 3000 && c < 5000){
    thoughtLeader.setAttribute("src","thonks/thonk5.png");
    thoughtTime.innerText = c;
  }
  else if (c >= 5000 && c < 7500){
    thoughtLeader.setAttribute("src","thonks/thonk6.png");
    thoughtTime.innerText = c;
  }
  else if (c >= 7500 && c < 10000){
    thoughtLeader.setAttribute("src","thonks/thonk7.png");
    thoughtTime.innerText = (c/1000).toFixed(2) + "K";
  }
  else if (c >= 10000 && c < 12500){
    thoughtLeader.setAttribute("src", "thonks/thonk8.png");
    thoughtTime.innerText = (c/1000).toFixed(2) + "K";
  }
  else if (c >= 12500 && c < 15000){
    thoughtLeader.setAttribute("src", "thonks/thonk9.png");
    thoughtTime.innerText = (c/1000).toFixed(2) + "K";
  }
  else if (c >= 15000 && c < 20000){
    thoughtLeader.setAttribute("src", "thonks/thonk10.png");
    thoughtTime.innerText = (c/1000).toFixed(2) + "K";
  }
  else if (c >= 20000 && c < 25000){
    thoughtLeader.setAttribute("src", "thonks/thonk11.png");
    thoughtTime.innerText = (c/1000).toFixed(2) + "K";
  }
  else if (c >= 25000 && c < 50000){
    thoughtLeader.setAttribute("src", "thonks/thonk12.png");
    thoughtTime.innerText = (c/1000).toFixed(2) + "K";
  }
  else if (c >= 50000 && c < 100000){
    thoughtLeader.setAttribute("src", "thonks/thonk13.png");
    thoughtTime.innerText = (c/1000).toFixed(2) + "K";
  }
  else if (c >= 100000 && c < 1000000){
    thoughtLeader.setAttribute("src", "thonks/thonk14.png");
    thoughtTime.innerText = (c/1000).toFixed(2) + "K";
  }
  else if (c >= 1000000 && c < 10000000){
    thoughtLeader.setAttribute("src", "thonks/thonk15.png");
    thoughtTime.innerText = (c/1000000).toFixed(2) + "M";
  }
  else if (c >= 10000000)  {
    thoughtLeader.setAttribute("src", "thonks/thonk16.png");
    thoughtTime.innerText = (c/10000000).toFixed(2) + "B";
  }
}


