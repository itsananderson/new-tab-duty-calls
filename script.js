(function getUrl() {
    chrome.tabs.getSelected(null, function (tab){
        document.body.innerHTML = '<img src="http://imgs.xkcd.com/comics/duty_calls.png" style="position: absolute; display: block; width: 300px; height: 330px; top: 50%; left: 50%; margin: -165px -150;" />';
    })
})();
