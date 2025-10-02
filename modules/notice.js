"use strict";
// Localize all elements with a data-i18n="message_name" attribute
var localizedElements = document.querySelectorAll("[data-i18n]"), el, message;
for (var i = 0; i < localizedElements.length; i++) {
    el = localizedElements[i];
    message = browser.i18n.getMessage(el.getAttribute("data-i18n"));

    // Capitalize first letter if element has attribute data-i18n-caps
    if (el.hasAttribute("data-i18n-caps")) {
        message = message.charAt(0).toUpperCase() + message.substr(1);
    }

    el.innerHTML = message;
}

var background = browser.extension.getBackgroundPage();
var tomatoImageEl = document.getElementById("tomato-img");
var noticeContentEl = document.getElementById("notice-content");
var buttonEl = document.getElementById("continue-button");
var noticeTimeEl = document.getElementById("notice-time");

var nextMode = background.mainPomodoro.nextMode;
tomatoImageEl.src = browser.extension.getURL(
    "resources/icons/" + background.getIconMode(nextMode) + "_full.png"
);
noticeContentEl.innerHTML = browser.i18n.getMessage(
    "timer_end_notification_body",
    browser.i18n.getMessage(nextMode)
);
noticeTimeEl.innerHTML = new Date().toString();

function startAndClose() {
    background.startPomodoro();
    window.close();
}

buttonEl.onclick = startAndClose;

document.onkeydown = function (event) {
    var code = event.key;
    if (code == "Enter") {
        if (event.shiftKey && background.mainPomodoro.mostRecentMode == "work") {
            background.skipModeAlways();
        }
        startAndClose();
    }
};

browser.windows.getCurrent(function (window) {
    browser.windows.update(window.id, { drawAttention: true });
});
