(function getUrl() {
    chrome.tabs.getSelected(null, function (tab){
        document.body.innerHTML = "<img src='http://imgs.xkcd.com/comics/duty_calls.png' />";
    })
})();
