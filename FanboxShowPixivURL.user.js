// ==UserScript==
// @name         FanboxShowPixivURL
// @namespace    https://github.com/meto4d/twitter-scripts/
// @version      0.1
// @description  display the link of pixiv account in pixiv fanbox
// @author       Ruth
// @match        https://www.pixiv.net/fanbox/creator/*
// @grant        none
// ==/UserScript==
var displayStr = "PIXIV";

(function() {
    'use strict';

    // Your code here...
    var path = location.pathname.match(/creator\/\d*/);
    path = path[0].match(/\d+/);
    var atag = document.createElement('a');
    atag.href = '/member.php?id='+path[0];
    //atag.className = "sc-12vwwk0-0 bfMPiw UserS";
    atag.target = "_blank";
    atag.text = displayStr

    document.getElementsByTagName('a').forEach((a) => {
        if(a.text == 'プロフィール') {
            atag.className = a.className + " UserS";
            a.parentNode.appendChild(atag);
        }
    });
    //var doc = document.getElementsByClassName("r3b5jq-1 kDwORE");
    //doc[0].appendChild(atag);

})();