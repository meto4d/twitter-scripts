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
    atag.className = "ncpx5i-9 dxGseI UserS";
    atag.target = "_blank";
    atag.text = displayStr

    var doc = document.getElementsByClassName("sze0dl-1 iTCAwa");
    doc[0].appendChild(atag);

})();