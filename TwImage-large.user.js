// ==UserScript==
// @name         TwImage:large
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  redirect to twitter image:large
// @author       Ruth
// @match        https://pbs.twimg.com/media/*
// @include      https://pbs.twimg.com/media/*
// @grant        none
// @license      public domain
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(link, 0);

    function link(){
        var re = new RegExp('https?://pbs.twimg.com/media/.*\.(jpg|png|gif|webp)$');
        if (re.test(location.href) ) {
            location.href+=':large';
        }
    }
})();