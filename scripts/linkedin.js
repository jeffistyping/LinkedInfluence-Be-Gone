var count = 0;

chrome.storage.local.get("count", result => {
  if (result.count) {
    count = result.count;
  }
});

function throttle(fn, wait) {
  var time = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
}

function callback() {
    var posts = document.querySelectorAll('.feed-shared-text span span span, .feed-shared-text span.break-words span')
    for(let i=0; i < posts.length; i++){
      posts[i].innerHTML = posts[i].innerHTML.replaceAll("<br><br>", _ => {
        count+=1;
        return ""
    });
  }
  saveCount(count);
}

function saveCount(c) {
  chrome.runtime.sendMessage({"count": c});
  chrome.storage.local.set({count: count}); 
}

document.addEventListener('scroll', throttle(callback, 1000));

chrome.runtime.onMessage.addListener(
  (request, sender, sendResponse) => {
    if (request.action == "clear")
      saveCount(0);
      count=0;
  });
