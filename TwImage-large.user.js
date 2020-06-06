// ==UserScript==
// @name         TwImage:large
// @namespace    https://github.com/meto4d/twitter-scripts/
// @version      0.2
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
    const MaxSize = 4096;

    function link(){
        var re = new RegExp('https?://pbs.twimg.com/media/.*\.(jpg|png|gif|webp)(&name=(\\w+))?$');
        var match = location.href.match(re);
        if (match) {
            var rename = new RegExp('(\\d+)x(\\d+)');
            var dmatch = match[3].match(rename);
            if(rename.test(match[3])) {
                if(parseInt(dmatch) < MaxSize ){
                    location.href = location.href.replace(match[2], `&name=${MaxSize}x${MaxSize}`);
                }
            }else {
                location.href = location.href.replace(match[2], `&name=${MaxSize}x${MaxSize}`);
            }
        }
    }
})();
